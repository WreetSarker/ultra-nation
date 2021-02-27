import React from 'react';

const Added = (props) => {
    const country = props.newCountries;
    const totalPopulation = country.reduce((total, current) => total + current.population, 0);
    return (
        <div>
            <h2>Countries added: {country.length} </h2>
            <p>Total population of added countries: {totalPopulation}</p>
        </div>
    );
};

export default Added;