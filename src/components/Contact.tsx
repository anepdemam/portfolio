import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Get In Touch</h2>
                <p>
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href="mailto:anifilham03@gmail.com" className="btn">
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
