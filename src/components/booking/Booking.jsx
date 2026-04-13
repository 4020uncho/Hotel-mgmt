import React from 'react'
import { Link } from 'react-router-dom'

const Booking = () => {
  return (
    <div>
         <section id="rooms" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Our Rooms</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Single Room", "Double Room", "Deluxe Room"].map((room, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560067174-8948b0b0c2c2"
                alt="room"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{room}</h3>
                <p className="text-sm text-gray-600 mb-4">Clean and comfortable room with all basic facilities.</p>
                <Link to= '/details/single'>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Booking