import './FavouriteCard.css'
import { Link } from "react-router-dom"

const FavouriteCard = ({ country, removeFromFavourites }) => {

    return (
        <>
            <li className="card" key={country?.name?.common}>

                <img src={country?.flags?.png} alt={country?.name?.common} />
                <h2 className="card-title"> {country?.name?.official} </h2>

                <p>📍 {country?.capital?.[0] || "Unknown"}</p>
                <Link to={`/name/${country?.name?.common}`}><button>View More</button></Link>

                <button className="remove-btn" onClick={() => removeFromFavourites(country)} >Remove </button>
            </li>
        </>
    )
}

export default FavouriteCard