import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './countrey.css';


const Countries_List = () => {

    const  allCountry_url = 'https://restcountries.eu/rest/v2/all';

    const [countries, setcountries] = useState([]);
    //const [currentPage, setcurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(0)
    const fecthAllCountries_Data = async () => {
        const fetchResponse = await fetch(allCountry_url);
        const counriesJson = await fetchResponse.json();
        setcountries(counriesJson);
        countries.slice(0,5)
        console.log(countries)
    }
    useEffect(() => {
        fecthAllCountries_Data()
    }, [])
    const userPerPage=1;
    const pagesVisited=postsPerPage * userPerPage;
    //countries.slice(pagesVisited, pagesVisited+userPerPage).map
    function diplayFun(){
        return(
            
        countries.map ((country) => {
            const { numericCode, name, region } = country
            return (
                <>
                    <article key={numericCode}>
                        <div className="all-countries">
                            <table className="content-table">
                               
                                <tr>
                                    <td><h2 className="country-name">{name}</h2></td>
                                   
                                    <td id="td-colomn"><h2>{region}</h2></td>
                                  
                                    <td>  <Link to={`/countries/${name}`}>View Details</Link></td>
                                  
                                </tr>
                            </table>
                        </div>
                    </article>
                </>
            )
        })
        )
    }
    const pageCount=Math.ceil( countries.slice(pagesVisited, pagesVisited+userPerPage).length / userPerPage);
    // const changePage=({selected})=>{
    //     setpostsPerPage(selected)
    // }
    return (
        <>
        <div className="table-div">
            <table><th>
                <td><h2>Country Name</h2></td>
                <td><h2>Region</h2></td>
                <td><h2>Details</h2></td>
            </th></table>
            {
           diplayFun()
        
            }
            {/* <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttns"}
            nextLinkClassName={"nextBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            
            /> */}
            </div>
        </>
        )
}
export default Countries_List;