import { useState } from "react"
import SearchBar from "../components/SearchBar"
import CountryCard from "../components/CountryCard"

const Countries = ({ countries }) => {

    const [search, setSearch] = useState("")
    const [region, setRegion] = useState("All")

    const filteredByRegion = region === "All" ? countries : countries.filter(c => c.region === region)
    const filtered = filteredByRegion.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="container">
            <h1 className="title">All Countries</h1>

            {/* <div className="filterbox">
                <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />

                <select value={region} onChange={e => setRegion(e.target.value)} >
                    <option value="All">All</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div> */}

            <SearchBar search={search} region={region} setSearch={setSearch} setRegion={setRegion} />

            <ul className="countries-box">
                {
                    filtered.map(c => <CountryCard country={c} />)
                }
            </ul>
        </div>
    )
}

export default Countries