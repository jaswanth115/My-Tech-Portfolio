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
      <div id="Home">
        <Hero />
      </div>
      
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
             <a href="mailto:jaswanthreddy.2019@gmail.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#666', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='#666'}>Email</a>
             <a href="https://www.linkedin.com/in/jaswanth-reddy-veera-73235b194?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5hIzuc7FR%2F%2BBTcVjICBqlA%3D%3D" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#666', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='#666'}>LinkedIn</a>
             <a href="https://github.com/jaswanth115" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#666', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='#666'}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
