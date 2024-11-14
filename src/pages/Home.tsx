import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Static Site</h1>
      <p className="text-xl mb-8">This is the home page.</p>
      <div className="space-x-4">
        <Link to="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          About
        </Link>
        <Link to="/contact" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Home