import React from 'react';
import "./Styles.css";

const NosotrosContent: React.FC = () => {
  return (
    <div className="absolute w-screen h-screen/2 top-18 overflow-y-auto border-b border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 navbar-container-seccion">
        <div>
          <h3 className="text-lg font-semibold mb-2">Información</h3>
          <ul>
            <li>Quienes Somos</li>
            <li>Sostenibilidad</li>
            <li>Amarilo Plus</li>
            <li>Trabaja con Nosotros</li>
          </ul>
        </div>

        <div className='justify-self-center'>
          <h3 className="text-lg font-semibold mb-2">Novedades</h3>
          <ul>
            <li>Actualidad</li>
            <li>Encuestas</li>
            <li>Entrevistas</li>
          </ul>
        </div>

        <div className='justify-self-end'>
          <h3 className="text-lg font-semibold mb-2">Ayuda</h3>
          <ul>
            <li>Guía de Propiedades</li>
            <li>¿Qué necesito para comprar?</li>
            <li>Claves para renovar un alquiler</li>
            <li>Tips de mudanzas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NosotrosContent;
