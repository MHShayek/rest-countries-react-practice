import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    
    const { countryInfo } = useParams();
    const [country,setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryInfo}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    },[])
    return (
        <div>
            <h3>This is Country Detail Components :{countryInfo} </h3>
            <h2>{countryInfo}</h2>
            <p>Population: {}</p>
        </div>
    );
};

export default CountryDetail;