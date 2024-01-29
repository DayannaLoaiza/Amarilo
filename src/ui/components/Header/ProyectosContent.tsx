import React from 'react';
import "./Styles.css";

const ProyectosContent: React.FC = () => {
  return (
    <div className="absolute w-screen h-screen/2 top-18 overflow-y-auto border-b border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 navbar-container-seccion">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
          <ul>
            <li>Todas</li>
            <li>Bogotá</li>
            <li>Medellin</li>
            <li>Cota</li>
            <li>Cartagena</li>
            <li>Chia</li>
          </ul>
        </div>

        <div className='justify-self-center'>
          <h3 className="text-lg font-semibold mb-2">Tipo de propiedad</h3>
          <ul>
            <li>Casas</li>
            <li>Apartamentos</li>
          </ul>
        </div>

        <div className='justify-self-end'>
          <h3 className="text-lg font-semibold mb-2">Ambientes</h3>
          <ul>
            <li>2 ambientes</li>
            <li>3 ambientes</li>
            <li>4 ambientes</li>
            <li>1 ambiente</li>
            <li>5 o más ambientes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProyectosContent;
