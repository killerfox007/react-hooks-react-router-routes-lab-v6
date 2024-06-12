import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";


function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
   


    async function getData(){
      const resp = await fetch("http://localhost:4000/movies")
      const fetchData = await resp.json()
      setData(fetchData)
      
      
    }
    getData()

  },[])

const moviecards = data.map(movie => <MovieCard title={movie.title} id={movie.id} key={movie.id}/>)

  return (
    <>
      <header>
      <NavBar />
       <h1>Home Page</h1>
      </header>
      <main>
        {moviecards}
      </main>
    </>
  )
}

export default Home;
