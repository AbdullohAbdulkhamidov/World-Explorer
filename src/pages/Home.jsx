// import { Link } from 'react-router-dom'
import Hero from "../components/hero/Hero"
import Stats from "../components/stats/Stats"
import Regions from "../components/regions/Regions"

const Home = ({ countries }) => {

    return (
        <>
            <div className="container">

                <Hero />
                <Stats countries={countries} />
                <Regions countries={countries} />


                <section className="quick-links">
                    <h2>Start Exploring</h2>

                    <a href="/countries">Browse All Countries</a>
                    <a href="/favourites">View Favourite Countries</a>
                </section>

            </div>
        </>
    )
}

export default Home