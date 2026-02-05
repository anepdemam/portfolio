import React from 'react';
import profileImg from '../assets/anep-image.jpeg';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="content">
                    <h2>Hello, I'm</h2>
                    <h1>
                        Anif Ilham
                        <span className="name">Software Engineer Graduate</span>
                    </h1>
                    <p>
                        I’m a fresh graduate web developer with a strong interest in building inclusive, pixel-perfect digital experiences.
                        With a passion for modern UI/UX and continuous learning, I aim to create interfaces that are intuitive, performant, and accessible to all users.
                    </p>
                    <div className="buttons">
                        <a href="#projects" className="btn primary">View My Work</a>
                        <a href="#contact" className="btn outline">Contact Me</a>
                        <a href="/resume.pdf" className="btn outline" download>Resume</a>
                    </div>
                </div>
                <div className="image-area">
                    <div className="image-placeholder">
                        <img src={profileImg} alt="Anif Ilham" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
