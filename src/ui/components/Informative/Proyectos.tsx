import React from 'react';
import "./Styles.css";
import Image from 'next/image';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBed, faBath,faLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
library.add(faBed, faBath, faLocationDot, faHeart);

const Proyectos: React.FC = () => {
  return (
    <section className="container mx-auto text-center mt-lh-96 py-4 px-6">
        <h3 className="text-color-button pb-5 mb-6 text-center text-carbon-800 text-base md:text-24 leading-12 font-semibold">¿Dónde quieres vivir?</h3>
        <div className='container-items'>
            <div className='item'>
                <div className='photo-cnt'>
                    <Image
                    src="https://img.freepik.com/foto-gratis/elegante-sala-estar-escandinava-muebles-sofa-menta-diseno-que-burlan-plantas-mapa-cartel-eleg_1258-152155.jpg?w=900&t=st=1706482452~exp=1706483052~hmac=4b24627a961c7f7ad39b278feaa027c893db556110f28fcb09f1977dce111712"
                    alt="Propiedad"
                    className="photo-cnt h-full"
                    width={280}
                    height={320}
                    />

                </div>
                <div className='item-right-cnt'>
                    <div className='item-right-details-cnt'>
                        <div className='item-header-cnt'>
                            <h3 className='text-color-button item-address-title'>Be Live</h3>
                        </div>
                        <div className='item-info-cnt'>
                            <div className='characteristics-cnt'>
                                <ul>
                                    <li>                               
                                        <FontAwesomeIcon icon={faBed} />
                                        <strong>2</strong>
                                        <span>Dormitorios</span>
                                    </li>
                                    <li>                               
                                        <FontAwesomeIcon icon={faBath} />
                                        <strong>2</strong>
                                        <span>Baños</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='item-right-utils-cnt'>
                        <FontAwesomeIcon icon={faLocationDot} className='text-color-button'/>
                        <FontAwesomeIcon icon={faHeart} className='text-color-button'/>
                        <div className='text-color-button font-bold'>$153,595,000</div>
                    </div>
                    <div className='item-footer'>
                        <div className="text-left">
                            <p className='font-semibold color-yellow'>El Poblado Medellin</p>
                            <p>De 74,6 a 80,8 ㎡ - De 80,3 a 124,3 ㎡</p>
                        </div>
                        <div>
                            <Link href="*" className='btn_details btn_design'>
                            Ver detalles
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='photo-cnt'>
                    <Image
                    src="https://img.freepik.com/foto-gratis/hermosa-foto-casa-moderna-cocina-comedor_181624-2870.jpg?size=626&ext=jpg"
                    alt="Propiedad"
                    className="photo-cnt h-full"
                    width={280}
                    height={320}
                    />

                </div>
                <div className='item-right-cnt'>
                    <div className='item-right-details-cnt'>
                        <div className='item-header-cnt'>
                            <h3 className='text-color-button item-address-title'>Gloden Valley</h3>
                        </div>
                        <div className='item-info-cnt'>
                            <div className='characteristics-cnt'>
                                <ul>
                                    <li>                               
                                        <FontAwesomeIcon icon={faBed} />
                                        <strong>3</strong>
                                        <span>Dormitorios</span>
                                    </li>
                                    <li>                               
                                        <FontAwesomeIcon icon={faBath} />
                                        <strong>2</strong>
                                        <span>Baños</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='item-right-utils-cnt'>
                        <FontAwesomeIcon icon={faLocationDot} className='text-color-button'/>
                        <FontAwesomeIcon icon={faHeart} className='text-color-button'/>
                        <div className='text-color-button font-bold'>$283,135,000</div>
                    </div>
                    <div className='item-footer'>
                        <div className="text-left">
                            <p className='font-semibold color-yellow'>Chico Bogotá</p>
                            <p>De 74,6 a 80,8 ㎡ - De 80,3 a 124,3 ㎡</p>
                        </div>
                        <div>
                            <Link href="*" className='btn_details btn_design'>
                            Ver detalles
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Proyectos;
