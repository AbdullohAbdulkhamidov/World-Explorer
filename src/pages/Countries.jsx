import { useState } from "react"
import SearchBar from "../components/search-bar/SearchBar"
import CountryCard from "../components/country-card/CountryCard"

const Countries = ({ countries }) => {

    const [search, setSearch] = useState("")
    const [region, setRegion] = useState("All")

    const filteredByRegion = region === "All" ? countries : countries.filter(c => c.region === region)
    const filtered = filteredByRegion.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="container">
            <h1 className="title">All Countries</h1>

            <SearchBar search={search} region={region} setSearch={setSearch} setRegion={setRegion} />

            <ul className="countries-box">
                {
                    filtered.length > 0 ? filtered.map(c => <CountryCard  key={c.name.common} country={c} />) : <p>Country not found</p>
                }
            </ul>
        </div>
    )
}

export default Countries