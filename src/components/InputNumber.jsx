import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetContext';

function InputNumber() {
  const { handleChange, handleNumber,
    onClickFunction, handleValue, initialValue, columnFil } = useContext(PlanetsContext);

  const comparison = ['maior que',
    'menor que', 'igual a'];

  return (
    <header>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleNumber }
      >
        {
          columnFil.map((col, index) => (
            <option key={ index } value={ col }>{ col }</option>
          ))
        }
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleNumber }

      >
        {
          comparison
            .map((col, index) => (
              <option key={ index } value={ col }>{ col }</option>))
        }
      </select>

      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handleValue }
        value={ initialValue }

      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClickFunction }
      >
        {' '}
        Filtrar

      </button>
    </header>
  );
}
export default InputNumber;
