import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ item, isLargeRow }) => {
    return (
        <motion.div 
            className={`poster ${isLargeRow ? "posterLarge" : ""}`}
            whileHover={{ scale: 1.1, zIndex: 100 }}
            transition={{ duration: 0.3 }}
            style={{
                minWidth: isLargeRow ? '250px' : '300px',
                height: isLargeRow ? '350px' : '170px',
                marginRight: '10px',
                borderRadius: '4px',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                backgroundColor: '#222'
            }}
        >
            <img 
                src={item.img} 
                alt={item.title}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.8
                }} 
            />
            
            <motion.div 
                className="info"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '10px',
                    background: 'linear-gradient(to top, #141414 10%, transparent)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}
            >
                <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item.title}</h3>
                <p style={{ fontSize: '0.8rem', color: '#ccc' }}>{item.subtitle}</p>
                
                {/* Micro tech stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '5px' }}>
                    {item.tech && item.tech.slice(0, 3).map(t => (
                        <span key={t} style={{ fontSize: '0.6rem', border: '1px solid #666', padding: '2px 4px', borderRadius: '2px' }}>{t}</span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
