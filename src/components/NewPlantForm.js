import React, { useState } from "react";

const API_URL = "https://api.jsonbin.io/v3/b/6731e0b1acd3cb34a8a66ef1";
const API_KEY = "$2a$10$1VxF1Z7gFIJrMfkSbIG8YOa1mjc8rRn.SNHz.yCV02hiToJeLJjbm";
const API_KEY_ID = "6731e0d5e41b4d34e45235f9";

function NewPlantForm({ setPlants, plants }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlant = { name, image, price: parseFloat(price) };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "X-Master-Key": API_KEY,
        "X-Access-Key-ID": API_KEY_ID,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then((response) => response.json())
      .then((data) => {
        setPlants([...plants, data.record]);
        setName("");
        setImage("");
        setPrice("");
      })
      .catch((error) => console.error("Error adding plant:", error));
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

