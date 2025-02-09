import React from "react";
import "./DrawerDetails.css";

interface DrawerDetailsProps {
  data: any;
  type: string;
}

const DrawerDetails: React.FC<DrawerDetailsProps> = ({ data, type }) => {
  const renderContent = () => {
    switch (type) {
      case "people":
        return (
          <div className="drawer-details">
            <div>
              <img src="/assets/height.png" alt="Height" />
              <p> {data.height}</p>
            </div>
            <div>
              <img src="/assets/mass.png" alt="Mass" />
              <p>{data.mass}</p>
            </div>
            <div>
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
              <p>{data.gender}</p>
            </div>
            <div>
              <img src="/assets/planets.png" alt="Planets" />
              <p>{data.homeworld}</p>
            </div>
          </div>
        );
      case "starships":
        return (
          <div>
            <h2>Starship Details</h2>
            <p>Name: {data.name}</p>
            <p>Model: {data.model}</p>
            <p>Manufacturer: {data.manufacturer}</p>
          </div>
        );
      case "films":
        return (
          <div>
            <h2>Film Details</h2>
            <p>Title: {data.title}</p>
            <p>Director: {data.director}</p>
            <p>Release Date: {data.release_date}</p>
          </div>
        );
      case "planets":
        return (
          <div>
            <h2>Planet Details</h2>
            <p>Name: {data.name}</p>
            <p>Climate: {data.climate}</p>
            <p>Population: {data.population}</p>
          </div>
        );
      case "vehicles":
        return (
          <div>
            <h2>Vehicle Details</h2>
            <p>Name: {data.name}</p>
            <p>Model: {data.model}</p>
            <p>Manufacturer: {data.manufacturer}</p>
          </div>
        );
      default:
        return <p>Unknown type</p>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default DrawerDetails;
