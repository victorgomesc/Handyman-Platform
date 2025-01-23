import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-yellow-400 text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Handyman</h1>
        {/* Menu */}
        <nav>
          <ul className="flex space-x-6">
          <li>
              <Link
                href="/pages/signup"
                className="hover:text-yellow-300 transition duration-300"
              >
                Cadastre-se
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-300"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-300"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-300"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
