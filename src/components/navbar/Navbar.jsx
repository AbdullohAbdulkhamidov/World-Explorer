import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <ul className='nav-ul'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/countries'>Countries</Link></li>
                    <li><Link to='/favourites'>Favourites</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar