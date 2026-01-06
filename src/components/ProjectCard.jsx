import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ item, isLargeRow }) => {
    // Render icon if item.icon exists
    const IconComponent = item.icon;

    // Content of the card
    const CardContent = (
        <>
            {IconComponent ? (
                <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${item.gradient || 'from-gray-700 to-gray-900'}`}>
                    <IconComponent size={48} color="white" strokeWidth={1.5} />
                </div>
            ) : (
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
            )}
            
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
                <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{item.title}</h3>
                <p style={{ fontSize: '0.75rem', color: '#ccc' }}>{item.subtitle}</p>
                <p style={{ fontSize: '0.65rem', color: '#aaa', marginTop: '4px', lineHeight: '1.2', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                
                {/* Micro tech stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '5px' }}>
                    {item.tech && item.tech.slice(0, 3).map(t => (
                        <span key={t} style={{ fontSize: '0.55rem', border: '1px solid #666', padding: '1px 3px', borderRadius: '2px' }}>{t}</span>
                    ))}
                </div>
            </motion.div>
        </>
    );

    // Styling properties
    const cardStyles = {
        minWidth: isLargeRow ? '200px' : '260px',
        height: isLargeRow ? '280px' : '150px',
        marginRight: '10px',
        borderRadius: '8px', // Slightly more rounded for smaller cards
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        backgroundColor: '#222',
        display: 'block', // Ensure anchor behaves like a block
        textDecoration: 'none' // Remove default anchor underline
    };

    const containerProps = {
        className: `poster ${isLargeRow ? "posterLarge" : ""}`,
        whileHover: { scale: 1.05, zIndex: 100 }, // Reduced scale effect for smaller cards
        transition: { duration: 0.3 },
        style: cardStyles
    };

    // If item.link exists, wrap in 'a' tag, else use 'div'
    if (item.link) {
        return (
            <motion.a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                {...containerProps}
            >
                {CardContent}
            </motion.a>
        );
    }

    return (
        <motion.div {...containerProps}>
            {CardContent}
        </motion.div>
    );
};

export default ProjectCard;
