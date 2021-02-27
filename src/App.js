import './App.css';
import React, { useState, useEffect } from 'react';
import Country from './components/Country/Country';
import Added from './components/Added/Added';

function App() {
  const [countries, setCountries] = useState([]);
  const [numberOfCountries, setNumberOfCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(resp => resp.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, []);
  const handleAddCountry = (name) => {
    const newCountries = [...numberOfCountries, name];
    setNumberOfCountries(newCountries);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Country Loaded: {countries.length}</h1>
      <h2>Countries added: {numberOfCountries.length}</h2>
      <Added newCountries={numberOfCountries}></Added>
      {
        countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
      }
    </div>
  );
}

export default App;
