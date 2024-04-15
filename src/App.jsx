import "./App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import {locationData} from "./components/Data";

export default function App() {

  const elements = locationData.map((item, index) => (

      <section key={index} className="card">
        <div className="container">
          
          <img className="card__image" src= {item.image} />
          <div>

              <div className="card__top-location-details">
                <p className="card__location-country">
                  <span><FontAwesomeIcon icon={faLocationDot} color="red"/> {item.country}</span> <a href="#">view on Google Maps</a>
                </p>
                <h1 className="card__location-exact">{item.location}</h1>
              </div>

              <div className="card__bottom-location-details">
                <p className="card__location-date">{item.date}</p>
                <p className="card__location-title">
                  {item.detalis}
                </p>
              </div>


          </div>
        </div>

      </section>

   ))

   
  return (
    <main>
      <header className="top">
        <div className="container">
          <h2 className="top__heading">travel journal</h2>
        </div>
      </header>

      <div className="d-flex">
        {elements}
      </div>
    </main>
  );
}
