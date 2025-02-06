import { useState } from 'react';

function Adresse() {
    const [nom, setNom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [information, setInformation] = useState('');

    const commande = (isCommande) => {
        if (isCommande === true) {
            alert("Bon appétit !! Au plaisir de vous revoir");
        } else {
            alert("PAS D'ADRESSE = PAS DE COMMANDE!!!!");
        }
    }

    const handleOrderClick = () => {
        if (adresse) {
          commande(true);
        } else {
          commande(false);
        }
      };

    return (
        <form>
          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init="" className="form-outline">
                <input 
                  type="text" 
                  id="form6Example1" 
                  className="form-control"
                  placeholder="Nom+Prenom" 
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
                
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init="" className="form-outline">
                <input 
                  type="text" 
                  id="form6Example2" 
                  className="form-control" 
                  placeholder="Adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
                
              </div>
            </div>
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input 
              type="email" 
              id="form6Example5" 
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input 
              type="number" 
              id="form6Example6" 
              className="form-control"
              placeholder="Téléphone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
            
          </div>
          <div data-mdb-input-init="" className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form6Example7"
              placeholder="Informations supplémentaires"
              rows={4}
              value={information}
              onChange={(e) => setInformation(e.target.value)}
            />
           
          </div>
          
          <button
            data-mdb-ripple-init=""
            type="button"
            className="btn btn-primary btn-block mb-4"
            onClick={handleOrderClick}
          >
            Commander
          </button>
        </form>
      )
 }
 export { Adresse }
