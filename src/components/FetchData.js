import React , {useState ,useEffect } from "react";
import useSWR from 'swr'
import axios from 'axios'
import { Link } from "react-router-dom";

function FetchData() {
    const fetcher = url => axios.get(url).then(res =>res.data).catch(error => error)
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)
    if (error) return <div>{error}</div>
    if (!data) return <h1>loading.......................................................</h1>

    // const [data , setData] = useState()
    // const [loading , setLoading] = useState(false)
    // useEffect(() => {
    //     setLoading(true)
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => {
    //         setLoading(false)
    //         setData(json)
    //     })
    // }, []);
  
    // render data
  return (
    <div>
 <Link to="/"> to test </Link>
  <p> the FetchData component </p> 
  {/* { loading && <h1> loading...</h1>} */}
  { data && data.map((item) =>(<p key={item.id}> {item.title }</p>)) }
    </div>
  );
}

export default FetchData;
