import React, { useState } from 'react';
import './PopupButton.css'; // We'll create this CSS file

const PopupButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="popup-container">
      {/* Popup Button */}
      <button 
        className="popup-button"
        onClick={togglePopup}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000
        }}
      >
        ☰ Menu
      </button>

      {/* Popup Content */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              ×
            </button>
            <h3>Popup Content</h3>
            <p>This is your popup content positioned at the top left!</p>
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupButton;