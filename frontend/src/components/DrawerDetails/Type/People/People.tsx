import React from "react";
import { usePlanets } from "../../../../hooks/usePlanets.ts";
import { getIds } from "../utils.ts";
import { useStarships } from "../../../../hooks/useStarships.ts";
import { useVehicles } from "../../../../hooks/useVehicles.ts";
import { useFilms } from "../../../../hooks/useFilms.ts";

interface PeopleProps {
  data: any;
}

const People: React.FC<PeopleProps> = ({ data }) => {
  const planetsIds = getIds([data.homeworld]);
  const starshipsIds =
    data.starships !== undefined ? getIds(data.starships) : [];
  const vehiclesIds = data.vehicles !== undefined ? getIds(data.vehicles) : [];
  const filmsIds = data.films !== undefined ? getIds(data.films) : [];

  const {
    data: planets,
    isLoading: isPlanetsLoading,
    error: planetsError,
  } = usePlanets(planetsIds);
  const {
    data: starships,
    isLoading: isStarshipsLoading,
    error: starshipsError,
  } = useStarships(starshipsIds);
  const {
    data: vehicles,
    isLoading: isVehiclesLoading,
    error: vehiclesError,
  } = useVehicles(vehiclesIds);
  const {
    data: films,
    isLoading: isFilmsLoading,
    error: filmsError,
  } = useFilms(filmsIds);

  return (
    <div className="details">
      <div className="drawer-details">
        <div className="item">
          <img src="/assets/height.png" alt="Height" />
          <p>Taille: {data.height}</p>
        </div>
        <div className="item">
          <img src="/assets/mass.png" alt="Mass" />
          <p>Poids: {data.mass}</p>
        </div>
        <div className="item">
          <img
            src={
              data.gender === "male"
                ? "/assets/male.png"
                : data.gender === "female"
                ? "/assets/female.png"
                : "/assets/NA.png"
            }
            alt="Gender"
          />
          <p>Sexe: {data.gender}</p>
        </div>
        <div className="item">
          <img src="/assets/planets.png" alt="Planets" />
          {isPlanetsLoading ? (
            <p>Loading...</p>
          ) : planetsError ? (
            <p>Error loading planet</p>
          ) : (
            <p>Planète d'origine: {planets?.[0]?.name}</p>
          )}
        </div>
      </div>
      <div className="drawer-details">
        <div className="item">
          <img src="/assets/year.png" alt="Birth Year" />
          <p>Année de naissance: {data.birth_year}</p>
        </div>
        <div className="item">
          <img src="/assets/eye.png" alt="Eye Color" />
          <p>Couleur des yeux: {data.eye_color}</p>
        </div>
        <div className="item">
          <img src="/assets/hair.png" alt="Hair Color" />
          <p>Couleur des cheveux: {data.hair_color}</p>
        </div>
        <div className="item">
          <img src="/assets/skin.png" alt="skin Color" id="skin" />
          <p>Couleur de la peau: {data.skin_color}</p>
        </div>
      </div>
      <div className="drawer-details">
        {data.starships && data.starships.length > 0 && (
          <div className="item">
            <img src="/assets/starship.png" alt="starships" />
            <p>Vaisseaux:</p>
            {isStarshipsLoading ? (
              <p>Loading...</p>
            ) : starshipsError ? (
              <p>Error loading starships</p>
            ) : (
              starships?.map((starship) => (
                <p key={starship.name}>{starship.name}</p>
              ))
            )}
          </div>
        )}
        {data.vehicles && data.vehicles.length > 0 && (
          <div className="item">
            <img src="/assets/vehicles.png" alt="vehicles" />
            <p>Véhicules:</p>
            {isVehiclesLoading ? (
              <p>Loading...</p>
            ) : vehiclesError ? (
              <p>Error loading vehicles</p>
            ) : (
              vehicles?.map((vehicle) => (
                <p key={vehicle.name}>{vehicle.name}</p>
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

export default People;
