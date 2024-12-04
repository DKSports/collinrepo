import React from 'react';
import '../styles.css';
function Contact() {
    return (
        <div>
            <header style={{ backgroundColor: '#87CEEB', padding: '10px' }}>
                <h1>Contact Us</h1>
                <p>We'd love to hear from you!</p>
            </header>

            <div className="contact-info">
                <h2>Our Details</h2>
                <p>insert phone number here</p>
                <p>insert email address here</p>
                <p>insert fake adres here</p>
            </div>

            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form>
                    <div className="form-field">
                        <label>Name:</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-field">
                        <label>Email:</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-field">
                        <label>Message:</label>
                        <textarea placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" style={{ marginTop: '10px' }}>Send</button>
                </form>
            </div>

            <footer style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '20px' }}>
                <p>We’ll get back to you as soon as possible!</p>
            </footer>
        </div>
    );
}

export default Contact;