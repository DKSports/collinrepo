import React from 'react';
import '../styles.css';
function Reservation() {
    return (
        <div>
            <header style={{ backgroundColor: '#FFD700', padding: '10px' }}>
                <h1>Online Reservations</h1>
                <p>Reserve your table today!</p>
            </header>

            <div className="reservation-info">
                <h2>Reserve Through Google Forms</h2>
                <p>
                    Click <a href="[Insert-Google-Form-Link]" target="_blank" rel="noopener noreferrer">here</a> to reserve a table via Google Forms.
                </p>
            </div>

            <div className="reservation-form">
                <h2>Quick Reservation</h2>
                <form>
                    <div className="form-field">
                        <label>Name:</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-field">
                        <label>Phone Number:</label>
                        <input type="tel" placeholder="Your Phone Number" />
                    </div>
                    <div className="form-field">
                        <label>Date:</label>
                        <input type="date" />
                    </div>
                    <div className="form-field">
                        <label>Time:</label>
                        <input type="time" />
                    </div>
                    <div className="form-field">
                        <label>Number of Guests:</label>
                        <input type="number" placeholder="Number of Guests" min="1" />
                    </div>
                    <button type="submit" style={{ marginTop: '10px' }}>Reserve</button>
                </form>
            </div>

            <footer style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '20px' }}>
                <p>We can't wait to serve you!</p>
            </footer>
        </div>
    );
}

export default Reservation;