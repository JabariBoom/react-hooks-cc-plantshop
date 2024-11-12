import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchPlant, setsearchPlant] = useState("");

  const baseURL = "https://my-json-server.typicode.com/JabariBoom/react-hooks-cc-plantshop/plants"

  useEffect(()=> {
    fetch(baseURL)
    .then((response) => response.json())
    .then((data) => setPlants(data));
  }, []);

  const theDisplayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  );
  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search searchPlant={searchPlant} setsearchPlant={setsearchPlant} />
      <PlantList plants={theDisplayedPlants} />
    </main>
  );
}

export default PlantPage;




