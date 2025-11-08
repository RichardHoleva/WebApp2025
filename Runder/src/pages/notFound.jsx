import React from "react";
import NavBar from '../components/NavBar.jsx';
import '../styles/notFound.css';

export default function NotFound() {
  return (
    <>
      <div className="number-404">
        <p >404</p>
      </div>
      
      <div className="not-found-container">
        <h1>Oops!</h1>
        <p>Page not found.</p>
      </div>
      <NavBar />
    </>
  );
}