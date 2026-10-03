import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 shadow-lg">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          📸 Photo Gallery
        </h1>
        <p className="text-sm md:text-base text-blue-100 mt-2">
          Exploring top 100 photos from JSONPlaceholder
        </p>
      </div>
    </header>
  );
};

export default Header;