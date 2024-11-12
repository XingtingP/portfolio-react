import React from 'react';
//import './Contact.css'; 

function Contact() {
    return (
        <section id="contact" className="container my-5 py-5">
            <div className="row justify-content-center text-center">
                <div className="col-md-6">
                    <h2>Get In Touch</h2>
                    <p>
                        If you have any projects in mind, want to collaborate, or just have some questions, don't hesitate to drop
                        me a line via email or connect with me on LinkedIn. I'm always open to new ideas and opportunities, and I'd
                        love to hear from you!
                    </p>

                    <h4>Email Me At</h4>
                    <p>
                        <a href="mailto:xingtingp1217@gmail.com">xingtingp1217@gmail.com</a>
                    </p>

                    <a
                        href="https://www.linkedin.com/in/xingting-peng-20157b309/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-purple btn-lg"
                    >
                        <i className="bi bi-linkedin"></i> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
