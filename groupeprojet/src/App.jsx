import './App.css'
import { StockProvider } from './Components/Stock/Stock';
import MontantTotal from './Components/Total/MontantTotal';

function App() {
  return (
    <StockProvider>
      <MontantTotal/>
    </StockProvider>
  );
}

export default App;
