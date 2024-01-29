import React from 'react';
import "./Styles.css";

const Guia: React.FC = () => {
  return (
    <section className="how-we-do-it-container container mx-auto text-center mt-lh-96 py-8 px-12 flex gap-6">
      <div className='md:w-1/3 sm:w-full'>
        <h2 className="text-center text-carbon-800 text-22 md:text-24 leading-12 font-semibold text-color-button">Amarilo te guía</h2>
        <p>En Amarilo creemos que adquirir vivienda es la base para construir tus sueños, por eso queremos acompañarte en cada paso y hacer de este proceso la mejor experiencia.</p>
      </div>
      <div className='md:w-2/3 sm:w-full self-center'>
        <div className="container-guide text-center flex flex-wrap justify-center justify-around">
            <div className="text-center flex flex-col justify-end items-center">
              <img className="max-h-50" src="https://media1.amarilo.com.co/website/s3fs-public/home/2023-04/calculator.svg" alt="Logo Calculadora cuota inicial" width="45" height="45" />
              <a className=" " href="/herramientas/cuota">
                <h3 className='font-semibold text-color-button'>Calculadora cuota inicial</h3>
              </a>
            </div>
            <div className="text-center flex flex-col justify-end items-center">
              <img className="max-h-50" src="https://media1.amarilo.com.co/website/s3fs-public/home/2023-04/calendar.svg" alt="Logo Calculadora crédito hipotecario" width="55" height="55" />
              <a className="" href="/herramientas/credito">
                <h3 className='font-semibold text-color-button'>Calculadora crédito hipotecario</h3>
              </a>
            </div>
            <div className="text-center flex flex-col justify-end items-center">
              <img className="max-h-50" src="https://media1.amarilo.com.co/website/s3fs-public/home/2023-04/instructions.svg" alt="Logo amarilo te guia" width="50" height="50" />
              <a className="" href="/amarilo-te-guia">
                <h3 className='font-semibold text-color-button'>Instrucciones paso a paso</h3>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Guia;
