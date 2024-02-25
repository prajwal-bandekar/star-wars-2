import React, { useState, useEffect } from "react";
import axios from "axios";
import ResidentsList from "./ResidentsList";

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchResidents();
  }, [planet.residents]);

  const fetchResidents = async () => {
    try {
      setLoading(true);
      const residentsData = await Promise.all(
        planet.residents.map((residentURL) => axios.get(residentURL))
      );
      setResidents(residentsData.map((resident) => resident.data));
    } catch (error) {
      console.error("Error fetching residents:", error);
    } finally {
      setLoading(false);
    }
  };


  const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <div className="planet-details">
        <p>
          <span>
            <i class="fa-solid fa-cloud-sun"></i> Climate: {capitalizeFirstLetter(planet.climate)}
          </span>
        </p>

        <p>
          <span>
            <i class="fa-solid fa-users"></i> Population: {capitalizeFirstLetter(planet.population)}
          </span>
        </p>

        <p>
          <span>
            <i class="fa-solid fa-earth-asia"></i> Terrain: {capitalizeFirstLetter(planet.terrain)}
          </span>
        </p>
      </div>
      {loading ? (
        <p>Loading residents...</p>
      ) : (
        <ResidentsList residents={residents} />
      )}
    </div>
  );
};

export default PlanetCard;
