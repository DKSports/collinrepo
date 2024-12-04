import React from 'react';
import '../styles.css';
function LandingPage() {
    return (
        <div>
            <header style={{ backgroundColor: 'orange', padding: '10px' }}>
                <h1>Welcome to Our Restaurant</h1>
                <p>The home of delicious food and Megan Bridges' Famous Pumpkin Pie!</p>
            </header>

            <div className="dish-gallery">
                <h2>Featured Dishes</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                    <div className="dish-item">
                        <img src="[insert-image-URL-here]" alt="Dish 1" className="dish-image" />
                        <p>Dish Name 1</p>
                    </div>
                    <div className="dish-item">
                        <img src="[insert-image-URL-here]" alt="Dish 2" className="dish-image" />
                        <p>Dish Name 2</p>
                    </div>
                    <div className="dish-item">
                        <img src="[insert-image-URL-here]" alt="Dish 3" className="dish-image" />
                        <p>Dish Name 3</p>
                    </div>
                    <div className="dish-item">
                        <img src="[insert-image-URL-here]" alt="Megan's Famous Pumpkin Pie" className="dish-image" />
                        <p>Megan Bridges' Famous Pumpkin Pie</p>
                    </div>
                </div>
            </div>

            <footer style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '20px' }}>
                <p>Find out more about us on the About Us page or make a reservation now!</p>
            </footer>
        </div>
    );
}

export default LandingPage;