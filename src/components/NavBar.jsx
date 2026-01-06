import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const navItems = ['Home', 'Experience', 'Projects', 'Education', 'Skills'];

    return (
        <nav 
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                height: 'var(--nav-height)',
                padding: '0 var(--mobile-padding)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 100,
                transition: 'background-color 0.3s ease-in-out',
                backgroundColor: isScrolled || isMobileMenuOpen ? '#141414' : 'transparent',
                backgroundImage: isScrolled || isMobileMenuOpen ? 'none' : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0))'
            }}
        >
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    color: '#E50914',
                    fontSize: 'clamp(1.2rem, 5vw, 1.8rem)',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    fontFamily: 'Bebas Neue, sans-serif'
                }}
            >
                Software Engineer
            </motion.div>

            {/* Desktop Menu */}
            <ul style={{ 
                display: 'none', 
                gap: '20px', 
                fontSize: '0.9rem'
            }} className="desktop-menu">
                {navItems.map((item) => (
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

            {/* Hamburger Toggle */}
            <div 
                style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                className="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X color="white" size={28} /> : <Menu color="white" size={28} />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: 'var(--nav-height)',
                            left: 0,
                            width: '100%',
                            backgroundColor: '#141414',
                            padding: '2rem var(--mobile-padding)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            borderBottom: '1px solid #333',
                            zIndex: 99
                        }}
                    >
                        {navItems.map((item) => (
                            <a 
                                key={item}
                                href={`#${item}`} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ 
                                    color: 'white', 
                                    fontSize: '1.2rem', 
                                    fontWeight: '500',
                                    textDecoration: 'none'
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .mobile-menu-toggle { display: block; }
                .desktop-menu { display: none !important; }

                @media (min-width: 768px) {
                    .mobile-menu-toggle { display: none; }
                    .desktop-menu { display: flex !important; }
                }
            `}</style>
        </nav>
    );
};

export default NavBar;
