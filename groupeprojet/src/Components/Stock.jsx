import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import data from "../data.json";

const StockContext = createContext();

export { StockContext };

export const StockProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [boissons, setBoissons] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setPizzas(data.pizza);
    setBoissons(data.boissons);
  }, []);

  const updateStock = (item, delta) => {
    const update = items =>
      items.map(i => (i.id === item.id ? { ...i, stock: i.stock + delta } : i));
    return item.type === "pizza" ? setPizzas(update) : setBoissons(update);
  };

  const addItem = item => {
    if (item.stock > 0) {
      updateStock(item, -1);
      const existingItem = selectedItems.find(i => i.id === item.id && i.type === item.type);
      if (existingItem) {
        setSelectedItems(prev =>
          prev.map(i =>
            i.id === item.id && i.type === item.type
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        );
      } else {
        setSelectedItems(prev => [...prev, { ...item, quantity: 1, type: item.type }]);
      }
      setTotalAmount(prev => prev + item.prix);
    } else {
      alert("Stock insuffisant !");
    }
  };

  const modifyItem = (index, delta) => {
    setSelectedItems(prev => {
      const updatedItems = [...prev];
      const item = updatedItems[index];
      if (!item) return prev; // Ensure item exists
      if (item.quantity === 1 && delta < 0) return prev.filter((_, i) => i !== index);
      updateStock(item, -delta);
      item.quantity += delta;
      setTotalAmount(prev => prev + item.prix * delta);
      return updatedItems;
    });
  };

  const incrementItem = index => modifyItem(index, 1);

  const decrementItem = index => modifyItem(index, -1);

  const removeItem = index => {
    const item = selectedItems[index];
    if (!item) return; // Ensure item exists
    updateStock(item, item.quantity);
    setTotalAmount(prev => prev - item.prix * item.quantity);
    setSelectedItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <StockContext.Provider value={{ pizzas, boissons, selectedItems, totalAmount, addItem, incrementItem, decrementItem, removeItem }}>
      {children}
    </StockContext.Provider>
  );
};

StockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
