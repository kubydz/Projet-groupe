import './pizza.css';
import { useContext } from "react";
import { StockContext } from "../Stock";

// Importation des images pour les pizzas
import margarita from "../../assets/img/margerita.jpg";
import cannibale from "../../assets/img/cannibale.webp";
import troisFromages from "../../assets/img/3fromages.jpg";
import quatreFromages from "../../assets/img/4fromages.jpg";
import royale from "../../assets/img/royale.png";
import vege from "../../assets/img/vege.jpg";
import provencale from "../../assets/img/pizza-provencale.jpg";
import italienne from "../../assets/img/pizzaita.avif";
import espagnole from "../../assets/img/espagnole.jpg";
import turque from "../../assets/img/pide.avif";
import peperoni from "../../assets/img/peperroni.jpg";
import bbq from "../../assets/img/BBQ.avif";

// Association des noms de pizzas avec les images
const pizzaImages = {
  "Pizza Margherita": margarita,
  "Pizza Pepperoni": peperoni,
  "Pizza Végétarienne": vege,
  "Pizza Italienne": italienne,
  "Pizza Cannibal": cannibale,
  "Pizza BBQ": bbq,
  "Pizza Turque": turque,
  "Pizza Royale": royale,
  "Pizza Trois Fromages": troisFromages,
  "Pizza Quatre Fromages": quatreFromages,
  "Pizza Espagnole": espagnole,
  "Pizza Provençale": provencale
};

function Pizza() {
    const [count, setCount] = useState(0);
    
    const incrementCount = () => {
        setCount(count + 1);
      };
      const decrementCount = () => {
        setCount(count - 1);
      };
    return (
        <>
        <header>
            <div className="opacite">
                <h1> Laulaukubz Pizza</h1>
                <section className="finance" />
            </div>
        </header>
        <h1 className="carte">Notre Carte</h1>
        <div className="vitrine">
            <div className="card">
                <h2>Margherita</h2>
                <img src={margarita} alt="Margherita" />
                <p>Prix: 10€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Tomates, mozzarella, basilic frais, sel, huile d `olive</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            {/* Répétez les cartes suivantes pour les autres produits */}
            <div className="card">
                <h2>Pizza Cannibale</h2>
                <img src={Cannibale} alt="Cannibale" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Sauce BBQ, mozzarella, boeuf, merguez, poulet, swirl de sauce BBQ</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza 3 Fromages</h2>
                <img src={TroisFromages} alt="Trois Fromages" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Roquefort, tomate (concentré), mozzarella (boule), chèvre frais</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza 4 Fromages</h2>
                <img src={QuatreFromages} alt="Quatre Fromages" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Mozzarella, gorgonzola (bleu), comté, fromage de chèvre</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Royale</h2>
                <img src={Royale} alt="Royale" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Tomate, jambon, mozzarella, olives noires</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Végétarienne</h2>
                <img src={Vege} alt="Végétarienne" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Légumes, pas de viande</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Provencale</h2>
                <img src={Provencale} alt="Provencale" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Mozzarella, tomate fraîche, anchois, persillade, olive</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Italienne</h2>
                <img src={Italienne} alt="Italienne" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Fromage, lardons, champignons, oeuf, émincés de poulet</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Espagnole</h2>
                <img src={Espagnole} alt="Espagnole" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Chorizo, aubergines, tomates</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Turque (Pide)</h2>
                <img src={Turque} alt="Pide" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Fromage kasar turc, fromage haloumi, botte de persil</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Peperoni</h2>
                <img src={Peperoni} alt="Peperoni" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Pâte à pizza, sauce tomate, mozzarella, pepperoni</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza BBQ</h2>
                <img src={BBQ} alt="BBQ" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Bacon, poivrons (verts, rouges ou un mélange), coriandre fraîche (hachée), cheddar (en plus de la mozzarella)</li>
                </ul>
                <button onClick={incrementCount}>Incrémenter</button>
                 <p>Nombre : {count}</p>
                    <button onClick={decrementCount}>Incrémenter</button>
                    
                <button><i className="fa-solid fa-trash"></i></button>
            </div>
            {/* Ajoutez les cartes suivantes jusqu'au produit 16 */}
        </div>
        </>
    );
}

export default Pizza;
