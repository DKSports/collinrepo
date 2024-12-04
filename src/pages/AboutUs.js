import React from 'react';
import '../styles.css';

function AboutUs() {
    return (
        <div>
            <header style={{ backgroundColor: '#ff6666', padding: '10px' }}>
                <h1>About Us</h1>
                <p>Learn more about who we are and why we love what we do!</p>
            </header>

            <div className="about-section">
                <h2>Our Story</h2>
                <p>
                    [story here]
                </p>
            </div>

            <div className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="[insert-image-URL-here]" alt="Team Member 1" className="team-image" />
                        <p>Name: [random person's name here]</p>
                        <p>Role: [chef/manager/etc]</p>
                    </div>
                    <div className="team-member">
                        <img src="[insert-image-URL-here]" alt="Team Member 2" className="team-image" />
                        <p>Name: [random name here]</p>
                        <p>Role: [chef/manager/etc]</p>
                    </div>
                </div>
            </div>

            <footer style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '20px' }}>
                <p>Visit us today!</p>
            </footer>
        </div>
    );
}

export default AboutUs;