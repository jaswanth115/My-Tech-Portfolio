import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <header 
            style={{
                position: 'relative',
                height: '100vh', // Full screen
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 4%',
                // Cinematic background
                background: 'linear-gradient(to top, #141414 10%, transparent 90%), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop") no-repeat center center/cover'
            }}
        >
            <div style={{ maxWidth: '600px', zIndex: 10 }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        lineHeight: '1.2'
                    }}
                >
                    JASWANTH REDDY VEERA
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '400',
                        marginBottom: '1.5rem',
                        color: '#fff'
                    }}
                >
                    Full Stack Engineer | React & Python Specialist
                </motion.h2>

                <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1, delay: 0.4 }}
                     style={{
                         color: '#fff',
                         fontSize: '1.1rem',
                         marginBottom: '2rem',
                         maxWidth: '500px',
                         lineHeight: '1.5',
                         textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                     }}
                >
                    Transforms complex requirements into high-performance web applications. 
                    Masters Degree in Computer Science from UT Arlington.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ display: 'flex', gap: '1rem' }}
                >
                    <button 
                        style={{
                            padding: '0.8rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: '#fff',
                            color: '#141414',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                        onClick={() => window.open('/Jaswanth Resume 2.0.pdf', '_blank')}
                    >
                        <span>▶</span> Resume
                    </button>
                    <button 
                        style={{
                            padding: '0.8rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: 'rgba(109, 109, 110, 0.7)',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                    >
                        More Info
                    </button>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;
