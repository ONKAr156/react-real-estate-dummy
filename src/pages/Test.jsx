import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Test = () => {
const [data, setData] = useState([])
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result)=>{
        setData(result.data)
        console.log(result.data);
    } )
    
    })
    return <>
    {
        data && data.map(item=><ul key={item.id}>
           <li>{item.id}</li>
           <h2>{item.title}</h2>
           <li>{item.userId}</li>
        </ul>)
    }
    </>
}

export default Test