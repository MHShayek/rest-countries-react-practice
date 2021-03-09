import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';


const Country = (props) => {
    const { flag, population , name } = props.country;

    return (
        <div className='countryStyle'>
            <img src={flag} alt="" />
            <h2>Name : {name}</h2>
            <p>Country : <Link to={`/country/${name}`}>Show details of : {name} </Link>
            </p>

        </div>
    );
};

export default Country;