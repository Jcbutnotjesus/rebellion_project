import React from "react";
import "./DrawerDetails.css";
import People from "./Type/People/People.tsx";
import Starships from "./Type/Starships/Starships.tsx";
import Planets from "./Type/Planets/Planets.tsx";
import Vehicles from "./Type/Vehicles/Vehicles.tsx";
import Films from "./Type/Films/Films.tsx";

interface DrawerDetailsProps {
  data: any;
  type: string;
}

const DrawerDetails: React.FC<DrawerDetailsProps> = ({ data, type }) => {
  const renderContent = () => {
    switch (type) {
      case "people":
        return <People data={data} />;
      case "starships":
        return <Starships data={data} />;
      case "films":
        return <Films data={data} />;
      case "planets":
        return <Planets data={data} />;
      case "vehicles":
        return <Vehicles data={data} />;
      default:
        return <p>Unknown type</p>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default DrawerDetails;
