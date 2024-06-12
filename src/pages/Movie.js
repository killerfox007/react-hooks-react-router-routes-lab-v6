import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  console.log(useParams)
  const prams = useParams()

  const movidId = prams.id
  const [data, setData] = useState({genres: []})
  useEffect(() => {
    async function getData(){
      const resp = await fetch("http://localhost:4000/movies/"+ movidId)
      const fetchData = await resp.json()
      console.log(resp)
      setData(fetchData)
    }
    getData()

  },[movidId])

 
  const name = data.genres.map(genre =>  <span key={genre}>{genre}</span>)


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
    <h1>{data.title}</h1>
    <p>{data.time}</p>
    <span>{name}</span>
    </main>
    </>
  );
};

export default Movie;
