import React, { useState } from "react";
import { useSelector } from "react-redux";

const Fruits = () => {
  const fruits = useSelector((state) => state.fruit.fruits);
  const [selectedFruits, setSelectedFruits] = useState([]);
  const handleCompareClick = (fruit) => {
    if (!selectedFruits.includes(fruit)) {
      setSelectedFruits([...selectedFruits, fruit]);
    }
  };

  const handleRemoveClick = (fruitToRemove) => {
    const updatedSelectedFruits = selectedFruits.filter(
      (fruit) => fruit !== fruitToRemove
    );
    setSelectedFruits(updatedSelectedFruits);
  };
  return (
    <div>
      <div className="fruits">
        {fruits.map((fruit, index) => (
          <div key={index} className="each-fruit">
            <img src={fruit.image} alt={fruit.name} width="100px" />
            <p>{fruit.name}</p>
            <p style={{ color: "gray" }}>{fruit.description}</p>
            <p>${fruit.price}</p>
            {selectedFruits.includes(fruit) ? (
              <button className="btn" onClick={() => handleRemoveClick(fruit)}>
                Remove
              </button>
            ) : (
              <button className="btn" onClick={() => handleCompareClick(fruit)}>
                Compare
              </button>
            )}
          </div>
        ))}
      </div>
      {selectedFruits.length >= 2 && (
        <div>
          <h2>Comparison Results:</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Fruit</th>
                <th>Price</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              {selectedFruits.map((fruit, index) => (
                <tr key={index}>
                  <td>{fruit.name}</td>
                  <td>${fruit.price}</td>
                  <td>{fruit.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Fruits;
