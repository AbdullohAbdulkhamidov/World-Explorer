import { Link } from 'react-router-dom'

const NotFound = () => {

    return (
        <>
            <div className="container">
                <h2 className='title' style={{margin: '2rem 0.5rem'}}>
                    Oops, page not found
                </h2>

                <Link to='/'><button>Go to Homepage</button></Link>
            </div>
        </>
    )
}

export default NotFound