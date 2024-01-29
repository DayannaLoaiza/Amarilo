import React from 'react';
import "./Styles.css";
import Image from 'next/image';

const ComprarContent: React.FC = () => {
  return (
    <div className="absolute w-screen h-screen/2 top-18 overflow-y-auto border-b border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 navbar-container-seccion">
        <div className='justify-self-center'>
            <Image
            src="https://img.freepik.com/vector-gratis/boletos-ganador-loteria-feliz-presenta-ilustracion-isometrica-3d_1284-63351.jpg?size=626&ext=jpg"
            alt="Amarilo, propiedades en venta"
            //className="object-cover"
            width={220}  
            height={250} 
            />
        </div>

        <div className='self-center'>
          <h3 className="text-lg font-semibold mb-2">Tips y herramientas para la compra de Vivienda.</h3>
          <ul className='grid grid-cols-2 gap-2'>
            <li>Calculadora de cuota inicial</li>
            <li>Amarilo te Guía</li>
            <li>Calculadora de crédito hipotecario</li>
            <li>Blog con tips y consejos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComprarContent;
