import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import ProjectCard from './components/ProjectCard';
import { projects, experience, skills } from './data/portfolio';

// Simple Skill Card
const SkillCard = ({ item }) => (
    <div style={{ 
        minWidth: '120px', 
        height: '120px', 
        marginRight: '15px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#1f1f1f',
        borderRadius: '8px'
    }}>
        <img src={item.img} alt={item.title} style={{ width: '48px', height: '48px', marginBottom: '10px' }} />
        <span style={{ fontSize: '0.9rem', color: '#ddd' }}>{item.title}</span>
    </div>
);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      
      <div style={{ marginTop: '-150px', position: 'relative', zIndex: 20 }}> {/* Pull up to overlap hero fade */}
        <ContentRow 
            title="Projects" 
            data={projects} 
            Component={ProjectCard} 
            isLargeRow={true} 
        />
        
        <ContentRow 
            title="Experience" 
            data={experience} 
            Component={ProjectCard} 
        />
        
        <ContentRow 
            title="Skills" 
            data={skills} 
            Component={SkillCard} 
        />
      </div>

      <footer style={{ padding: '50px', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
        <p>© 2025 Jaswanth Reddy Veera. Built with React & Vite.</p>
        <div style={{ marginTop: '10px' }}>
             <a href="mailto:jaswanthreddy.2019@gmail.com" style={{ margin: '0 10px' }}>Email</a>
             <a href="#" style={{ margin: '0 10px' }}>LinkedIn</a>
             <a href="#" style={{ margin: '0 10px' }}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
