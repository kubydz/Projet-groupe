import { useContext } from "react";
import { StockContext } from "../../Components/Stock/Stock";
import eau from "../../assets/img/eau.png";
import heineken from "../../assets/img/heineken.jpg";
import icetea from "../../assets/img/icetea.avif";
import coca from "../../assets/img/coca-cola.jpg";

// Association des noms des boissons avec leurs images
const boissonImages = {
  "Eau": eau,
  "Coca-Cola": coca,
  "Heineken": heineken,
  "Icetea": icetea,
};

function Boisson() {
  const { boissons, addItem, selectedItems, incrementItem, decrementItem, removeItem } = useContext(StockContext);

  return (
    <div className="Boisson">
      <h1>🥤 Menu des Boissons</h1>
      <div className="cards-container">
        {boissons.map((boisson, index) => ( // 🔥 Ajout de l'index pour éviter les clés dupliquées
          <div key={`${boisson.id}-${index}`} className="card">
            <img src={boissonImages[boisson.name] || "/default-boisson.jpg"} alt={boisson.name} />
            <h5>{boisson.name}</h5>
            <p>Stock: {boisson.stock}</p>
            <p>Prix: {boisson.prix.toFixed(2)} €</p>
            <div className="buttons">
              <button onClick={() => addItem(boisson)}>Ajouter</button>
            </div>
          </div>
        ))}
      </div>

      <h2>🛒 Boissons Sélectionnées</h2>
      <div className="selected-items">
        {selectedItems
          .filter((item) => item.type === "boisson")
          .map((item, index) => ( // 🔥 Ajout d'un index pour éviter les erreurs de clé dupliquée
            <div key={`${item.id}-${index}`} className="selected-item">
              <p>
                <img
                  src={boissonImages[item.name] || "/default-boisson.jpg"}
                  alt={item.name}
                  style={{ width: "200px", height: "200px", background: "white" }}
                />
                {item.name} - {item.prix ? item.prix.toFixed(2) : "Prix inconnu"} € 
                (Quantité: {item.quantity || 1})
              </p>
              <button onClick={() => incrementItem(item.id)}>➕</button>
              <button onClick={() => decrementItem(item.id)}>➖</button>
              <button onClick={() => removeItem(item)}>🗑️</button> {/* 🔥 Correction ici, passer `item` au lieu de `item.id` */}
            </div>
          ))}
      </div> 
    </div>
  );
}

export default Boisson;
