'use client';
import React from 'react';
import Link from 'next/link';
import "./Styles.css";
import Image from 'next/image';

const Footer: React.FC = () => {

  return (
    <footer className='container-footer'>
        <div className='roomie-footer__top'>
            <div className='roomie-footer__container mx-auto flex justify-between items-center'>
                <Image
                src="https://amarilo.com.co/images/logo.svg"
                alt="Amarilo, propiedades en venta"
                className="m-2"
                width={59}
                height={52}
                />
            </div>
        </div>
        <div className='menu-footer'>
            <div>
                <h2 className='text-color-button text-lg font-semibold mb-2'>Más AMARILO </h2>
                <ul>
                    <li className='text-color-button'>Quiénes somos</li>
                    <li className='text-color-button'>Portal Proveedores</li>
                    <li className='text-color-button'>Registro de predios</li>
                    <li className='text-color-button'>Sostenibilidad</li>
                </ul>
            </div>
            <div>
                <h2 className='text-color-button text-lg font-semibold mb-2'>Noticias </h2>
                <ul>
                    <li className='text-color-button'>Revista Amarilo</li>
                    <li className='text-color-button'>Blog</li>
                </ul>
            </div>
            <div>
                <h2 className='text-color-button text-lg font-semibold mb-2'>Legales </h2>
                <ul>
                    <li className='text-color-button'>Política de privacidad</li>
                    <li className='text-color-button'>Política SSTA</li>
                    <li className='text-color-button'>Manual SSTA</li>
                    <li className='text-color-button'>Reglamentos y protocolos</li>
                </ul>
            </div>
        </div>
        <div className='copyright'>
            <p>© Amarilo 2023 - Calle 90 # 11A - 27, Bogotá - Colombia</p>
        </div>
    </footer>
  );
};

export default Footer;
