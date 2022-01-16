import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import FetchApi from './FetchApi';
import PlanetContext from './PlanetContext';

export const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ filterByName: { name: '' } });
  const [filterNumber, setFilterNumber] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [initialValue, setInitialValue] = useState('0');
  const [columnFil, setColumnFil] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const handleValue = ({ target: { value, name } }) => {
    setInitialValue(value);
    setFilterNumber((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const getAPI = async () => {
    const request = await FetchApi();
    const deleteResidents = Object.values(request.results).map((item) => {
      delete item.residents;
      return item;
    });
    setData(deleteResidents);
  };

  function handleChange({ target }) {
    setFilter({ ...filter, filterByName: { name: target.value } });
  }

  const handleNumber = ({ target: { value, name } }) => {
    setFilterNumber((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  
  
  
  
  
  const onClickFunction = () => {
    const { column, comparison, value } = filterNumber;
    const columnFilter = data.filter((param) => {
      switch (comparison) {
      case 'maior que':
        return (param[column] > Number(value));
      case 'menor que':
        return (param[column] < Number(value));
      case 'igual a':
        return (param[column] === value);
      default:
        return (param[column] === value);
      }
    });
    setData(columnFilter);
    setColumnFil(columnFil.filter((option) => option !== column));
  };

  
  
  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
    handleNumber,
    onClickFunction,
    handleChange,
    initialValue,
    setInitialValue,
    handleValue,
    columnFil,
    setColumnFil,
    
  };
  useEffect(() => {
    getAPI();
  }, []);
  return (

    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetContext;
