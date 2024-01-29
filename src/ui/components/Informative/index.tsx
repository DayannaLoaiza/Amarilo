'use client';
import React, { useState } from 'react';
import "./Styles.css";
import MainFilters from './MainFilters';
import Guia from './Guia';
import Proyectos from './Proyectos';

const Informative: React.FC = () => {

    return (
      <>
        <MainFilters/>
        <Guia/>
        <Proyectos/>
      </>    
    );
};

export default Informative;

