import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Analytics Dashboard',
            description: 'A real-time analytics dashboard featuring data visualization, user management, and report generation.',
            tags: ['React', 'TypeScript', 'D3.js', 'Firebase'],
            link: '#',
            github: '#',
        },
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with cart functionality, payment integration, and admin panel.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            link: '#',
            github: '#',
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task manager with drag-and-drop interface, real-time updates, and team workspaces.',
            tags: ['Vue', 'Firebase', 'Tailwind'],
            link: '#',
            github: '#',
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
