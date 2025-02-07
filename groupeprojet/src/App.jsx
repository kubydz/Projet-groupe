import  { useContext } from 'react';
import Adresse from './Components/Adresse/Adresse';
import Pizza from './Components/Pizza/Pizza';
import Boisson from './Components/Boisson/Boisson';
import { StockProvider, StockContext } from './Components/Stock';

function App() {
  const { selectedItems, totalAmount, removeItem } = useContext(StockContext);

  return (
    <StockProvider>
      <div className="Menu">
        <Pizza />
        <Boisson />

        <h2>🛒 Commande Sélectionnée</h2>
        <div className="selected-items">
          {selectedItems.map((item, index) => (
            <div key={index} className="selected-item">
              <p>{item.name || item.nom} - {item.prix.toFixed(2)} €</p>
              <button onClick={() => removeItem(index)}>Retirer</button>
            </div>
          ))}
        </div>

        <h2>💰 Montant Total: {totalAmount.toFixed(2)} €</h2>
      </div>
      <Adresse />
    </StockProvider>
  );
}

export default App;
