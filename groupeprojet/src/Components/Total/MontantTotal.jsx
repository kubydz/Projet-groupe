import { useContext } from 'react';
import { StockContext } from '../Stock/Stock';
import Adresse from '../Adresse/Adresse';
import Pizza from '../Pizza/Pizza';
import Boisson from '../Boisson/Boisson';

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

// Importation des images pour les boissons
import eau from "../../assets/img/eau.png";
import heineken from "../../assets/img/heineken.jpg";
import icetea from "../../assets/img/icetea.avif";
import coca from "../../assets/img/coca-cola.jpg";

// Association des noms avec les images
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
  "Pizza Provençale": provencale,
};

const boissonImages = {
  "Eau": eau,
  "Coca-Cola": coca,
  "Heineken": heineken,
  "Icetea": icetea,
};

function MontantTotal() {
  const { selectedItems, incrementItem, decrementItem, removeItem } = useContext(StockContext);

  // Calcul du montant total basé sur les items sélectionnés
  const calculatedTotalAmount = selectedItems.reduce(
    (total, item) => total + item.prix * (item.quantity || 1), 0
  );

  return (
    <div className="Menu">
      <Pizza />
      <Boisson />

      <div className="App">
        <h2>🛒 Commande Sélectionnée</h2>
        <div className="selected-items">
          {selectedItems.length > 0 ? (
            selectedItems.map((item, id) => {
              // Vérification du type d'item pour choisir l'image
              const imageSrc = pizzaImages[item.name] || boissonImages[item.name] || item.img || "/default.jpg";

              return (
                <div key={id} className="selected-item">
                  <img 
                    src={imageSrc} 
                    alt={item.name} 
                    style={{ width: "200px", height: "200px", marginRight: "10px", background:"white", display: "flex" }}
                  />
                  <p>
                    {item.name} - {item.prix ? item.prix.toFixed(2) : "0.00"} € 
                    (Quantité: {item.quantity || 1})
                  </p>
                  <button onClick={() => incrementItem(item.id)}>➕</button>
                  <button onClick={() => decrementItem(item.id)}>➖</button>
                  <button onClick={() => removeItem(item)}>🗑️</button>
                </div>
              );
            })
          ) : (
            <p>Aucun article sélectionné.</p>
          )}
        </div>

        <h2>💰 Montant Total: {calculatedTotalAmount.toFixed(2)} €</h2>
      </div>

      <Adresse />
    </div>
  );
}

export default MontantTotal;
