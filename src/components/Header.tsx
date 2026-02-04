import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#hero' },
        { label: 'Projects', href: '#projects' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="logo">Anif Ilham's Portfolio</a>
                <nav className="nav">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
};

export default Header;
