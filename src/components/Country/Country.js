import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';


const Country = (props) => {
    const { flag, alpha3Code, name } = props.country;

    return (
        <div className='countryStyle'>
            <img src={flag} alt="" />
            <h2>Name : {name}</h2>
            <p>Alpha3Code: <Link to={`/country/${alpha3Code}`}>Show details of : {alpha3Code} </Link>
            </p>

        </div>
    );
};

export default Country;