import React from 'react';
import ProjectCard from './ProjectCard';
import reramaImg from '../assets/rerama.png';
import pawsImg from '../assets/paws.png';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Ramarama.co Online Store',
            description: 'An online store for streetwear clothing, featuring a wide range of products for men and women.',
            tags: ['Blade', 'Laravel', 'PHP', 'SQLite', 'SCSS', 'Vite'],
            github: 'https://github.com/anepdemam/ramarama',
            image: reramaImg
        },
        {
            title: 'Paws Preferences',
            description: 'A mini project to learn React',
            tags: ['React', 'JavaScript', 'CSS', 'Node.js'],
            github: 'https://github.com/anepdemam/paws-preferences',
            image: pawsImg
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-title">
                    <h2>Featured Projects</h2>
                    <p>A selection of my recent work building scalable web applications.</p>
                </div>
                <div className="grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
