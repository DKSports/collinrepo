import React from 'react';
import '../styles.css';
function Menus() {
    return (
        <div>
            <header style={{ backgroundColor: '#ffc107', padding: '10px' }}>
                <h1>Our Menu</h1>
                <p>Explore our delicious offerings!</p>
            </header>

            <div className="menu-section">
                <h2>Breakfast</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <img src="[insert-image-URL-here]" alt="Breakfast Dish 1" className="menu-image" />
                        <p>Pancakes</p>
                    </div>
                    <div className="menu-item">
                        <img src="[insert-image-URL-here]" alt="Breakfast Dish 2" className="menu-image" />
                        <p>Eggs and Bacon</p>
                    </div>
                </div>
            </div>

            <div className="menu-section">
                <h2>Lunch</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <img src="[insert-image-URL-here]" alt="Lunch Dish 1" className="menu-image" />
                        <p>Grilled Cheese</p>
                    </div>
                    <div className="menu-item">
                        <img src="[insert-image-URL-here]" alt="Lunch Dish 2" className="menu-image" />
                        <p>Caesar Salad</p>
                    </div>
                </div>
            </div>

            <div className="menu-section">
                <h2>Dinner</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <img src="[insert-image-URL-here]" alt="Dinner Dish 1" className="menu-image" />
                        <p>Steak</p>
                    </div>
                    <div className="menu-item">
                        <img src="[insert-image-URL-here]" alt="Dinner Dish 2" className="menu-image" />
                        <p>Spaghetti</p>
                    </div>
                </div>
            </div>

            <div className="menu-section">
                <h2>Special Desserts</h2>
                <div className="menu-item">
                    <img src="[insert-image-URL-here]" alt="Megan's Famous Pumpkin Pie" className="menu-image" />
                    <p>Megan Bridges' Famous Pumpkin Pie</p>
                </div>
            </div>

            <footer style={{ backgroundColor: 'lightgray', padding: '10px', marginTop: '20px' }}>
                <p>Don't forget to make a reservation for the full experience!</p>
            </footer>
        </div>
    );
}

export default Menus;