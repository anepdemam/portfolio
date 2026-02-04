import React from 'react';
import dashboardImg from '../assets/dashboard.png';

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
    image?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, link, github, image }) => {
    return (
        <article className="project-card">
            <div className="image-wrapper">
                <img src={image || dashboardImg} alt={title} loading="lazy" />
                <div className="overlay">
                    {/* Icons could go here */}
                </div>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="links">
                    <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
