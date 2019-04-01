import React  from 'react';

const Footer = () => {
    return (
      <footer className="footer text-center">
        <span><a href="http://codepool.io/" target="_blank" rel="noopener noreferrer">Codepool</a> &copy; { new Date().getFullYear() }</span>
      </footer>
    );
  }
export default Footer;