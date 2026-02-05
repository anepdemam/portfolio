import React from 'react';
import {
    SiJavascript, SiTypescript, SiReact, SiVite,
    SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs,
    SiGit, SiFigma
} from 'react-icons/si';

const About: React.FC = () => {
    const skills = [
        { name: 'JavaScript (ES6+)', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3/SCSS', icon: <SiCss3 />, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' }
    ];

    return (
        <section id="about" className="about">
            <div className="about-bio">
                <h2><span>About</span> Me</h2>
                <div className="content">
                    <p>
                        Hello! I’m Anif Ilham, a fresh graduate with a strong interest in software and web development that started from a young age.
                    </p>
                    <p>
                        I’ve been curious about software and technology since I was a kid, often exploring how applications and websites work. Over time, this curiosity grew into a passion for building things myself, especially during my studies where I was introduced to web technologies such as HTML, CSS, and JavaScript.
                    </p>
                    <p>
                        As a fresh graduate, I’ve developed my skills through academic projects, internships, and self-learning, focusing on creating responsive, user-friendly web applications. I’m particularly interested in building accessible and inclusive digital experiences that prioritize usability and performance.
                    </p>
                    <p>
                        I’m motivated to keep learning, sharpen my technical skills, and contribute to real-world projects as I begin my career in the software industry.
                    </p>
                </div>
            </div>

            <div className="tech-marquee-section">
                <h3 className="tech-title">Here are a few technologies I've been working with recently:</h3>
                <div className="marquee">
                    <div className="marquee-content">
                        {/* Duplicate the skill list for seamless scrolling */}
                        {[...skills, ...skills].map((skill, index) => (
                            <span
                                key={`${skill.name}-${index}`}
                                className="skill-item"
                                style={{ '--brand-color': skill.color } as React.CSSProperties}
                            >
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
