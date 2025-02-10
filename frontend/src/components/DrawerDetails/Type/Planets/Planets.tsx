import React from "react";
import { getIds } from "../utils.ts";
import { usePeople } from "../../../../hooks/usePeoples.ts";
import { useFilms } from "../../../../hooks/useFilms.ts";

interface PlanetsProps {
  data: any;
}

const Planets: React.FC<PlanetsProps> = ({ data }) => {
  const residentsIds = getIds(data.residents);
  const filmsIds = getIds(data.films);

  const {
    data: residents,
    isLoading: isResidentsLoading,
    error: residentsError,
  } = usePeople(residentsIds);
  const {
    data: films,
    isLoading: isFilmsLoading,
    error: filmsError,
  } = useFilms(filmsIds);

  return (
    <div className="details">
      <div className="drawer-details">
        <div className="item">
          <img src="/assets/rotation.png" alt="Rotation Period" />
          <p>Période de rotation: {data.rotation_period}</p>
        </div>
        <div className="item">
          <img src="/assets/orbital.png" alt="Orbital Period" />
          <p>Période orbitale: {data.orbital_period}</p>
        </div>
        <div className="item">
          <img src="/assets/diameter.png" alt="Diameter" />
          <p>Diamètre: {data.diameter}</p>
        </div>
        <div className="item">
          <img src="/assets/climate.png" alt="Climate" />
          <p>Climat: {data.climate}</p>
        </div>
      </div>
      <div className="drawer-details">
        <div className="item">
          <img src="/assets/gravity.png" alt="Gravity" />
          <p>Gravité: {data.gravity}</p>
        </div>
        <div className="item">
          <img src="/assets/terrain.png" alt="Terrain" />
          <p>Terrain: {data.terrain}</p>
        </div>
        <div className="item">
          <img src="/assets/water.png" alt="Surface Water" />
          <p>Eau de surface: {data.surface_water}</p>
        </div>
        <div className="item">
          <img src="/assets/population.png" alt="Population" />
          <p>Population: {data.population}</p>
        </div>
      </div>
      <div className="drawer-details">
        {data.residents && data.residents.length > 0 && (
          <div className="item">
            <img src="/assets/people.png" alt="Residents" />
            <p>Résidents:</p>
            {isResidentsLoading ? (
              <p>Loading...</p>
            ) : residentsError ? (
              <p>Error loading residents</p>
            ) : (
              residents?.map((resident) => (
                <p key={resident.name}>{resident.name}</p>
              ))
            )}
          </div>
        )}
        {data.films && data.films.length > 0 && (
          <div className="item">
            <img src="/assets/films.png" alt="films" />
            <p>Films:</p>
            {isFilmsLoading ? (
              <p>Loading...</p>
            ) : filmsError ? (
              <p>Error loading films</p>
            ) : (
              films?.map((film) => <p key={film.title}>{film.title}</p>)
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Planets;
