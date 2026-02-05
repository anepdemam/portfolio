import React from 'react';

const Education: React.FC = () => {
    const educationData = [
        {
            degree: 'Bachelor of Information Technology (Hons) in Software Engineering',
            institution: 'Universiti Kuala Lumpur (UniKL)',
            duration: 'Sep 2022 - Feb 2026',
            description: 'Focusing on software development and web technologies. Currently maintaining a CGPA of 3.30.'
        },
        {
            degree: 'Foundation In Science and Technology',
            institution: 'Universiti Kuala Lumpur (UniKL)',
            duration: '2021 - 2022',
            description: 'Focused on core science and computing fundamentals. Graduated with a CGPA of 3.67.'
        },
        {
            degree: 'Sijil Pelajaran Malaysia (SPM)',
            institution: 'MAAHAD MUHAMMADI LELAKI',
            duration: '2020',
            description: 'Completed secondary education with a strong foundation in science and Islamic studies.'
        }
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <div className="section-title">
                    <h2><span>Education</span> Background</h2>
                    <p>My academic journey and formal training in this field.</p>
                </div>

                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="duration">{edu.duration}</div>
                            <h3>{edu.degree}</h3>
                            <h4 className="institution">{edu.institution}</h4>
                            <p>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
