
import './Boisson.css';
import { useState, useEffect } from 'react';

function Boisson() {
  const [boissons, setBoissons] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setBoissons(data.boissons);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données JSON:', error);
      });
  }, []);

  const handleDrinkSelection = (index) => {
    const selectedDrink = boissons[index];
    if (selectedDrink.stock > 0) {
      setBoissons(boissons.map((boisson, i) => i === index ? { ...boisson, stock: boisson.stock - 1 } : boisson));
      setSelectedDrinks([...selectedDrinks, selectedDrink]);
      setTotalAmount(totalAmount + selectedDrink.price);
    } else {
      alert("Stock insuffisant");
    }
  };

  const handleRemoveDrink = (index) => {
    const drinkToRemove = selectedDrinks[index];
    setBoissons(boissons.map((boisson) =>
      boisson.id === drinkToRemove.id ? { ...boisson, stock: boisson.stock + 1 } : boisson
    ));
    setSelectedDrinks(selectedDrinks.filter((_, i) => i !== index));
    setTotalAmount(totalAmount - drinkToRemove.price);
  };

  return (
    <div className="Boisson">
      <h1>Menu des Boissons</h1>
      <div className="cards-container">
        {boissons.map((boisson, index) => (
          <div key={boisson.nom} className="card" onClick={() => handleDrinkSelection(index)}>
            <h5>{boisson.nom}</h5>
            <p>Stock: {boisson.stock}</p>
            <p>Prix: {boisson.price.toFixed(2)} €</p>
          </div>
        ))}
      </div>
      <h2>Commande Sélectionnée</h2>
      <div className="selected-drinks">
        {selectedDrinks.map((drink, index) => (
          <div key={index} className="selected-drink">
            <p>{drink.nom} - {drink.price.toFixed(2)} €</p>
            <button onClick={() => handleRemoveDrink(index)}>Retirer</button>
          </div>
        ))}
      </div>
      <h2>Montant Total: {totalAmount.toFixed(2)} €</h2>
    </div>
  );
}

export {Boisson};
