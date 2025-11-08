import React, { useState } from 'react';
import '../styles/entrance.css';

const Entrance = () => {
  const [entranceType, setEntranceType] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');

  const handleEntranceTypeChange = (type) => {
    setEntranceType(type);
    if (type === 'free') {
      setTicketPrice('');
    }
  };

  return (
    <div className="entrance-container">
      <div className="button-group">
        <button
          className={`entrance-btn ${entranceType === 'paid' ? 'active' : ''}`}
          onClick={() => handleEntranceTypeChange('paid')}
        >
          Paid Entrance
        </button>
        <button
          className={`entrance-btn ${entranceType === 'free' ? 'active' : ''}`}
          onClick={() => handleEntranceTypeChange('free')}
        >
          Free Entrance
        </button>
      </div>
      
      {entranceType === 'paid' && (
        <div className="price-input-container">
          <label htmlFor="ticketPrice">Ticket Price:</label>
          <input
            type="number"
            id="ticketPrice"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(e.target.value)}
            placeholder="Enter price"
            min="0"
            step="0.01"
          />
        </div>
      )}
    </div>
  );
};

export default Entrance;