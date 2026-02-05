import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="socials">
                    <a href="https://github.com/anepdemam" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/anif-ilham-ismail-884405358" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/anfilhm/" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <Instagram size={20} />
                    </a>
                    <a href="mailto:anifilham03@gmail.com" aria-label="Email">
                        <Mail size={20} />
                    </a>
                </div>
                <p>© {new Date().getFullYear()} Anif Ilham. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
