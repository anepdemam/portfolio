import React from 'react';

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
                        I build accessible, pixel-perfect, and performant web experiences.
                        Passionate about modern UI/UX and cutting-edge technologies.
                    </p>
                    <div className="buttons">
                        <a href="#projects" className="btn primary">View My Work</a>
                        <a href="#contact" className="btn outline">Contact Me</a>
                    </div>
                </div>
                <div className="image-area">
                    <div className="image-placeholder">
                        {/* Add your image here */}
                        <img src="/src/assets/anep-image.jpeg" alt="Anif Ilham" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
