import './App.css'
import { StockProvider } from './Components/Stock/Stock';
import MontantTotal from './Components/Total/MontantTotal';
import NavBar from './Components/Navbar/Navbar';
function App() {
  return (
    <div>
      <NavBar/>
      <StockProvider>
        <MontantTotal/>   
      </StockProvider>
    </div>
  );
}

export default App;
