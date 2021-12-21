import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import FetchApi from './FetchApi';
import PlanetContext from './PlanetContext';

export const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ filterByName: { name: '' } });

  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
  };
  const getAPI = async () => {
    const request = await FetchApi();
    const deleteResidents = Object.values(request.results).map((item) => {
      delete item.residents;
      return item;
    });
    setData(deleteResidents);
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
