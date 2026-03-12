import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'

const CountryDetails = ({ addToFavourites, favourite }) => {
    const { name } = useParams()
    const [country, setCountry] = useState(null)

    useEffect(() => {
        getCountry()
    }, [name])

    // Get country
    async function getCountry() {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            setCountry(response.data[0])
        }
        catch (error) {
            console.log(error)
        }
    }

    // Handle adding country
    const [statusText, setStatusText] = useState("")

    function handleAdd() {
        const exists = favourite.find(item => item?.name?.common === country?.name?.common)

        if (exists) {
            setStatusText("⚠️ Already in favourites")
        } 
        else {
            addToFavourites(country)
            setStatusText("✅ Added successfully")
        }

        setTimeout(() => {
            setStatusText("")
        }, 3000)
    }

    // Until loading
    if (!country) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="container country-wrapper">
                <div className="country-card">

                    <div className="flag-section">
                        <img src={country?.flags?.png} alt="Flag" className="flag" />
                        <h1 className="country-title">{country?.name?.official}</h1>
                    </div>

                    <div className="info-grid">

                        <div className="info-box">
                            <h3>Capital</h3>
                            <p>{country.capital?.[0] || "Unknown"}</p>
                        </div>

                        <div className="info-box">
                            <h3>Region</h3>
                            <p>{country.region}</p>
                        </div>

                        <div className="info-box">
                            <h3>Subregion</h3>
                            <p>{country.subregion}</p>
                        </div>

                        <div className="info-box">
                            <h3>Population</h3>
                            <p>{country.population.toLocaleString()}</p>
                        </div>

                        <div className="info-box">
                            <h3>Languages</h3>
                            <p>{Object.values(country?.languages || {}).join(", ")}</p>
                        </div>

                        <div className="info-box">
                            <h3>Currency</h3>
                            <p>{Object.values(country?.currencies || {})[0]?.name}</p>
                        </div>

                    </div>

                    <button onClick={handleAdd}>Add To Favourites</button>
                </div>
            </div>

            <center>{statusText}</center>
        </>
    )
}

export default CountryDetails