import React from "react";
import { getIds } from "../utils.ts";
import { usePeople } from "../../../../hooks/usePeoples.ts";
import { usePlanets } from "../../../../hooks/usePlanets.ts";
import { useStarships } from "../../../../hooks/useStarships.ts";
import { useVehicles } from "../../../../hooks/useVehicles.ts";
import { useSpecies } from "../../../../hooks/useSpecies.ts";

interface FilmsProps {
  data: any;
}

const Films: React.FC<FilmsProps> = ({ data }) => {
  const charactersIds = getIds(data.characters);
  const planetsIds = getIds(data.planets);
  const starshipsIds = getIds(data.starships);
  const vehiclesIds = getIds(data.vehicles);
  const speciesIds = getIds(data.species);

  const {
    data: characters,
    isLoading: isCharactersLoading,
    error: charactersError,
  } = usePeople(charactersIds);
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
    data: species,
    isLoading: isSpeciesLoading,
    error: speciesError,
  } = useSpecies(speciesIds);

  return (
    <div className="details">
      <div className="drawer-details">
        <div className="item">
          <img src="/assets/films.png" alt="Episode" />
          <p>Épisode: {data.episode_id}</p>
        </div>
        <div className="item">
          <img src="/assets/director.png" alt="Director" />
          <p>Réalisateur: {data.director}</p>
        </div>
        <div className="item">
          <img src="/assets/dollar.png" alt="Producer" />
          <p>Producteur: {data.producer}</p>
        </div>
        <div className="item">
          <img src="/assets/year.png" alt="Release Date" />
          <p>Date de sortie: {data.release_date}</p>
        </div>
      </div>
      <div className="drawer-details">
        <div className="item">
          <img src="/assets/script.png" alt="Opening Crawl" />
          <p>Texte d'ouverture: {data.opening_crawl}</p>
        </div>
      </div>
      <div className="drawer-details">
        {data.characters && data.characters.length > 0 && (
          <div className="item">
            <img src="/assets/people.png" alt="Characters" />
            <p>Personnages:</p>
            {isCharactersLoading ? (
              <p>Loading...</p>
            ) : charactersError ? (
              <p>Error loading characters</p>
            ) : (
              characters?.map((character) => (
                <p key={character.name}>{character.name}</p>
              ))
            )}
          </div>
        )}
      </div>
      <div className="drawer-details">
        {data.planets && data.planets.length > 0 && (
          <div className="item">
            <img src="/assets/planets.png" alt="Planets" />
            <p>Planètes:</p>
            {isPlanetsLoading ? (
              <p>Loading...</p>
            ) : planetsError ? (
              <p>Error loading planets</p>
            ) : (
              planets?.map((planet) => <p key={planet.name}>{planet.name}</p>)
            )}
          </div>
        )}
        {data.starships && data.starships.length > 0 && (
          <div className="item">
            <img src="/assets/starship.png" alt="Starships" />
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
            <img src="/assets/vehicles.png" alt="Vehicles" />
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
        {data.species && data.species.length > 0 && (
          <div className="item">
            <img src="/assets/population.png" alt="Species" />
            <p>Espèces:</p>
            {isSpeciesLoading ? (
              <p>Loading...</p>
            ) : speciesError ? (
              <p>Error loading species</p>
            ) : (
              species?.map((specie) => <p key={specie.name}>{specie.name}</p>)
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Films;
