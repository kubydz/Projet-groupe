import { useContext } from "react";
import { StockContext } from "../../Components/Stock/Stock";
import eau from "../../assets/img/eau.png";
import heineken from "../../assets/img/heineken.jpg";
import icetea from "../../assets/img/icetea.avif";
import coca from "../../assets/img/coca-cola.jpg";
import "./Boisson.css";
// Association des noms des boissons avec leurs images
const boissonImages = {
  "Eau": eau,
  "Coca-Cola": coca,
  "Heineken": heineken,
  "Icetea": icetea,
};

function Boisson() {
  // const { boissons, addItem, selectedItems, incrementItem, decrementItem, removeItem } = useContext(StockContext);
  const { boissons, addItem } = useContext(StockContext);

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

        
     
    </div>
  );
}

export default Boisson;
