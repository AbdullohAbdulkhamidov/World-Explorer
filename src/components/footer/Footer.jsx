import '../navbar/Navbar.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <>
            <footer className='navbar' style={{margin: '2rem 0 0'}}>
                <div className="container">

                    <h2 className='title'>Countries Explorer</h2>

                    <nav>
                        <ul className='nav-ul'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/countries'>Countries</Link></li>
                            <li><Link to='/favourites'>Favourites</Link></li>
                        </ul>
                    </nav>

                </div>
            </footer>
        </>
    )
}

export default Footer