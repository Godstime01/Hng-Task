'use client'

import { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ZoomOutIcon } from "@radix-ui/react-icons"
import { Card } from './ui/card'
import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image'
import Link from 'next/link'




const Search = () => {

  const [search, setSearch] = useState("")
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  // console.log(query)
  console.log(result.length)
  console.log(search.length)

  useEffect(() => {

    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        setLoading(true);

        // Replace 'your-api-endpoint' with the actual API endpoint
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI2YWFkZTdiNmFiOGUzNDU5ZjNmMTNlODQ4MzZkMyIsInN1YiI6IjY1MDA1MWNiMWJmMjY2MDExYzc4MWVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_aKg8DWhMlPtTOfGGvKUgBHiE5U4dC9dYBxWpzE554'
          }
        });
        const jsonData = await response.json();

        setResult(jsonData.results.slice(10));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (search) {
      fetchData();
    }

  }, [search])

  return (
    <div className='relative text-white'>
      <div className="flex rounded-md overflow-hidden bg-transparent">
        <Input className="text-white" placeholder="search.." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {
        loading ? <Skeleton className="w-full p-4 absolute z-20 top-10" >loading...</Skeleton> :

          search.length ? <Card className="p-2 absolute z-20 top-10 w-full rounded-none h-[300px] overflow-scroll grid gap-2">
            {
              result.map(q => {
                return <Link key={q.id} href={`movie/${q.id}`} className=" w-full" >
                  <Card className="flex gap-2 items-center p-2 rounded-sm">
                    <Image src={`https://image.tmdb.org/t/p/w500${q.poster_path}`} width={20} height={20} alt='' />
                    <h3 className='flex-grow text-xs'>{q.title}</h3>
                    <span className='text-xs'>({q.release_date.slice(0, 4)})</span>
                  </Card>
                </Link>
              })
            }
          </Card> : ""

      }
    </div>
  )
}

export default Search