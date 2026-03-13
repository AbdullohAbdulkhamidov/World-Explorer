// import { Link } from 'react-router-dom'
import Hero from "../components/hero/Hero"
import Stats from "../components/stats/Stats"

const Home = ({ countries }) => {

    return (
        <>
            <div className="container">

                <Hero />
                <Stats countries={countries} />





                {/* <section class="regions">
                    <h2>Countries by Region</h2>

                    <ul>
                        <li>Africa — 54 Countries</li>
                        <li>Europe — 44 Countries</li>
                        <li>Asia — 49 Countries</li>
                        <li>Americas — 35 Countries</li>
                        <li>Oceania — 14 Countries</li>
                    </ul>
                </section> */}

                {/* <section class="featured-country">
                    <h2>Featured Country</h2>

                    <h3>Japan</h3>
                    <p>Capital: Tokyo</p>
                    <p>Population: 125,000,000</p>
                    <p>Region: Asia</p>
                </section> */}

                {/* <section class="quick-links">
                    <h2>Start Exploring</h2>

                    <a href="/countries">Browse All Countries</a>
                    <a href="/favourites">View Favourite Countries</a>
                </section> */}

            </div>
        </>
    )
}

export default Home