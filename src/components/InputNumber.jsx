import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetContext';


function InputNumber() {
  const { handleChange, handleNumber,
    onClickFunction, handleValue, initialValue, columnFil } = useContext(PlanetsContext);

  const comparison = ['maior que',
    'menor que', 'igual a'];

  return (
    <header>
      <div className="filter">
       <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        placeholder="Filtrar por nome"
        className="input-name"
      /> 
     <label> Filtrar por: 
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleNumber }
        className="column"
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
        className="comparison"

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
        className='number'

      />
      </label>
     

      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClickFunction }
        className="button"
      >
        {' '}
        Filtrar

      </button> 
      </div>
    </header>
  );
}
export default InputNumber;
