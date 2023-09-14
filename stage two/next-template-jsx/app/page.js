

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { HeartIcon } from "@radix-ui/react-icons"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Search from "@/components/search"


async function getData() {
  const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI2YWFkZTdiNmFiOGUzNDU5ZjNmMTNlODQ4MzZkMyIsInN1YiI6IjY1MDA1MWNiMWJmMjY2MDExYzc4MWVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_aKg8DWhMlPtTOfGGvKUgBHiE5U4dC9dYBxWpzE554'
    }
  })

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}



export default async function Home() {

  const data = await getData();
  const results = data.results

  // const backdrop_path = `bg-[url(https://image.tmdb.org/t/p/w500${results[0].backdrop_path})]`

  return (
    <main className="min-h-screen">

      {/* navbar */}
      <nav className="fixed top-0 w-full py-3">
        <div className="container flex justify-between">
          <Link href="/" className="flex gap-2 items-center flex-grow text-white">
            {/* <Image src="/tv.png" alt="Logo" width={40} height={40} />  */}
            MovieBox
          </Link>

          <Search />
        </div>
      </nav>

      {/* hero section */}
      <section className={`min-h-[90vh] flex items-center gap-2 pt-16 bg-no-repeat bg-cover bg-blend-multiply bg-purple-500 text-white`
      }
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${results[0].backdrop_path})` }}
      >
        <div className="container py-5">
          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="text-6xl">{results[0].title}</h1>
            <div className="flex gap-3 items-center">
              <span className="bg-yellow-300 text-black rounded-md p-2">IMDb</span>
              <p>{results[0].vote_average} / 100</p>

            </div>
            <p>
              {results[0].overview}
            </p>

            <Button className="bg-red-600 text-white flex-grow-0 w-1/5">Watch trailer</Button>
          </div>
        </div>

      </section>

      <section className="container pt-16 grid md:grid-cols-4 gap-4">
        {
          results.map(data => {
            return (
              <Link data-testid="movie-card" key={data.id} href={`movie/${data.id}`}>
                <Card className="p-0 relative">
                  <CardHeader className="p-0 overflow-hidden">
                    <Image src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} className="w-full" width={500} height={500} data-testid="movie-poster" alt="" />
                  </CardHeader>
                  <CardContent className="p-3">
                    <p>Release date: <span data-testid="movie-release-date">{data.release_date}</span> </p>
                    <h3 className="text-xl" data-testid='movie-title' >{data.original_title}</h3>
                  </CardContent>

                  <Button className="absolute top-0 right-0 m-3 bg-transparent">
                    <HeartIcon />
                  </Button>

                </Card>
              </Link>
            )
          })
        }
      </section>
    </main>
  )
}
