import MovieList from '../components/MovieList';
import { GetStaticPropsContext } from 'next'

interface Results {
  adutlt: boolean,
  genre_ids: [],
  id: number,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path:string, // Stack overflow:- image?: String
  release_date: Date,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

interface PageResults {
  results: Results[]
}

export default function Home({ results }: PageResults, ) {
  //console.log('assfsdaf', articles)
  
  // console.log(results)
  
     return (
    <div>

          <MovieList results={results} />
        
    </div>
  )
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // const testvar = context.params
 
  const res = await fetch (`https://api.themoviedb.org/3/discover/movie?with_genres=Comedy&with_cast=23659&sort_by=vote_average.desc&api_key=8af03f276cc7c85ac2ecce75b2cc2d57&language=eng`)
  const articles = await res.json()
  const results = articles.results
  console.log(results)
  return {
    props: {
      results,
      // testvar
    }
  }
}

