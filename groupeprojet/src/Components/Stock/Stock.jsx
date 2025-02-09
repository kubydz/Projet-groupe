import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import data from "../../data.json";
import insuffisant from '../../assets/img/croix.png'
import '../Adresse/Adresse.css'


// Création du contexte Stock
const StockContext = createContext();
export { StockContext };

export const StockProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [boissons, setBoissons] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [popupMessage, setPopupMessage] = useState(""); // 🔥 Gestion du popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Charger les données au montage
  useEffect(() => {
    setPizzas(data.pizza);
    setBoissons(data.boissons);
  }, []);

  // 🔄 Mise à jour du stock
  const updateStock = (item, delta) => {
    console.log(`🔄 Mise à jour du stock: ${item.name}, ID=${item.id}, Delta=${delta}, Type=${item.type}`);

    if (item.type === "pizza") {
      setPizzas((prevPizzas) =>
        prevPizzas.map((p) =>
          p.id === item.id ? { ...p, stock: Math.max(0, p.stock + delta) } : p
        )
      );
    } else if (item.type === "boisson") {
      setBoissons((prevBoissons) =>
        prevBoissons.map((b) =>
          b.id === item.id ? { ...b, stock: Math.max(0, b.stock + delta) } : b
        )
      );
    } else {
      console.warn("❌ Type d'item inconnu :", item);
    }
  };

  // ✅ Ajouter un item avec popup en cas de stock insuffisant
  const addItem = (item) => {
    console.log(`➕ Tentative d'ajout: ${item.name} (Stock: ${item.stock})`);
  
    if (item.stock > 0) {
      updateStock(item, -1);
      setSelectedItems((prev) => [...prev, { ...item, quantity: 1 }]);
      setTotalAmount((prev) => prev + item.prix);
    } else {
      console.log("⚠️ Stock insuffisant ! Activation du popup.");
      setPopupMessage(`⚠️ Stock insuffisant ! Impossible d'ajouter ${item.name}.`);
      setIsPopupOpen(true);
    }
  };
  

  // ✅ Modifier la quantité d'un produit (Ajout/Suppression)
  const modifyItem = (id, delta) => {
    const itemToUpdate = pizzas.find((p) => p.id === id) || boissons.find((b) => b.id === id);

    if (!itemToUpdate) {
      console.warn("❌ Item non trouvé pour modification :", id);
      return;
    }

    console.log(`📢 Modification détectée: ${itemToUpdate.name}, ID=${id}, Delta=${delta}`);

    setSelectedItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );

    updateStock(itemToUpdate, -delta);
    setTotalAmount((prev) => prev + delta * itemToUpdate.prix);
  };

  // ✅ Incrémenter la quantité
  const incrementItem = (id) => modifyItem(id, 1);

  // ✅ Décrémenter la quantité
  const decrementItem = (id) => modifyItem(id, -1);

  // ✅ Supprimer un produit
  const removeItem = (itemToRemove) => {
    console.log(`🗑️ Suppression: ${itemToRemove.name}`);

    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((item) => item.id !== itemToRemove.id)
    );

    updateStock(itemToRemove, itemToRemove.quantity || 1);
    setTotalAmount((prev) => prev - itemToRemove.prix * (itemToRemove.quantity || 1));
  };

  return (
    <StockContext.Provider
      value={{
        pizzas,
        boissons,
        selectedItems,
        totalAmount,
        addItem,
        incrementItem,
        decrementItem,
        removeItem,
      }}
    >
      {children}

      {/* ✅ Affichage du popup en cas de stock insuffisant */}
      {isPopupOpen && (
        <div className="popup">
          <img src={insuffisant} alt=""  style={{ width: "100px", height: "100px" }}/>
          <p>{popupMessage}</p>
          <button onClick={() => setIsPopupOpen(false)}>OK</button>
        </div>
      )}
    </StockContext.Provider>
  );
};

// Validation des props
StockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
