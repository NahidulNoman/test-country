import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';

const Countries = () => {
    const [countries , setCountries] = useState([])
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(rest => rest.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h3 className='m-5'>All Countries Length : {countries.length}</h3>
            <div className='all-country container'>
            {
                countries.map(country => <Country 
                    country={country}
                    key={country.cca3}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;