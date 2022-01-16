import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetContext';

function Table() {
  const { data, filter ,deleteFilterObj } = useContext(PlanetsContext);
  const { filterByName: { name } } = filter;
  console.log(filter);

  return (

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {data.filter((element) => element.name.includes(name))
          .map((param) => (
            <tr key={ param.name }>
              <td>{param.name}</td>
              <td>{param.rotation_period}</td>
              <td>{param.orbital_period}</td>
              <td>{param.diameter}</td>
              <td>{param.climate}</td>
              <td>{param.gravity}</td>
              <td>{param.terrain}</td>
              <td>{param.surface_water}</td>
              <td>{param.population}</td>
              <td>{param.films}</td>
              <td>{param.created}</td>
              <td>{param.edited}</td>
              <td>{param.url}</td>

            </tr>
          ))}
      </tbody>
    </table>

  );
}

export default Table;
