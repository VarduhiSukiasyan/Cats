import React, { useEffect, useState } from "react"
import "./Cats.css";


export default function Cats(){

     const [cats, setCats] = useState([]);
     let [page, setPage] = useState(1);

        useEffect(() => {
            fetch(`https://api.thecatapi.com/v1/images/search?limit=10&${page}=1&category_ids=1`)
            .then(response => response.json())
            .then(cats =>{
                setCats(cats);
                console.log(cats);
        } )}, [page]) 

        const loadMoreCats = ()=>{
        
        }

        return(
            <div className="row">
                {cats.map(cat => {
                    return(
                        <div key = {cat.id} className = "column">
                            <img className="img" src= {cat.url} alt = {cat.id}></img>
                        </div>
                    )
                })}
                <a href="#" onClick={loadMoreCats()}> more</a>
            </div>
        )
       
}
