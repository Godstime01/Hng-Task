import { Card } from "@/components/ui/card"
import { CalendarIcon, ChevronLeftIcon, VideoIcon, DesktopIcon, ExitIcon, HomeIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
    console.log(data)

    return (
        <>
            <div className="grid grid-cols-[50px_1fr] md:grid-cols-[200px_1fr] h-screen">
                {/* side bar */}
                <aside className="flex flex-col justify-between rounded-r-lg py-9">

                    <Link className="text-xl flex gap-3 items-center w-full p-4 hover:bg-pink-300/50 hover:text-pink-700" href="/">
                        <HomeIcon className="" />
                        <span className="hidden md:inline-block">MovieBox</span>
                    </Link>

                    <div className="flex flex-col gap-y-4">
                        <Link className="text-xl flex gap-3 items-center w-full p-4 hover:bg-pink-300/50 hover:text-pink-700" href="/">
                            <HomeIcon className="" />
                            <span className="hidden md:inline-block">Home</span>
                        </Link>

                        <Link className="text-xl flex gap-3 items-center w-full p-4 hover:bg-pink-300/50 hover:text-pink-700" href="/">
                            <VideoIcon className="" />
                            <span className="hidden md:inline-block">Movies</span>
                        </Link>

                        <Link className="text-xl flex gap-3 items-center w-full p-4 hover:bg-pink-300/50 hover:text-pink-700" href="/">
                            <DesktopIcon />
                            <span className="hidden md:inline-block">Tv Series</span>
                        </Link>

                        <Link className="text-xl flex gap-3 items-center w-full p-4 hover:bg-pink-300/50 hover:text-pink-700" href="/">
                            <CalendarIcon />
                            <span className="hidden md:inline-block">Upcoming</span>
                        </Link>
                    </div>

                    <Link className="text-xl flex gap-3 items-center w-full p-4 hover:bg-pink-300/50 hover:text-pink-700" href="/">
                            <ExitIcon className="" />
                            <span className="hidden md:inline-block">Log out</span>
                    </Link>
                </aside>

                {/* main content */}
                <div className="p-4">
                    <Card className="h-[50vh] overflow-hidden">
                        <Image src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} width={500} height={500} className="h-full w-full" />
                        {/* {data.video} */}
                    </Card>

                    <div className="mt-3">
                        <div className="flex gap-3 items-center">
                            <h3 className="text-md">{data.title}</h3>
                            <span className="text-md" data-testid="movie-runtime">{data.runtime}</span>
                            <span className="text-md" data-testid="movie-realease-date">{data.release_date}</span>

                            {
                                data.genres.map(genre => {
                                    return <span className="border text-pink-700 rounded-full px-2 py-0" key={genre.id}>{genre.name}</span>
                                })
                            }

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 mt-2 md:mt-4">

                            <div>
                            <p className="text-sm" data-testid="movie-overview">{data.overview}</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Button className="bg-pink-700 text-white">See showtimes</Button>
                                <Button variant="outline" className="bg-pink-100 border-pink-700 ">See showtimes</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default movieDetail