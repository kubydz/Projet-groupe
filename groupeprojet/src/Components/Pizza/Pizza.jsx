import './Pizza.css';
import margarita from '../../assets/img/margerita.jpg';
import Cannibale from '../../assets/img/cannibale.webp';
import TroisFromages from '../../assets/img/3fromages.jpg';
import QuatreFromages from '../../assets/img/4fromages.jpg';
import Royale from '../../assets/img/royale.png';
import Vege from '../../assets/img/vege.jpg';
import Provencale from '../../assets/img/pizza-provencale.jpg';
import Italienne from '../../assets/img/pizzaita.avif';
import Espagnole from '../../assets/img/espagnole.jpg';
import Turque from '../../assets/img/pide.avif';
import Peperoni from '../../assets/img/peperroni.jpg';
import BBQ from '../../assets/img/BBQ.avif';

function Pizza(params) {
    return (
        <>
       
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./public/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Barriecito&display=swap" rel="stylesheet" />
        <header>
            <div className="opacite">
                <h1>π de Baba Laulaukubz Pizza</h1>
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
                    <li>Tomates, mozzarella, basilic frais, sel, huile d'olive</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
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
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza 3 Fromages</h2>
                <img src={TroisFromages} alt="Trois Fromages" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Roquefort, tomate (concentré), mozzarella (boule), chèvre frais</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza 4 Fromages</h2>
                <img src={QuatreFromages} alt="Quatre Fromages" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Mozzarella, gorgonzola (bleu), comté, fromage de chèvre</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Royale</h2>
                <img src={Royale} alt="Royale" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Tomate, jambon, mozzarella, olives noires</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Végétarienne</h2>
                <img src={Vege} alt="Végétarienne" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Légumes, pas de viande</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Provencale</h2>
                <img src={Provencale} alt="Provencale" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Mozzarella, tomate fraîche, anchois, persillade, olive</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Italienne</h2>
                <img src={Italienne} alt="Italienne" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Fromage, lardons, champignons, oeuf, émincés de poulet</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Espagnole</h2>
                <img src={Espagnole} alt="Espagnole" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Chorizo, aubergines, tomates</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Turque (Pide)</h2>
                <img src={Turque} alt="Pide" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Fromage kasar turc, fromage haloumi, botte de persil</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza Peperoni</h2>
                <img src={Peperoni} alt="Peperoni" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Pâte à pizza, sauce tomate, mozzarella, pepperoni</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="card">
                <h2>Pizza BBQ</h2>
                <img src={BBQ} alt="BBQ" />
                <p>Prix: 12€</p>
                <p>Ingrédients:</p>
                <ul>
                    <li>Bacon, poivrons (verts, rouges ou un mélange), coriandre fraîche (hachée), cheddar (en plus de la mozzarella)</li>
                </ul>
                <button><i class="fa-solid fa-plus"></i></button><button><i class="fa-solid fa-minus"></i></button><button><i class="fa-solid fa-trash"></i></button>
            </div>
            {/* Ajoutez les cartes suivantes jusqu'au produit 16 */}
        </div>
        </>
    );
}

export default  Pizza 