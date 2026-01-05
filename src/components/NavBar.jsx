import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                height: 'var(--nav-height)',
                padding: '0 4%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 100,
                transition: 'background-color 0.3s ease-in-out',
                backgroundColor: isScrolled ? '#141414' : 'transparent',
                backgroundImage: isScrolled ? 'none' : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0))'
            }}
        >
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    color: '#E50914',
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    fontFamily: 'Bebas Neue, sans-serif' // Or fallback
                }}
            >
                JASWANTH
            </motion.div>

            <ul style={{ display: 'flex', gap: '20px', fontSize: '0.9rem' }}>
                {['Home', 'Experience', 'Projects', 'Skills'].map((item) => (
                    <li key={item}>
                        <a 
                            href={`#${item}`} 
                            style={{ 
                                cursor: 'pointer', 
                                color: '#e5e5e5', 
                                textDecoration: 'none',
                                transition: 'color 0.3s'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'white'}
                            onMouseLeave={(e) => e.target.style.color = '#e5e5e5'}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
