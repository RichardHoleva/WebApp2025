import React, { useState } from 'react';
import '../styles/filter.css';

function Filter() {
  const [selected, setSelected] = useState('created');

  return (
    <div className="filter-container">
      <button 
        className={selected === 'created' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => setSelected('created')}
      >
        Created Runs
      </button>
      <button 
        className={selected === 'joined' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => setSelected('joined')}
      >
        Joined Runs
      </button>
    </div>
  );
}

export default Filter;