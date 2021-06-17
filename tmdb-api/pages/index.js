import Head from 'next/head'


export default function Home({articles}) {
  //console.log('assfsdaf', articles)
  const results = articles.results;
  console.log(results)
  return (
    <div>
        <h1>Welcom to the Next</h1> 
        <ul>
        {
          results.map((article) =>(       
                <li>{article.original_title}</li>
          ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch (`https://api.themoviedb.org/3/discover/movie?with_genres=Comedy&with_cast=23659&sort_by=revenue.desc&api_key=8af03f276cc7c85ac2ecce75b2cc2d57&language=eng`)
  const articles = await res.json()

  return {
    props: {
      articles
      
    }
  }
}