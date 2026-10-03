import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #f3f4f6',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <div className="relative overflow-hidden group">
        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          style={{ width: '100%', height: '192px', objectFit: 'cover' }}
          loading="lazy"
        />
      </div>
      <div 
        className="p-4 flex flex-col flex-grow"
        style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        <div className="flex gap-2 mb-3" style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          <span 
            className="text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full"
            style={{ fontSize: '12px', fontWeight: '600', backgroundColor: '#dbeafe', color: '#1d4ed8', padding: '4px 10px', borderRadius: '9999px' }}
          >
            Album ID: {photo.albumId}
          </span>
          <span 
            className="text-xs font-semibold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
            style={{ fontSize: '12px', fontWeight: '600', backgroundColor: '#f3f4f6', color: '#374151', padding: '4px 10px', borderRadius: '9999px' }}
          >
            Photo ID: {photo.id}
          </span>
        </div>
        <h3 
          className="text-sm font-semibold text-gray-800 capitalize line-clamp-2 mt-auto" 
          title={photo.title}
          style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', margin: 'auto 0 0 0', textTransform: 'capitalize' }}
        >
          {photo.title}
        </h3>
      </div>
    </div>
  );
};

export default PhotoCard;