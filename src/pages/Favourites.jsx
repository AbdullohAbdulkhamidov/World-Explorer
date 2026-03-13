import { Link } from 'react-router-dom'
import FavouriteCard from '../components/favourite-card/FavouriteCard'

const Favourites = ({ favourite, removeFromFavourites }) => {

    return (

        <div className="container">
            <h1 className="title">Your Favourite Countries</h1>

            <ul className="countries-box">
                {
                    favourite.map(c => <FavouriteCard key={c.name.common} country={c} removeFromFavourites={removeFromFavourites} />)
                }
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