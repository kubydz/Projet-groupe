import './Pizza.css';
import { useState } from 'react';
import data from '../../data.json';

// 🔥 Importation des images associées aux pizzas
import margarita from '../../assets/img/margerita.jpg';
import cannibale from '../../assets/img/cannibale.webp';
import troisFromages from '../../assets/img/3fromages.jpg';
import quatreFromages from '../../assets/img/4fromages.jpg';
import royale from '../../assets/img/royale.png';
import vege from '../../assets/img/vege.jpg';
import provencale from '../../assets/img/pizza-provencale.jpg';
import italienne from '../../assets/img/pizzaita.avif';
import espagnole from '../../assets/img/espagnole.jpg';
import turque from '../../assets/img/pide.avif';
import peperoni from '../../assets/img/peperroni.jpg';
import bbq from '../../assets/img/BBQ.avif';

// 🔥 Correspondance entre les noms de pizzas et leurs images
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
    // Initialisation du stock des pizzas avec leur quantité
    const [counts, setCounts] = useState(
        data.pizza.reduce((acc, pizza) => ({ ...acc, [pizza.id]: 0 }), {})
    );

    // Fonction pour augmenter la quantité d'une pizza (en respectant le stock)
    const incrementCount = (pizza) => {
        if (counts[pizza.id] < pizza.stock) {
            setCounts((prevCounts) => ({
                ...prevCounts,
                [pizza.id]: prevCounts[pizza.id] + 1
            }));
        } else {
            alert("Stock épuisé pour cette pizza !");
        }
    };

    // Fonction pour diminuer la quantité d'une pizza
    const decrementCount = (pizza) => {
        if (counts[pizza.id] > 0) {
            setCounts((prevCounts) => ({
                ...prevCounts,
                [pizza.id]: prevCounts[pizza.id] - 1
            }));
        }
    };

    return (
        <>
            <header>
                <div className="opacite">
                    <h1>Bienvenue chez LaulauKubz Pizza</h1>
                    <section className="finance" />
                </div>
            </header>

            <h1 className="carte">Notre Carte</h1>

            <div className="vitrine">
                {data.pizza.map((pizza) => (
                    <div className="card" key={pizza.id}>
                        <h2>{pizza.name}</h2>
                        <img src={pizzaImages[pizza.name]} alt={pizza.name} />
                        <p>Prix: {pizza.price}€</p>
                        <p>Stock disponible : {pizza.stock}</p>
                        <p>Ingrédients:</p>
                        <ul>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <button onClick={() => incrementCount(pizza)}>+</button>
                        <p>Nombre : {counts[pizza.id]}</p>
                        <button onClick={() => decrementCount(pizza)}>-</button>
                        <button><i className="fa-solid fa-trash"></i></button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Pizza;
