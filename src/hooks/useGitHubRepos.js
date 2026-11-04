import { useState, useEffect } from 'react';
import { Wrench, Bolt, Hammer, Cog, Pickaxe, HardHat, Axe, Shovel, Ruler, Key } from 'lucide-react';

const toolIcons = [
    { icon: Wrench, bg: 'linear-gradient(160deg, #3d3d3d 0%, #1a1a1a 100%)', color: '#d4d4d4' },
    { icon: Bolt, bg: 'linear-gradient(160deg, #5a4a1a 0%, #1c1508 100%)', color: '#f5c542' },
    { icon: Hammer, bg: 'linear-gradient(160deg, #4a3424 0%, #1a120c 100%)', color: '#e0b080' },
    { icon: Cog, bg: 'linear-gradient(160deg, #334155 0%, #0f172a 100%)', color: '#94a3b8' },
    { icon: Pickaxe, bg: 'linear-gradient(160deg, #4a2c1a 0%, #1a0e08 100%)', color: '#d97706' },
    { icon: HardHat, bg: 'linear-gradient(160deg, #5a4a00 0%, #1a1600 100%)', color: '#facc15' },
    { icon: Axe, bg: 'linear-gradient(160deg, #4a1c1c 0%, #1a0a0a 100%)', color: '#f87171' },
    { icon: Shovel, bg: 'linear-gradient(160deg, #1e3a2f 0%, #0a1612 100%)', color: '#86efac' },
    { icon: Ruler, bg: 'linear-gradient(160deg, #164e63 0%, #082f3a 100%)', color: '#67e8f9' },
    { icon: Key, bg: 'linear-gradient(160deg, #4a3b12 0%, #1a1406 100%)', color: '#fbbf24' },
];

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
                    .map((repo, index) => {
                        const tool = toolIcons[index % toolIcons.length];
                        return {
                            id: repo.id,
                            title: repo.name,
                            subtitle: repo.language || 'Code',
                            description: repo.description,
                            link: repo.html_url,
                            icon: tool.icon,
                            iconBg: tool.bg,
                            iconColor: tool.color,
                            tech: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language].filter(Boolean)
                        };
                    });

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
