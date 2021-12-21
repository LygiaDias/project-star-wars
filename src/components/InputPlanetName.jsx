import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function InputPlanetName() {
  const { filter, setFilter } = useContext(PlanetContext);

  function handleChange({ target }) {
    setFilter({ ...filter, filterByName: { name: target.value } });
  }

  return (
    <input
      type="text"
      onChange={ handleChange }
      data-testid="name-filter"
    />
  );
}

export default InputPlanetName;
