import React from 'react';

const Country = (props) => {
    const { name, population, area, capital, flag, region } = props.country;
    const flagStyle = { height: '50px' };
    const countryStyle = { border: '1px solid red', margin: '10px', padding: '10px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' };
    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Continent: {region}</small></p>
            <button onClick={() => props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;