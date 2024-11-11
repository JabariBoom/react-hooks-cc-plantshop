import React, { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";

const API_URL = "https://api.jsonbin.io/v3/b/6731e0b1acd3cb34a8a66ef1";
const API_KEY = "$2a$10$1VxF1Z7gFIJrMfkSbIG8YOa1mjc8rRn.SNHz.yCV02hiToJeLJjbm";
const API_KEY_ID = "6731e0d5e41b4d34e45235f9";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        "X-Master-Key": API_KEY,
        "X-Access-Key-ID": API_KEY_ID,
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlants(data.record);
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);
  
  return (
    <div>
      <NewPlantForm setPlants={setPlants} plants={plants} />
      <PlantList plants={plants} />
    </div>
  );
}

export default PlantPage;



