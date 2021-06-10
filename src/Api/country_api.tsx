import React ,{useState,useEffect}from 'react';
import axios from 'axios';


  
   async function ListCountries_Api(){

    const allCountry_url = 'https://restcountries.eu/rest/v2/all';

    const [countries, setcountries] = useState([]);
    const [currentPage, setcurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(10)

    const fecthAllCountries_Data = async () => {
        const fetchResponse = await fetch(allCountry_url);
        const counriesJson = await fetchResponse.json();
        setcountries(counriesJson);
        console.log(countries)
    }
    useEffect(() => {
        fecthAllCountries_Data()
    }, [])
    return(countries)
}
export default ListCountries_Api;