import Head from 'next/head'


export default function Home({articles}) {
  console.log('assfsdaf', articles)
  return (
    <div>
        <h1>Welcom to the Next</h1>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch (`https://api.themoviedb.org/3/movie/76341?api_key=8af03f276cc7c85ac2ecce75b2cc2d57&language=eng`)
  const articles = await res.json()

  return {
    props: {
      articles
      
    }
  }
}