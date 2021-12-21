import React from 'react';
import './App.css';
import InputPlanetName from './components/InputPlanetName';
import Table from './components/Table';
import { PlanetsProvider } from './context/Provider';

function App() {
  return (
    <PlanetsProvider>
      <InputPlanetName />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
