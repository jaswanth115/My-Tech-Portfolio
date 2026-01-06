import { useState, useEffect } from 'react';
import { Code, Terminal, Database, Globe, Cpu, Layout, Server, FileJson } from 'lucide-react';

const gradients = [
    "from-purple-500 to-indigo-600",
    "from-pink-500 to-rose-500",
    "from-amber-400 to-orange-500",
    "from-blue-400 to-cyan-500",
    "from-emerald-400 to-teal-500",
    "from-fuchsia-500 to-purple-600",
];

const getIconForLanguage = (language) => {
    switch (language?.toLowerCase()) {
        case 'javascript':
        case 'typescript':
            return Code;
        case 'html':
        case 'css':
        case 'scss':
            return Layout;
        case 'python':
            return Terminal;
        case 'java':
            return Cpu;
        case 'sql':
            return Database;
        default:
            return FileJson;
    }
};

const useGitHubRepos = (username) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();

                const formattedRepos = data
                    .filter(repo => !repo.fork) // Optional: filter out forks
                    .map((repo, index) => ({
                        id: repo.id,
                        title: repo.name,
                        subtitle: repo.language || 'Code',
                        description: repo.description,
                        link: repo.html_url,
                        icon: getIconForLanguage(repo.language),
                        gradient: gradients[index % gradients.length],
                        tech: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language].filter(Boolean)
                    }));

                setRepos(formattedRepos);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    return { repos, loading, error };
};

export default useGitHubRepos;
