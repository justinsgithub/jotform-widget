import React from 'react'
import { Link } from 'react-router-dom'

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-xl mb-8">Get in touch with our team.</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Back to Home
      </Link>
    </div>
  )
}

export default Contact