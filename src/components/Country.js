import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Country = () => {

    const [country, setCountry] = useState({});

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/alpha/pe")
        .then((res) => {
            setCountry(res.data[0]);
        });
    }, []);

    console.log(country);

    return (
        <div>
            <h1>{country.name?.common}</h1>
            <img 
                src={country.flags?.svg} alt="bandera"
                style={{width: "400px"}}
             />
             <div>
                <h2>Demography</h2>
                <p><b>population: </b> {country.population}</p>
                <p><b>area: </b>{country.area}</p>
             </div>
             <div>
                <h2>Location</h2>
                <p><b>continent: </b>{country.continents?.[0]}</p>
                <p><b>region: </b>{country.region}</p>
                <p><b>sub region: </b>{country.subregion}</p>
             </div>
             <div>
                <h2>Capital</h2>
                <p><b>Capital: </b>{country.capital?.[0]}</p>
            </div>
             

            
        </div>
    );
};

export default Country;