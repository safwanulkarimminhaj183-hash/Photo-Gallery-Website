import React from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <Header />
      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default App;