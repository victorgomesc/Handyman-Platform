import React from 'react'

const HeroSection = () => {
  return (
    <section className="h-[80vh] bg-cover bg-center flex items-center 
    justify-center" style={{ backgroundImage: `url('/assets/servico.jpg')` }}>

      <div className="bg-black bg-opacity-50 text-white p-8 rounded-md max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Handyman</h1>
        <p className="text-lg mb-6">
         The best service delivery platform
        </p>
        <a
          href="#explore"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Find out more
        </a>
      </div>
    </section>
  )
}

export default HeroSection
