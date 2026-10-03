import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12 border-t border-gray-800">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Photo Gallery App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;