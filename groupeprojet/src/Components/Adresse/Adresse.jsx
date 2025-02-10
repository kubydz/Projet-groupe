import { useState } from "react";
import "./Adresse.css";
import Footer from '../Footer/Footer';

import checkIcon from "../../assets/img/coches.png"; // ✅ Image check
import crossIcon from "../../assets/img/croix.png"; // ❌ Image croix

function Adresse() {
  const [name, setName] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [information, setInformation] = useState("");

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isValid, setIsValid] = useState(null); // null = pas encore vérifié

  // Vérification de l'adresse (doit contenir un numéro + rue)
  const validateAdresse = () => {
    console.log("Adresse actuelle:", adresse); // Debug
    const adresseRegex = /\d+\s+\w+/; // Ex: "12 Rue de Paris"
    return adresseRegex.test(adresse);
};


const handleOrderClick = (e) => {
  e.preventDefault();
  console.log("Bouton cliqué, validation en cours...");
  console.log("Adresse saisie:", adresse); // Debug pour voir la valeur

  // Vérification avec trim() pour supprimer les espaces vides
  if (adresse.trim() === "") {
      setPopupMessage("L'adresse ne peut pas être vide !");
      setIsValid(false);
  } else if (validateAdresse()) {
      setPopupMessage("Bon appétit !! Au plaisir de vous revoir");
      setIsValid(true);
  } else {
      setPopupMessage("PAS D'ADRESSE = PAS DE COMMANDE !!!!");
      setIsValid(false);
  }

  setIsPopupOpen(true);
};



  const [infoMessage, setInfoMessage] = useState("");

const handleInfoChange = (e) => {
  const value = e.target.value;
  setInformation(value);

  if (value.trim() === "") {
    setInfoMessage("Ce champ est optionnel.");
  } else {
    setInfoMessage("");
  }
};


  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <form>
        <div className="row mb-4">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Nom + Prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Adresse (Ex: 12 Rue de Paris)"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </div>
        </div>

        <input
          type="email"
          className="form-control mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          className="form-control mb-4"
          placeholder="Téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />

          <textarea 
            className="form-control mb-4"
            placeholder="Informations supplémentaires (optionnel)"
            rows={4}
            value={information}
            onChange={handleInfoChange}
          />
          {infoMessage && <p style={{ color: "gray", fontSize: "12px" }}>{infoMessage}</p>}



        <button type="submit" className="btn" onClick={handleOrderClick}>
          Commander
        </button>

        <div className={`popup-overlay ${isPopupOpen ? "open" : ""}`}>
          <div className="popup">
            <img
              src={isValid ? checkIcon : crossIcon}
              alt={isValid ? "Validé" : "Erreur"}
              className="validation-icon"
            />
            <h2>Notification</h2>
            <p>{popupMessage}</p>
            <button className="btn2" onClick={closePopup}>OK</button>
          </div>
        </div>

      </form>
      <Footer/>
    </div>
   
  );
}

export default Adresse;
