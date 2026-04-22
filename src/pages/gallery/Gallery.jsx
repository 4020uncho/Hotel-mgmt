import React, { useState } from 'react'

const Gallery = () => {
  const [photos] = useState([
    { id: 1, src: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=500&h=500&fit=crop', alt: 'Room 1', title: 'interior' },
    { id: 2, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=500&fit=crop', alt: 'Room 2', title: 'Standard Room' },
    { id: 3, src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=500&fit=crop', alt: 'Room 3', title: 'Premium Room' },
    { id: 4, src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=500&fit=crop', alt: 'Lounge', title: '' },
    { id: 5, src: 'https://images.unsplash.com/photo-1584132967334-07dbc8d34ca6?w=500&h=500&fit=crop', alt: 'Pool', title: '' },
    { id: 6, src: 'https://images.unsplash.com/photo-1576928063768-98aa5792c869?w=500&h=500&fit=crop', alt: 'Dining', title: 'Views' },
  ]);

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Gallery</h2>
        <p className="text-lg text-blue-100">Explore our beautiful rooms and facilities</p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery