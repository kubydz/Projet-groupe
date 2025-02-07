import { createContext, useState, useEffect } from "react";
import data from "../data.json";
import PropTypes from 'prop-types';

// Création du contexte pour partager les données
// eslint-disable-next-line react-refresh/only-export-components
export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [boissons, setBoissons] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setPizzas(data.pizza);
    setBoissons(data.boissons);
  }, []);

  // ✅ Ajouter un élément (pizza ou boisson)
  const addItem = (item, type) => {
    if (item.stock > 0) {
      if (type === "pizza") {
        setPizzas(pizzas.map(p => p.name === item.name ? { ...p, stock: p.stock - 1 } : p));
      } else if (type === "boisson") {
        setBoissons(boissons.map(b => b.nom === item.nom ? { ...b, stock: b.stock - 1 } : b));
      }
      setSelectedItems([...selectedItems, { ...item, type, quantity: 1 }]);
      setTotalAmount(prevTotal => prevTotal + item.prix);
    } else {
      alert("Stock insuffisant !");
    }
  };

  // ✅ Incrémenter la quantité d'un élément
  const incrementItem = (index) => {
    const updatedItems = [...selectedItems];
    const item = updatedItems[index];

    if (item.type === "pizza") {
      const foundPizza = pizzas.find(p => p.name === item.name);
      if (foundPizza && foundPizza.stock > 0) {
        setPizzas(pizzas.map(p => p.name === item.name ? { ...p, stock: p.stock - 1 } : p));
        item.quantity += 1;
        setTotalAmount(prevTotal => prevTotal + item.prix);
      } else {
        alert("Stock insuffisant !");
      }
    } else if (item.type === "boisson") {
      const foundBoisson = boissons.find(b => b.nom === item.nom);
      if (foundBoisson && foundBoisson.stock > 0) {
        setBoissons(boissons.map(b => b.nom === item.nom ? { ...b, stock: b.stock - 1 } : b));
        item.quantity += 1;
        setTotalAmount(prevTotal => prevTotal + item.prix);
      } else {
        alert("Stock insuffisant !");
      }
    }
    setSelectedItems(updatedItems);
  };

  // ✅ Décrémenter la quantité d'un élément
  const decrementItem = (index) => {
    const updatedItems = [...selectedItems];
    const item = updatedItems[index];

    if (item.quantity > 1) {
      if (item.type === "pizza") {
        setPizzas(pizzas.map(p => p.name === item.name ? { ...p, stock: p.stock + 1 } : p));
      } else if (item.type === "boisson") {
        setBoissons(boissons.map(b => b.nom === item.nom ? { ...b, stock: b.stock + 1 } : b));
      }
      item.quantity -= 1;
      setTotalAmount(prevTotal => prevTotal - item.prix);
      setSelectedItems(updatedItems);
    } else {
      removeItem(index);
    }
  };

  // ✅ Supprimer complètement un élément
  const removeItem = (index) => {
    const itemToRemove = selectedItems[index];

    if (itemToRemove.type === "pizza") {
      setPizzas(pizzas.map(p => p.name === itemToRemove.name ? { ...p, stock: p.stock + itemToRemove.quantity } : p));
    } else if (itemToRemove.type === "boisson") {
      setBoissons(boissons.map(b => b.nom === itemToRemove.nom ? { ...b, stock: b.stock + itemToRemove.quantity } : b));
    }

    setTotalAmount(prevTotal => prevTotal - (itemToRemove.prix * itemToRemove.quantity));
    setSelectedItems(selectedItems.filter((_, i) => i !== index));
  };

  return (
    <StockContext.Provider value={{ pizzas, boissons, selectedItems, totalAmount, addItem, incrementItem, decrementItem, removeItem }}>
      {children}
    </StockContext.Provider>
  );
};

StockProvider.propTypes = {
  children: PropTypes.node.isRequired
};
