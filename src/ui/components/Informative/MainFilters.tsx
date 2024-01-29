import React from 'react';
import "./Styles.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTag, faChevronDown, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faSearch, faTag, faChevronDown, faBed, faBath);

const MainFilters: React.FC = () => {

    const backgroundImageUrl = 'https://img.freepik.com/foto-gratis/avenida-arboles-verdes_1127-350.jpg?size=626&ext=jpg';

    return (
    <section className='hero-container w-full relative'>
        <picture className="absolute w-full h-full top-0 left-0">
        <img src={backgroundImageUrl} alt="Amarilo" className="w-full h-full object-cover lg:object-top" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}/>
        <span className='background-img w-full h-full top-0 left-0 absolute'></span>
        </picture>
        <div className='centered-wrapper w-full relative'>
        <div className='container mx-auto'>
            <h1 className='text-center text-white mt-0 mb-lh-12 md:mb-lh-24 mx-auto leading-snug md:leading-none font-bold tracking-tight md:tracking-tighter'>
            Creamos espacios <br /> Tu próximo hogar está aquí
            </h1>
            <div className='relative'>
            <div className='search-box-component mx-auto px-0 sm:px-lh-16'>
                <div className='search-bar page-tools'>
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap flex-1">
                    <div className="min-w-150 flex flex-1 max-w-440 mb-auto gap-6">
                        <div className='location-search'>
                        <div className='criterion-Location'>
                            <input type="text" defaultValue={'Bogotá'}/> 
                            <button className="btn-white" type="submit" aria-label="Aplicar filtros" title="Buscar">
                            <FontAwesomeIcon icon="search" className="ic-search" />
                            </button>
                        </div>
                        </div>
                        <div className="flex flex-1 gap-2">
                        <button className="btn_bg">
                            <FontAwesomeIcon icon={faTag} />
                            Precio
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <button className="btn_bg">
                        <FontAwesomeIcon icon={faBed} />
                            Dormitorios
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <button className="btn_bg">
                            <FontAwesomeIcon icon={faBath} />
                            Baños
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div> 
    </section>
  );
}

export default MainFilters;