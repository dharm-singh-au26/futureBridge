import React ,{useState,useEffect} from 'react'
import MovieList from './components/MovieList';
import MovieHeading from './components/MovieHeading';
import SearchBox from './components/SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
  const[movies,setMovies] = useState([])

  const[searchValue,setSearchValue] = useState('')
const getMovieRequest = async () => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`

  const response = await fetch(url);

  const responseJson = await response.json()

  // console.log(responseJson)
  if(responseJson.Search){

    setMovies(responseJson.Search)
  }
}
useEffect (()=>{
  getMovieRequest(searchValue)
},[searchValue]);
  return <div className='container-fluid movie-app'> 

<div className='row d-flex align-items-center mt-4 mb-4'>
  <MovieHeading heading = "Movies"/>
  <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
</div>
  <div className='row'>

    <MovieList movies = {movies}/>
  </div>

    
     </div>

}

export default App;
