'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./Styles.css";
import ProyectosContent from './ProyectosContent';
import ComprarContent from './ComprarContent';
import NosotrosContent from './NosotrosContent';

const Header: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleHover = (option: string) => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
  };

  return (
    <header className="header-container fixed top-0 left-0 right-0 z-30 bg-white">
      <div className="w-full flex items-center justify-between px-32" >
        <Image
          src="https://amarilo.com.co/images/logo.svg"
          alt="Amarilo, propiedades en venta"
          className="m-2"
          width={59}
          height={52}
        />
        <nav className="lg:hidden">
          <button className="text-black hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
        <nav className="hidden lg:flex items-center space-x-6">
          {['proyectos', 'como comprar', 'nosotros'].map((option) => (
            <div
              key={option}
              className={`relative group ${selectedOption === option ? 'hover-button-border-color' : ''}`}
              onMouseEnter={() => handleHover(option)}
            >
              <Link href="#" className="flex items-center hover:font-semibold text-color-button h-full">
                {option.replace(/^\w/, (c) => c.toUpperCase())}
                <span
                  className={`ml-1 transition-transform transform duration-300 ease-out ${
                    selectedOption === option ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-3 w-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          ))}
          <div>
            <Link href="*" className='btn_green btn_design'>
              Pagar
            </Link>
          </div>
        </nav>
      </div>
      {selectedOption && (
        <>
          {selectedOption === 'proyectos' && (<ProyectosContent />)}
          {selectedOption === 'como comprar' && (<ComprarContent />)}
          {selectedOption === 'nosotros' && (<NosotrosContent />)}
        </>
      )}
    </header>
  );
};

export default Header;
