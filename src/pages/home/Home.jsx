import React from "react";
import { Link } from "react-router-dom";
import Nav1bar from "../../components/Nav1bar";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Nav1bar />

      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to FOMI VIEW HOTEL</h2>
          <p className="mb-6">Comfortable stay at affordable prices</p>
          <Link to="/booking"><button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">Book Now</button></Link>
        </div>
      </section>
    
      {/* Rooms Section */}
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600">
          FOMI VIEW HOTEL is a small and cozy hotel offering comfortable rooms and friendly service. Perfect for travelers looking for affordability and convenience.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <div className="max-w-xl mx-auto">
          <input type="text" placeholder="Your Name" className="w-full mb-4 p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full mb-4 p-3 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full mb-4 p-3 border rounded-lg"></textarea>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">Send Message</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-5">
        <p>© 2026 FOMI VIEW HOTEL. All rights reserved.</p>
      </footer>
    </div>
  );
}
