import React from "react";
import { usePeople } from "./hooks/usePeople.tsx";
import { usePlanets } from "./hooks/usePlanets.tsx";
import { useStarships } from "./hooks/useStarships.tsx";

const App: React.FC = () => {
  const {
    data: people,
    isLoading: isLoadingPeople,
    error: errorPeople,
  } = usePeople();
  const {
    data: planets,
    isLoading: isLoadingPlanets,
    error: errorPlanets,
  } = usePlanets();
  const {
    data: starships,
    isLoading: isLoadingStarships,
    error: errorStarships,
  } = useStarships();

  if (isLoadingPeople || isLoadingPlanets || isLoadingStarships) {
    return <div>Loading...</div>;
  }

  if (errorPeople || errorPlanets || errorStarships) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1>Star Wars Data</h1>
      <h2>People</h2>
      <ul>
        {people.results.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
      <h2>Planets</h2>
      <ul>
        {planets.results.map((planet) => (
          <li key={planet.name}>{planet.name}</li>
        ))}
      </ul>
      <h2>Starships</h2>
      <ul>
        {starships.results.map((starship) => (
          <li key={starship.name}>{starship.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
