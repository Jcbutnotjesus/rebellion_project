import React from "react";
import { getIds } from "../utils.ts";
import { useFilms } from "../../../../hooks/useFilms.ts";

interface VehiclesProps {
  data: any;
}

const Vehicles: React.FC<VehiclesProps> = ({ data }) => {
  const filmsIds = getIds(data.films);

  const {
    data: films,
    isLoading: isFilmsLoading,
    error: filmsError,
  } = useFilms(filmsIds);

  return (
    <div className="details">
      <div className="drawer-details">
        <div className="item">
          <img src="/assets/vehicles.png" alt="Model" />
          <p>Modèle: {data.model}</p>
        </div>
        <div className="item">
          <img src="/assets/manufacturer.png" alt="Manufacturer" />
          <p>Fabricant: {data.manufacturer}</p>
        </div>
        <div className="item">
          <img src="/assets/dollar.png" alt="Cost" />
          <p>Coût en crédits: {data.cost_in_credits}</p>
        </div>
        <div className="item">
          <img src="/assets/length.png" alt="Length" />
          <p>Longueur: {data.length}</p>
        </div>
      </div>
      <div className="drawer-details">
        <div className="item">
          <img src="/assets/speed.png" alt="Speed" />
          <p>Vitesse atmosphérique maximale: {data.max_atmosphering_speed}</p>
        </div>
        <div className="item">
          <img src="/assets/crew.png" alt="Crew" />
          <p>Équipage: {data.crew}</p>
        </div>
        <div className="item">
          <img src="/assets/passenger.png" alt="Passengers" />
          <p>Passagers: {data.passengers}</p>
        </div>
        <div className="item">
          <img src="/assets/container.png" alt="Cargo" />
          <p>Capacité de cargaison: {data.cargo_capacity}</p>
        </div>
        <div className="item">
          <img src="/assets/water.png" alt="Consumables" />
          <p>Consommables: {data.consumables}</p>
        </div>
      </div>
      <div className="drawer-details">
        <div className="item">
          <img src="/assets/pneu.png" alt="Vehicle Class" />
          <p>Classe de véhicule: {data.vehicle_class}</p>
        </div>

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

export default Vehicles;
