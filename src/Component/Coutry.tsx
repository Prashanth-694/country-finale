import { stringify } from 'querystring';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import './countrey.css';

function Coutry() {
    const [country, setcountry] = useState([]);
    const name = useParams();
    
    const fetchCuntry_Data = async () => {
        let kk = stringify(name).slice(5);
        console.log(kk);
        const country_Data = await fetch(`https://restcountries.eu/rest/v2/name/${kk}?fullText=true`);
        const country_Json_Data = await country_Data.json();
        setcountry(country_Json_Data);
        console.log(country);





    }
    useEffect(() => {
        fetchCuntry_Data();
    }, [])
    return (
        <>
      
        <section className="country">
        <Link to="/" className="btn btn-light">
            <i className="fas fs-arrow-left">Back Home </i>
        </Link>
            {country.map((fullDetails) => {
                const { name, numericCode, nativeName, capital, population, callingCodes, flag} = fullDetails
                return (
                    <>
                        <article key={numericCode}>
                            <div className="flag">
                                <img src={flag} alt={name}></img>
                            </div>
                            <div className="country-Details">
                                <h2>{name}</h2>
                             <h5>Native Name : {nativeName}</h5>
                             <h5>Capital City : {capital}</h5>
                             <h5>Population : {population}</h5>
                             <h5>Calling Codes : {callingCodes}</h5>
                             
                            </div>

                        </article>
                    </>
                )
            })}
            </section>
        </>
    )
}

export default Coutry
