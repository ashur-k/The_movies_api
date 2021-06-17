import { useState } from 'react'
import MovieItem from './MovieItem'
import articleStyles from '../styles/MovieList.module.css'

const MovieList = ({results}) => {
    console.log(results)
    const [searchTerm, setSearchTerm] = useState('')
    const newResults = results
    return (
        <div className={articleStyles.grid}>
        <input type="text" placeholder="search movies" onChange={event => 
            {setSearchTerm(event.target.value) }} 
        />
            
            {
                newResults.filter((result)=> {
                    if(searchTerm == ""){
                        return result
                    }else if (result.original_title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return result
                    }
                }).map((result, key) =>(       
                <MovieItem key={key} result={result}/>
            ))}
         
        </div>
    )
}

export default MovieList
