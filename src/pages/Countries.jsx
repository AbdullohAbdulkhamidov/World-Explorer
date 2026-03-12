import { useState } from "react"
import { Link } from "react-router-dom"

const Countries = ({ countries }) => {

    const [search, setSearch] = useState("")
    const [region, setRegion] = useState("All")

    const filteredByRegion = region === "All" ? countries : countries.filter(c => c.region === region)
    const filtered = filteredByRegion.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()) )

    return (
        <div className="container">
            <h1 className="title">All Countries</h1>

            <div className="filterbox">
                <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />

                <select value={region} onChange={e => setRegion(e.target.value)} >
                    <option value="All">All</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            <ul className="countries-box">

                {filtered.map(c => (
                    <li className="card" key={c.name.common}>
                        <img src={c.flags.png} alt={c.name.common} />

                        <h2 className="card-title">{c.name.official}</h2>
                        <p>📍 {c.capital?.[0] || "Unknown"}</p>

                        <Link to={`/name/${c.name.common}`}><button>View More</button></Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Countries