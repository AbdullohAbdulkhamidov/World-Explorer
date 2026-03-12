import { Link } from 'react-router-dom'

const Favourites = ({ favourite, removeFromFavourites }) => {

    return (

        <div className="container">
            <h1 className="title">Your Favourite Countries</h1>

            <ul className="countries-box">

                {favourite.map(c => (

                    <li className="card" key={c?.name?.common}>

                        <img src={c?.flags?.png} alt={c?.name?.common} />
                        <h2 className="card-title"> {c?.name?.official} </h2>

                        <p>📍 {c?.capital?.[0] || "Unknown"}</p>
                        <Link to={`/name/${c?.name?.common}`}><button>View More</button></Link>

                        <button className="remove-btn" onClick={() => removeFromFavourites(c)} >Remove </button>
                    </li>

                ))}

            </ul>

            <center>
                {favourite.length === 0 && (
                    <>
                        <p>No Favourite Country(s) found</p>
                        <Link to="/countries"><button>Go to Countries</button></Link>
                    </>
                )}
            </center>

        </div>
    )
}

export default Favourites