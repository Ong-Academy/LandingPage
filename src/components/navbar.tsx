
"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black bg-opacity-90 text-white py-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer">
                <span className="font-extrabold text-xl sm:text-3xl text-#C3136E">Ong Academy</span>
              </div>
            </Link>
          </div>
          <div className="md:hidden">
            {/* Botão de menu para dispositivos móveis */}
            <button className="text-#C3136E p-2 focus:outline-none" onClick={toggleMenu}>
              {menuOpen ? (
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M19.39 6.89L18 5.5L12 11.5L6 5.5L4.61 6.89L12 14.29L19.39 6.89Z"
                    fill="#fff" // Cor de preenchimento branca
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M3 18H21M3 6H21H3ZM3 12H21H3Z"
                    stroke="#fff" // Cor do traço branca
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={`hidden md:flex justify-center flex-grow ${menuOpen ? 'block' : 'hidden'}`}>
            {/* Links do menu para desktop */}
            <Link href="/hub" passHref>
              <div className="py-2 px-3 sm:py-2 sm:px-4 cursor-pointer hover:bg-opacity-50 hover:text-opacity-100 transition duration-300">Hub</div>
            </Link>
            <Link href="/community" passHref>
              <div className="py-2 px-3 sm:py-2 sm:px-4 cursor-pointer hover:bg-opacity-50 hover:text-opacity-100 transition duration-300">Comunidade</div>
            </Link>
            <Link href="/docs" passHref>
              <div className="py-2 px-3 sm:py-2 sm:px-4 cursor-pointer hover:bg-opacity-50 hover:text-opacity-100 transition duration-300">Documentação</div>
            </Link>
            
            <Link href="/demo" passHref>
              <div className="py-2 px-3 sm:py-2 sm:px-4 bg-#C3136E text-white rounded transition duration-300 cursor-pointer hover:bg-opacity-100 hover:text-opacity-100">Agende uma Demonstração</div>
            </Link>
          </div>
          <div className={`hidden md:flex items-center space-x-4 ${menuOpen ? 'block' : 'hidden'}`}>
            {/* Links de login e cadastro para desktop */}
            <Link href="/login" passHref>
              <div className="py-2 px-3 sm:py-2 sm:px-4 bg#C3136E text-white rounded transition duration-300 cursor-pointer hover:bg-opacity-100 hover:text-opacity-100">Login</div>
            </Link>
            <Link href="/signup" passHref>
              <div className="py-2 px-3 sm:py-2 sm:px-4 bg-#C3136E text-white rounded transition duration-300 cursor-pointer hover:bg-opacity-100 hover:text-opacity-100">Cadastre-se</div>
            </Link>
          </div>
        </div>
      </div>
      {/* Overlay do menu para dispositivos móveis */}
      {menuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center">
          {/* Botão de fechar */}
          <button className="absolute top-3 right-3 text-#C3136E p-2 focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#fff" // Cor do traço branca
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="text-white text-center space-y-4">
            <Link href="/hub" passHref>
              <div className="text-2xl font-bold cursor-pointer my-2">Hub</div>
            </Link>
            <Link href="/community" passHref>
              <div className="text-2xl font-bold cursor-pointer my-2">Comunidade</div>
            </Link>
            <Link href="/docs" passHref>
              <div className="text-2xl font-bold cursor-pointer my-2">Documentação</div>
            </Link>
            
            <Link href="/demo" passHref>
              <div className="text-2xl font-bold cursor-pointer my-2">Agende uma Demonstração</div>
            </Link>
            <Link href="/login" passHref>
              <div className="text-2xl font-bold cursor-pointer my-2">Login</div>
            </Link>
            <Link href="/signup" passHref>
              <div className="py-2 px-3 sm:py-2 sm:px-4 bg-#C3136E text-white rounded transition duration-300 cursor-pointer hover:bg-#FF6B81 hover-text-opacity-100">Cadastre-se</div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
