// src/components/Navbar.jsx

import React from 'react';

// First define the style
const linkStyle = {
  textDecoration: 'none',
  color: '#3b7a57',
  fontWeight: '500',
  transition: 'color 0.3s ease, transform 0.3s ease',
};

function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'rgba(208, 240, 192, 0.8)',  // Light green with opacity
      padding: '1rem 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Optional shadow for elegance
      backdropFilter: 'blur(10px)', // Subtle glass effect
    }}>
      <div style={{
        fontWeight: 'bold',
        fontSize: '1.8rem',
        color: '#2e8b57',
        letterSpacing: '1px'
      }}>
        Bugyal Foundation
      </div>
      <div style={{ display: 'flex', gap: '2rem', fontSize: '1.1rem' }}>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#focus" style={linkStyle}>Focus Areas</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#involved" style={linkStyle}>Get Involved</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
