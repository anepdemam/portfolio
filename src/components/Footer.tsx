import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="socials">
                    <a href="https://github.com/anepdemam" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/anif-ilham-ismail-884405358" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/anfilhm/" target="_blank" rel="noreferrer">Instagram</a>
                </div>
                <p>© {new Date().getFullYear()}Anif Ilham. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
