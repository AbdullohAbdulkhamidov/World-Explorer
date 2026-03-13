import './Stats.css'

const Stats = ({ countries }) => {
    // Count world countries
    const counter = countries.length

    // Calculate world population
    let population = 0
    countries.map(c => population += c.population)

    // Find country with most population
    const mostPopulation = countries.length > 0 ?
        countries.reduce((acc, country) => Number(acc.population) > Number(country.population) ? acc : country)
        :
        null

    return (
        <>
            <div className="container">
                <section id="world-stats">

                    <h2 className="title">World Population</h2>

                    <div class="stats-grid">

                        <div class="stat-card">
                            <h3>{counter}</h3>
                            <p>Total Countries</p>
                        </div>

                        <div class="stat-card">
                            <h3>{(population / 1000000000).toFixed(2)} billion</h3>
                            <p>World Population</p>
                        </div>

                        <div class="stat-card">
                            <h3>{mostPopulation?.name?.official || ''}</h3>
                            <p>Most Population</p>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Stats