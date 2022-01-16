import React from 'react';
import './App.css';
import Table from './components/Table';
import InputNumber from './components/InputNumber';
import { PlanetsProvider } from './context/Provider';
import imagem from '../src/Imagens/planets.jpg'

function App() {
  return (
    <>
    <div >
      <h1 className="titulo"> Projeto Star Wars </h1>
      <img src= {imagem} alt="planetas" />
    </div><PlanetsProvider>
        <InputNumber />
        <Table />
      </PlanetsProvider></>
  );
}

export default App;
