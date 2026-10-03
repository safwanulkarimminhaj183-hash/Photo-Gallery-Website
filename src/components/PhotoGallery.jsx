import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data from API');
        }
        return res.json();
      })
      .then((data) => {
        setPhotos(data.slice(0, 100));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2563eb' }}>Loading 100 Photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', margin: '48px 0', color: '#ef4444', fontWeight: '600', fontSize: '18px' }}>
        Error: {error}
      </div>
    );
  }

  return (
    <section style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '20px', boxSizing: 'border-box' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '24px',
        justifyContent: 'center'
      }}>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;