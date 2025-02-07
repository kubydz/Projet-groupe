import './pizza.css';
import { useContext } from "react";
import { StockContext } from "../Stock";

// Importation des images pour les pizzas
import margarita from "../../assets/img/margerita.jpg";
import cannibale from "../../assets/img/cannibale.webp";
import troisFromages from "../../assets/img/3fromages.jpg";
import quatreFromages from "../../assets/img/4fromages.jpg";
import royale from "../../assets/img/royale.png";
import vege from "../../assets/img/vege.jpg";
import provencale from "../../assets/img/pizza-provencale.jpg";
import italienne from "../../assets/img/pizzaita.avif";
import espagnole from "../../assets/img/espagnole.jpg";
import turque from "../../assets/img/pide.avif";
import peperoni from "../../assets/img/peperroni.jpg";
import bbq from "../../assets/img/BBQ.avif";

// Association des noms de pizzas avec les images
const pizzaImages = {
  "Pizza Margherita": margarita,
  "Pizza Pepperoni": peperoni,
  "Pizza Végétarienne": vege,
  "Pizza Italienne": italienne,
  "Pizza Cannibal": cannibale,
  "Pizza BBQ": bbq,
  "Pizza Turque": turque,
  "Pizza Royale": royale,
  "Pizza Trois Fromages": troisFromages,
  "Pizza Quatre Fromages": quatreFromages,
  "Pizza Espagnole": espagnole,
  "Pizza Provençale": provencale
};

function Pizza() {
  const { pizzas, addItem } = useContext(StockContext);

  return (
    <div className="Pizza">
      <h1>🍕 Bienvenue chez Laulaukubz</h1>
      <div className="cards-container">
        {pizzas.map((pizza) => (
          <div key={pizza.name} className="card">
            <h5>{pizza.name}</h5>
            <img src={pizzaImages[pizza.name]} alt={pizza.name} />
            <p>Stock: {pizza.stock}</p>
            <p>Prix: {pizza.price.toFixed(2)} €</p>
            <button onClick={() => addItem(pizza, "pizza")}>Ajouter</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pizza;
