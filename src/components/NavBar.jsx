import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './NavBar.css';

const NAV_ITEMS = ['Home', 'Experience', 'Repos', 'Education', 'Skills', 'Contact'];

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [active, setActive] = useState('Home');

    useEffect(() => {
        const onScroll = () => {
            let current = 'Home';
            NAV_ITEMS.forEach((id) => {
                const section = document.getElementById(id);
                if (section && section.getBoundingClientRect().top < 140) {
                    current = id;
                }
            });
            setActive(current);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeMobile = () => setIsMobileMenuOpen(false);

    return (
        <header className="nav-wrap">
            <nav className="nav-pill" aria-label="Primary">
                <a className="nav-brand" href="#Home" onClick={closeMobile}>
                    Software Engineer
                </a>

                <ul className="nav-links">
                    {NAV_ITEMS.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className={active === item ? 'is-active' : undefined}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-right">
                    <button
                        type="button"
                        className="nav-menu-btn"
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="nav-mobile"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                    >
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={active === item ? 'is-active' : undefined}
                                onClick={closeMobile}
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavBar;
