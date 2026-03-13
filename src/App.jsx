import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Countries from './pages/Countries'
import CountryDetails from './pages/CountryDetails'
import Favourites from './pages/Favourites'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import NotFound from './components/not-found/NotFound'

function App() {

  // Countries
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries()
  }, [])

  async function getCountries() {
    try {
      const response = await axios.get(
        'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital'
      )

      setCountries(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  // Favourites
  const [favourite, setFavourite] = useState([])

  const addToFavourites = (country) => {

    setFavourite(prevItems => {

      const exists = prevItems.find(
        item => item?.name?.common === country?.name?.common
      )

      if (exists) {
        return prevItems
      }

      return [...prevItems, country]
    })
  }

  const removeFromFavourites = (country) => {
    setFavourite(prevItems =>
      prevItems.filter(
        item => item?.name?.common !== country?.name?.common
      )
    )
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home countries={countries} />} />
        <Route path='/countries' element={<Countries countries={countries} />} />
        <Route path="/name/:name" element={<CountryDetails addToFavourites={addToFavourites} favourite={favourite} />} />
        <Route path='/favourites' element={<Favourites favourite={favourite} removeFromFavourites={removeFromFavourites} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App