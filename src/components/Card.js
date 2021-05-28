import React from 'react';

import '../styles/components/_card.scss'

const Card = ({ country }) => {
    // const country = props.country est identique à 
    //const { country } = props;

    //séparateur des milliers
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      };

    return (
        <div>
            <li className='card'>
                <img src={country.flag} alt='flag'/>
                <div className='data-container'>
                    <ul>
                        <li>Nom: {country.name}</li>
                        <li>Capital: {country.capital}</li>
                        <li>Pop: {numberFormat(country.population)}</li>
                    </ul>
                </div>
            </li>
        </div>
    );
};

export default Card;