const SearchBar = ({ search, region, setSearch, setRegion }) => {
    return (
        <>
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
        </>
    )
}

export default SearchBar