import React from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const { countryCode } = useParams();
    return (
        <div>
            <h3>This is Country Detail Components :{countryCode} </h3>
        </div>
    );
};

export default CountryDetail;