import React, { useEffect, useState } from "react"
import "./Categories.css";


export default function Categories(){

     const [categories, setCategories] = useState([]);
   

     useEffect(()=> {
        fetch(`https://api.thecatapi.com/v1/categories`)
        .then(response => response.json())
        .then(categories => setCategories(categories));
     }, [])
         

        return(
            <div>
                {categories.map(category => {
                    return(
                        <ul key = {category.id}>
                            <li >{category.name}</li>
                        </ul>
                    )
                })}
            </div>
        )
       
}

