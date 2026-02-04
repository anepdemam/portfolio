import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Ramarama.co Online Store: Your Streetwear Choice!',
            description: 'An online store for streetwear clothing, featuring a wide range of products for men and women.',
            tags: ['Blade', 'Laravel', 'PHP', 'SQLite', 'SCSS', 'Vite'],
            link: 'https://anepdemam.github.io/ramarama',
            github: 'https://github.com/anepdemam/ramarama',
        },
        {
            title: 'Paws Preferences',
            description: 'A pet-centric application for managing pet preferences, health records, and daily routines.',
            tags: ['React', 'JavaScript', 'CSS', 'Node.js'],
            link: 'https://anepdemam.github.io/paws-preferences',
            github: 'https://github.com/anepdemam/paws-preferences',
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
