import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const CatTracker = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isBlinking, setIsBlinking] = useState(false);
    const containerRef = useRef(null);

    // Realistic random blinking logic
    useEffect(() => {
        const triggerBlink = () => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150); // Blink duration
            
            // Double blink occasionally for realism
            if (Math.random() > 0.8) {
                setTimeout(() => {
                    setIsBlinking(true);
                    setTimeout(() => setIsBlinking(false), 150);
                }, 300);
            }
        };

        const blinkInterval = setInterval(() => {
            triggerBlink();
        }, Math.random() * 3000 + 2000); // Blink every 2-5 seconds
        
        return () => clearInterval(blinkInterval);
    }, []);

    // 3D Parallax tracking logic
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                // Calculate distance from center, normalized
                let deltaX = (e.clientX - centerX) / window.innerWidth;
                let deltaY = (e.clientY - centerY) / window.innerHeight;
                
                // Limit maximum look distance multiplier 
                deltaX = Math.max(-1, Math.min(1, deltaX * 4));
                deltaY = Math.max(-1, Math.min(1, deltaY * 4));

                setMousePos({ x: deltaX, y: deltaY });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Calculate parallax offsets to create a 3D depth illusion
    const headX = mousePos.x * 4;
    const headY = mousePos.y * 4;

    const pupilX = mousePos.x * 4.5;
    const pupilY = mousePos.y * 4.5;

    return (
        <div 
            ref={containerRef}
            style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginBottom: '-15px', // slightly overlap with the button surface
                width: '100px',
                height: '100px',
                zIndex: 50,
                pointerEvents: 'none'
            }}
        >
            <svg 
                viewBox="0 0 100 100" 
                width="100%" 
                height="100%" 
                style={{ filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.6))' }}
            >
                {/* Wavy Tail */}
                <path d="M 70 85 Q 95 85 90 60 Q 88 50 97 45" fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round" />

                {/* Sleek Minimal Body */}
                <path d="M 25 90 C 25 55, 75 55, 75 90 Z" fill="#111" />
                
                {/* Front Paws */}
                <path d="M 35 90 C 35 84, 45 84, 45 90 Z" fill="#1a1a1a" />
                <path d="M 55 90 C 55 84, 65 84, 65 90 Z" fill="#1a1a1a" />

                {/* HEAD GROUP (Moves nicely to track mouse) */}
                <g style={{ transform: `translate(${headX}px, ${headY}px)`, transition: 'transform 0.03s ease-out' }}>
                    {/* Ears & Inner Ears */}
                    <polygon points="30,28 17,5 45,18" fill="#111" />
                    <polygon points="70,28 83,5 55,18" fill="#111" />
                    <polygon points="31,26 21,9 41,18" fill="#ffb6c1" opacity="0.8" />
                    <polygon points="69,26 79,9 59,18" fill="#ffb6c1" opacity="0.8" />
                    
                    {/* Main Head Silhouette */}
                    <circle cx="50" cy="40" r="26" fill="#111" />

                    {/* Whiskers */}
                    <path d="M 25 45 L 6 41 M 25 48 L 4 48 M 25 51 L 6 55" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" strokeLinecap="round" />
                    <path d="M 75 45 L 94 41 M 75 48 L 96 48 M 75 51 L 94 55" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" strokeLinecap="round" />

                    {/* Eyes Group (Handles Blinking) */}
                    <g style={{
                        transform: `scaleY(${isBlinking ? 0.05 : 1})`,
                        transformOrigin: '50px 45px',
                        transition: 'transform 0.08s ease-in-out'
                    }}>
                        {/* Expressive Yellow/Golden Eyes */}
                        <ellipse cx="38" cy="43" rx="7" ry="9" fill="#facc15" />
                        <ellipse cx="62" cy="43" rx="7" ry="9" fill="#facc15" />

                        {/* Pupils (Move the most for realistic focus) */}
                        <g style={{ transform: `translate(${pupilX}px, ${pupilY}px)`, transition: 'transform 0.03s ease-out' }}>
                            {/* Realistic Cat Slit Pupils */}
                            <ellipse cx="38" cy="43" rx="2.5" ry="7" fill="#000" />
                            <ellipse cx="62" cy="43" rx="2.5" ry="7" fill="#000" />
                            {/* Catchlights (Eye Glint) */}
                            <circle cx="37" cy="39" r="1.5" fill="#fff" opacity="0.9" />
                            <circle cx="61" cy="39" r="1.5" fill="#fff" opacity="0.9" />
                        </g>
                    </g>

                    {/* Cute Nose */}
                    <polygon points="48,51 52,51 50,53" fill="#ffb6c1" />
                    {/* Minimal Mouth Expression */}
                    <path d="M 46,55 Q 48,58 50,55 Q 52,58 54,55" fill="none" stroke="#666" strokeWidth="1" strokeLinecap="round" />
                </g>
            </svg>
        </div>
    );
};

const Hero = () => {
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <>
            <style>{`
                .hero-header {
                    position: relative;
                    min-height: 100vh;
                    min-height: 100dvh;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: var(--nav-height) var(--mobile-padding) 4rem;
                    overflow: hidden;
                }

                .hero-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    /* Flipped horizontally as requested previously */
                    transform: scaleX(-1);
                    background: url("${baseUrl}sf-downtown.jpg") no-repeat center center;
                    background-size: contain; 
                }

                /* A smooth gradient overlay that doesn't dim the full colors but elegantly fades the bottom edge into the dark app background */
                .hero-fade-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 40%;
                    z-index: 2;
                    background: linear-gradient(to top, #141414 0%, transparent 100%);
                    pointer-events: none;
                }

                .hero-content-wrapper {
                    max-width: 800px;
                    z-index: 10;
                    width: 100%;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }

                .hero-buttons-container {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    flex-wrap: wrap;
                }

                /* Premium Mobile Optimization */
                @media (max-width: 768px) {
                    .hero-header {
                        padding-top: calc(var(--nav-height) + 2rem);
                    }
                    .hero-bg {
                        /* Switch to cover with top focus on mobile so it fills the screen dramatically */
                        background-size: cover;
                        background-position: 70% top;
                    }
                    .hero-fade-overlay {
                        height: 60%; /* Taller softer fade on mobile */
                        background: linear-gradient(to top, #141414 10%, rgba(20,20,20,0.8) 40%, transparent 100%);
                    }
                    .hero-content-wrapper {
                        align-items: center;
                        text-align: center;
                        margin-top: auto; /* Pushes content slightly down to let the image shine */
                    }
                    p.hero-desc {
                        text-align: center;
                    }
                    .hero-buttons-container {
                        justify-content: center;
                        margin-top: 1rem;
                    }
                }
            `}</style>
            <header className="hero-header">
                <div className="hero-bg" />
                <div className="hero-fade-overlay" />
            {/* CatTracker moved to button section */}
            <div className="hero-content-wrapper">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 2.5rem)',
                        fontWeight: '800',
                        marginBottom: '1rem',
                        lineHeight: '1.1',
                        letterSpacing: '-0.02em',
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
                        color: 'rgba(255,255,255,0.95)',
                        maxWidth: '600px',
                        textShadow: '0px 2px 8px rgba(0,0,0,0.8)'
                    }}
                >
                    Full Stack Engineer | MERN Stack | Python
                </motion.h2>

                <motion.p
                     className="hero-desc"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1, delay: 0.4 }}
                     style={{
                         color: 'rgba(255,255,255,0.8)',
                         fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                         marginBottom: '2.5rem',
                         maxWidth: '600px',
                         lineHeight: '1.6',
                         textShadow: '0px 2px 6px rgba(0,0,0,0.8)'
                     }}
                >
                    Transforms complex requirements into high-performance web applications. 
                    Masters Degree in Computer Science from University Of Texas At Arlington.
                </motion.p>

                <motion.div 
                    className="hero-buttons-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    {/* Profiles Section First */}
                    <div style={{ display: 'flex', gap: '10px' }}>
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

                    {/* Resume Button Next (with Cat sitting on it) */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <CatTracker />
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
                                gap: '10px',
                                position: 'relative',
                                zIndex: 10 /* Ensures button is clickable beneath the cat's tail */
                            }}
                            onClick={() => window.open(`${baseUrl}Jaswanth_Reddy_Veera_Resume.pdf`, '_blank')}
                        >
                            <span>▶</span> Resume
                        </button>
                    </div>
                </motion.div>
            </div>
        </header>
        </>
    );
};

export default Hero;
