import React from 'react';

const About: React.FC = () => {
    const skills = [
        'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Vue.js',
        'HTML5', 'CSS3/SCSS', 'Tailwind CSS', 'Node.js', 'Git', 'Figma'
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2>About <span>Me</span></h2>
                <div className="content">
                    <p>
                        Hello! My name is John, and I enjoy creating things that live on the internet.
                        My interest in web development started back in 2018 when I decided to try editing
                        custom Tumblr themes — turns out hacking together HTML & CSS was delightful!
                    </p>
                    <p>
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
                        a start-up, and a huge corporation. My main focus these days is building accessible,
                        inclusive products and digital experiences for a variety of clients.
                    </p>

                    <div className="skills">
                        <h3>Here are a few technologies I've been working with recently:</h3>
                        <div className="skill-list">
                            {skills.map((skill) => (
                                <span key={skill} className="skill-item">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
