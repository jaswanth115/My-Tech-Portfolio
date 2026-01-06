import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
    return (
        <header 
            style={{
                position: 'relative',
                minHeight: '100vh', 
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: 'var(--nav-height) var(--mobile-padding) 4rem',
                background: 'linear-gradient(to top, #141414 10%, transparent 90%), url("https://www.mysuitcasejourneys.com/wp-content/uploads/2022/11/best-place-to-view-golden-gate-bridge-1440x960.jpg") no-repeat center center/cover'
            }}
        >
            <div style={{ maxWidth: '800px', zIndex: 10, width: '100%' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em'
                    }}
                >
                    Hi! I'm <span style={{ color: '#E50914' }}>JASWANTH</span> REDDY VEERA
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
                        fontWeight: '500',
                        marginBottom: '1.5rem',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '600px'
                    }}
                >
                    Full Stack Engineer | MERN Stack | Python
                </motion.h2>

                <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1, delay: 0.4 }}
                     style={{
                         color: 'rgba(255,255,255,0.7)',
                         fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                         marginBottom: '2.5rem',
                         maxWidth: '600px',
                         lineHeight: '1.6',
                         textShadow: '1px 1px 4px rgba(0,0,0,0.4)'
                     }}
                >
                    Transforms complex requirements into high-performance web applications. 
                    Masters Degree in Computer Science from University Of Texas At Arlington.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}
                >
                    <button 
                        style={{
                            padding: '0.8rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                            border: '1px solid #333',
                            backgroundColor: '#000',
                            color: '#fff',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                        onClick={() => window.open('/Jaswanth Resume 2.0.pdf', '_blank')}
                    >
                        <span>▶</span> Resume
                    </button>

                    {/* Profiles Section */}
                    <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
                        <button
                            title="GitHub"
                            style={{
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                border: '1px solid #333',
                                backgroundColor: '#000',
                                color: '#fff',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'transform 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            onClick={() => window.open('https://github.com/jaswanth115', '_blank')}
                        >
                            <Github size={20} />
                        </button>
                        <button
                            title="LinkedIn"
                            style={{
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                border: '1px solid #333',
                                backgroundColor: '#000',
                                color: '#fff',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'transform 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            onClick={() => window.open('https://www.linkedin.com/in/jaswanth-reddy-veera-73235b194', '_blank')}
                        >
                            <Linkedin size={20} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;
