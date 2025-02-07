import { useContext } from "react";
import { StockContext } from "../Stock";
import eau from "../../assets/img/eau.png";
import heineken from "../../assets/img/heineken.jpg";
import icetea from "../../assets/img/icetea.avif";
import coca from "../../assets/img/coca-cola.jpg";


function Boisson() {
  const { boissons, addItem } = useContext(StockContext);

  // Association des noms de pizzas avec les images
  const boissonImages = {
    "Eau": eau,
    "Heineken": heineken,
    "IceTea":icetea,
    "Coca": coca
  }
  return (
    <div className="Boisson">
      <h1>🥤 Menu des Boissons</h1>
      <div className="cards-container">
        {boissons.map((boisson) => (
          <div key={boisson.nom} className="card">
            <h5>{boisson.nom}</h5>
            <p>Stock: {boisson.stock}</p>
            <p>Prix: {boisson.prix.toFixed(2)} €</p>
            <button onClick={() => addItem(boisson, "boisson")}>Ajouter</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Boisson;
