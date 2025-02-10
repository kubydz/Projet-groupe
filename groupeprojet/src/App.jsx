import './App.css'
import Header from './Components/Header/Header';
import { StockProvider } from './Components/Stock/Stock';
import MontantTotal from './Components/Total/MontantTotal';

function App() {
  return (
    <StockProvider>
      <Header />
      <MontantTotal/>
    </StockProvider>
  );
}

export default App;
