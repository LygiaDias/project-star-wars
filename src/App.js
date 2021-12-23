import React from 'react';
import './App.css';
import Table from './components/Table';
import InputNumber from './components/InputNumber';
import { PlanetsProvider } from './context/Provider';

function App() {
  return (
    <PlanetsProvider>
      <InputNumber />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
