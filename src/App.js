import React from 'react'
import './App.css'

const YOUR_API_KEY = "AIzaSyDjOGUvecqGKBN4DFXZtL9yeoAUrGL8wjQ"
const api = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=tech&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry&key=" + YOUR_API_KEY
function App () {
  return <h1>{api}</h1>
}

export default App
