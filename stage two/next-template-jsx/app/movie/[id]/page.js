import { Card } from "@/components/ui/card"
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"


async function getData(slug) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${slug}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI2YWFkZTdiNmFiOGUzNDU5ZjNmMTNlODQ4MzZkMyIsInN1YiI6IjY1MDA1MWNiMWJmMjY2MDExYzc4MWVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_aKg8DWhMlPtTOfGGvKUgBHiE5U4dC9dYBxWpzE554'
    }
  })
  
//   console.log(res)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const movieDetail = async ({ params }) => {
    const data = await getData(params.id)

    return (
        <>
        
        <Link className="text-xl flex gap-3 items-center m-4 bg-black text-white w-[200px] rounded-xl p-4" href="/">
            <ChevronLeftIcon /> 
            Go to home 
        </Link>
    
        <div className="container grid grid-cols-1 md:grid-cols-[150px_1fr]">
            {/* side bar */}
            <aside className="hidden md:flex ">
                side bar
            </aside>

            {/* main content */}
            <div className="">
                <Card >
                    <Image src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} width={500} height={500} className="w-full" />
                    {/* {data.video} */}
                </Card>

                <div className="mt-3">
                    <div className="flex gap-3 items-center">
                        <h3 className="text-3xl">{data.title}</h3>
                        <span className="text-xl" data-testid ="movie-runtime">{data.runtime}</span>
                        <span className="text-xl" data-testid ="movie-realease-date">{data.release_date}</span>

                        {
                            data.genres.map(genre => {
                                return <span className="bg-pink-100 text-[deeppink] rounded-md p-2" key={genre.id}>{genre.name}</span>
                            })
                        }
                        
                    </div>
                    <p className="text-xl" data-testid="movie-overview">{ data.overview }</p>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default movieDetail