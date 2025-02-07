
import { useState, useEffect } from 'react';
import Adresse from './Components/Adresse/Adresse'
import Pizza from './Components/Pizza/Pizza'
function App() {
    const [products, setProducts] = useState([]);
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
  
    useEffect(() => {
      fetch('./data.json')
        .then(response => response.json())
        .then(data => {
          setProducts(data.products);
        })
        .catch(error => {
          console.error('Erreur lors du chargement des données JSON:', error);
        });
    }, []);
  
    const handleCardClick = (product) => {
      setSelectedOrders([...selectedOrders, product]);
      setTotalAmount(totalAmount + product.price);
    };
  
    const handleRemoveClick = (product) => {
      const newSelectedOrders = selectedOrders.filter(item => item.id !== product.id);
      setSelectedOrders(newSelectedOrders);
      setTotalAmount(totalAmount - product.price);
    };
  return (
    <>

<div className="App">
      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="card" onClick={() => handleCardClick(product)}>
            <h5>{product.name}</h5>
            <p>{product.price.toFixed(2)} €</p>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h2>Commande Sélectionnée</h2>
        {selectedOrders.map((product) => (
          <div key={product.id} className="selected-order">
            <p>{product.name} - {product.price.toFixed(2)} €</p>
            <button onClick={() => handleRemoveClick(product)}>Retirer</button>
          </div>
        ))}
        <h2>Montant Total : {totalAmount.toFixed(2)} €</h2>
      </div>
      <Pizza />
      <Adresse />
      
    </div>
  );
    </>
  )
}

export default App
