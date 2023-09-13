import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ZoomOutIcon } from "@radix-ui/react-icons"
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
 } from "@/components/ui/card"


async function getData() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?', {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWI2YWFkZTdiNmFiOGUzNDU5ZjNmMTNlODQ4MzZkMyIsInN1YiI6IjY1MDA1MWNiMWJmMjY2MDExYzc4MWVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R_aKg8DWhMlPtTOfGGvKUgBHiE5U4dC9dYBxWpzE554'
  }
})

console.log(res)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

// //     adult: false,
// backdrop_path: '/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg',
// genre_ids: [Array],
// id: 976573,
// original_language: 'en',
// original_title: 'Elemental',
// overview: 'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',
// popularity: 1105.564,
// poster_path: '/6oH378KUfCEitzJkm07r97L0RsZ.jpg',
// release_date: '2023-06-14',
// title: 'Elemental',
// video: false,
// vote_average: 7.8,
// vote_count: 1866

export default async function Home() {

  // const data = await getData();

  const results = [
    {
      adult: false,
      backdrop_path: '/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg',
      genre_ids: [Array],
      id: 615656,
      original_language: 'en',
      original_title: 'Meg 2: The Trench',
      overview: 'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
      popularity: 2943.17,
      poster_path: '/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
      release_date: '2023-08-02',
      title: 'Meg 2: The Trench',
      video: false,
      vote_average: 7,
      vote_count: 1661
    },
    {
      adult: false,
      backdrop_path: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
      genre_ids: [Array],
      id: 346698,
      original_language: 'en',
      original_title: 'Barbie',
      overview: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
      popularity: 3792.387,
      poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      release_date: '2023-07-19',
      title: 'Barbie',
      video: false,
      vote_average: 7.3,
      vote_count: 4208
    },
    {
      adult: false,
      backdrop_path: '/53z2fXEKfnNg2uSOPss2unPBGX1.jpg',
      genre_ids: [Array],
      id: 968051,
      original_language: 'en',
      original_title: 'The Nun II',
      overview: 'In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.',
      popularity: 2050.948,
      poster_path: '/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg',
      release_date: '2023-09-06',
      title: 'The Nun II',
      video: false,
      vote_average: 6.8,
      vote_count: 110
    },
    {
      adult: false,
      backdrop_path: '/9m161GawbY3cWxe6txd1NOHTjd0.jpg',
      genre_ids: [Array],
      id: 335977,
      original_language: 'en',
      original_title: 'Indiana Jones and the Dial of Destiny',
      overview: "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
      popularity: 1348.682,
      poster_path: '/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg',
      release_date: '2023-06-28',
      title: 'Indiana Jones and the Dial of Destiny',
      video: false,
      vote_average: 6.7,
      vote_count: 1544
    },
    {
      adult: false,
      backdrop_path: '/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
      genre_ids: [Array],
      id: 385687,
      original_language: 'en',
      original_title: 'Fast X',
      overview: "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 2054.374,
      poster_path: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      release_date: '2023-05-17',
      title: 'Fast X',
      video: false,
      vote_average: 7.3,
      vote_count: 3643
    },
    {
      adult: false,
      backdrop_path: '/2ii07lSwHarg0gWnJoCYL3Gyd1j.jpg',
      genre_ids: [Array],
      id: 912908,
      original_language: 'en',
      original_title: 'Strays',
      overview: 'When Reggie is abandoned on the mean city streets by his lowlife owner, Doug, Reggie is certain that his beloved owner would never leave him on purpose. But once Reggie falls in with Bug, a fast-talking, foul-mouthed stray who loves his freedom and believes that owners are for suckers, Reggie finally realizes he was in a toxic relationship and begins to see Doug for the heartless sleazeball that he is.',
      popularity: 1027.221,
      poster_path: '/n1hqbSCtyBAxaXEl1Dj3ipXJAJG.jpg',
      release_date: '2023-08-17',
      title: 'Strays',
      video: false,
      vote_average: 7.4,
      vote_count: 214
    },
    {
      adult: false,
      backdrop_path: '/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg',
      genre_ids: [Array],
      id: 976573,
      original_language: 'en',
      original_title: 'Elemental',
      overview: 'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',
      popularity: 1105.564,
      poster_path: '/6oH378KUfCEitzJkm07r97L0RsZ.jpg',
      release_date: '2023-06-14',
      title: 'Elemental',
      video: false,
      vote_average: 7.8,
      vote_count: 1866
    },
    {
      adult: false,
      backdrop_path: '/waBWlJlMpyFb7STkFHfFvJKgwww.jpg',
      genre_ids: [Array],
      id: 678512,
      original_language: 'en',
      original_title: 'Sound of Freedom',
      overview: 'The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.',
      popularity: 906.639,
      poster_path: '/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg',
      release_date: '2023-07-03',
      title: 'Sound of Freedom',
      video: false,
      vote_average: 8,
      vote_count: 439
    },
    {
      adult: false,
      backdrop_path: '/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg',
      genre_ids: [Array],
      id: 614930,
      original_language: 'en',
      original_title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
      overview: "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
      popularity: 887.868,
      poster_path: '/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg',
      release_date: '2023-07-31',
      title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem',
      video: false,
      vote_average: 7.2,
      vote_count: 417
    },
    {
      adult: false,
      backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
      genre_ids: [Array],
      id: 667538,
      original_language: 'en',
      original_title: 'Transformers: Rise of the Beasts',
      overview: 'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
      popularity: 783.515,
      poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
      release_date: '2023-06-06',
      title: 'Transformers: Rise of the Beasts',
      video: false,
      vote_average: 7.5,
      vote_count: 3127
    },
    {
      adult: false,
      backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
      genre_ids: [Array],
      id: 569094,
      original_language: 'en',
      original_title: 'Spider-Man: Across the Spider-Verse',
      overview: 'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      popularity: 711.968,
      poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      release_date: '2023-05-31',
      title: 'Spider-Man: Across the Spider-Verse',
      video: false,
      vote_average: 8.5,
      vote_count: 4160
    },
    {
      adult: false,
      backdrop_path: '/2QL5j6mB4ZpyBcVr0WO9H9MQGBu.jpg',
      genre_ids: [Array],
      id: 734253,
      original_language: 'hi',
      original_title: 'आदिपुरुष',
      overview: "7000 years ago, Ayodhya's Prince Raghava and Prince Sesh along with the Mighty Vanar Warriors travels to the island of Lanka with an aim to rescue Raghava's wife Janaki, who has been abducted by Lankesh, the king of Lanka.",
      popularity: 716.149,
      poster_path: '/1H2xEZOixs0z0JKwyjANZiKNNVJ.jpg',
      release_date: '2023-06-16',
      title: 'Adipurush',
      video: false,
      vote_average: 5,
      vote_count: 35
    },
    {
      adult: false,
      backdrop_path: '/fgsHxz21B27hOOqQBiw9L6yWcM7.jpg',
      genre_ids: [Array],
      id: 439079,
      original_language: 'en',
      original_title: 'The Nun',
      overview: 'A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.',
      popularity: 649.604,
      poster_path: '/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg',
      release_date: '2018-09-05',
      title: 'The Nun',
      video: false,
      vote_average: 5.9,
      vote_count: 5956
    },
    {
      adult: false,
      backdrop_path: '/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg',
      genre_ids: [Array],
      id: 635910,
      original_language: 'en',
      original_title: 'The Last Voyage of the Demeter',
      overview: 'The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless presence onboard the ship.',
      popularity: 646.872,
      poster_path: '/nrtbv6Cew7qC7k9GsYSf5uSmuKh.jpg',
      release_date: '2023-08-09',
      title: 'The Last Voyage of the Demeter',
      video: false,
      vote_average: 7.4,
      vote_count: 550
    },
    {
      adult: false,
      backdrop_path: '/3mrli3xsGrAieQks7KsBUm2LpCg.jpg',
      genre_ids: [Array],
      id: 979275,
      original_language: 'en',
      original_title: 'Mob Land',
      overview: 'A sheriff tries to keep the peace when a desperate family man violently robs a pill mill with his brother-in-law, alerting an enforcer for the New Orleans mafia.',
      popularity: 656.509,
      poster_path: '/yMu1g7A26N6wRFNwSwC7FOcfmCR.jpg',
      release_date: '2023-08-04',
      title: 'Mob Land',
      video: false,
      vote_average: 6,
      vote_count: 18
    },
    {
      adult: false,
      backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      genre_ids: [Array],
      id: 298618,
      original_language: 'en',
      original_title: 'The Flash',
      overview: "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      popularity: 951.482,
      poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      release_date: '2023-06-13',
      title: 'The Flash',
      video: false,
      vote_average: 6.9,
      vote_count: 2792
    },
    {
      adult: false,
      backdrop_path: '/xVMtv55caCEvBaV83DofmuZybmI.jpg',
      genre_ids: [Array],
      id: 724209,
      original_language: 'en',
      original_title: 'Heart of Stone',
      overview: 'An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon.',
      popularity: 562.652,
      poster_path: '/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg',
      release_date: '2023-08-09',
      title: 'Heart of Stone',
      video: false,
      vote_average: 6.9,
      vote_count: 1047
    },
    {
      adult: false,
      backdrop_path: '/AeR5k8Sp3zc2Ql4tT6CmgqspsEq.jpg',
      genre_ids: [Array],
      id: 447277,
      original_language: 'en',
      original_title: 'The Little Mermaid',
      overview: 'The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.',
      popularity: 601.121,
      poster_path: '/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg',
      release_date: '2023-05-18',
      title: 'The Little Mermaid',
      video: false,
      vote_average: 6.6,
      vote_count: 1943
    },
    {
      adult: false,
      backdrop_path: '/rTJ8LLzT9NPRJA2dnQs0241bMRn.jpg',
      genre_ids: [Array],
      id: 1008042,
      original_language: 'en',
      original_title: 'Talk to Me',
      overview: 'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.',
      popularity: 978.79,
      poster_path: '/kdPMUMJzyYAc4roD52qavX0nLIC.jpg',
      release_date: '2023-07-26',
      title: 'Talk to Me',
      video: false,
      vote_average: 7.1,
      vote_count: 332
    },
    {
      adult: false,
      backdrop_path: '/jn7U0C8ZKjL1M8skZ5lBdSLYcST.jpg',
      genre_ids: [Array],
      id: 1135229,
      original_language: 'en',
      original_title: 'I Am Rage',
      overview: 'An ancient cult embroiled in a sinister blood trade makes the deadly mistake of abducting a young woman with a violent, shocking past.',
      popularity: 555.127,
      poster_path: '/iclmQs4O5dy7EAkbykI1qkowfK2.jpg',
      release_date: '2023-09-14',
      title: 'I Am Rage',
      video: false,
      vote_average: 10,
      vote_count: 1
    }
  ]

  return (
    <main className="min-h-screen">
      
      {/* navbar */}
      <nav className="fixed top-0 w-full">
        <div className="container flex justify-between">
          <Link href="/" className="flex gap-2 items-center flex-grow">
            {/* <Image src="/tv.png" alt="Logo" width={40} height={40} />  */}
            MovieBox
          </Link>
          
          <div className="flex rounded-md overflow-hidden bg-transparent">
            <Input className="border-none focus-visible:ring-none" placeholder="search.." />
            <Button className="rounded-none border-none" variant="outline" size="icon">
              <ZoomOutIcon />
            </Button>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <section className="container flex flex-col md:flex-row gap-2 pt-16">
        banner
      </section>

      <section className="container pt-16 grid md:grid-cols-4 gap-4">
        {
          results.map(data => {
            return (
            <Card >
              <CardHeader>
                <Image src={data.poster_path} width={500} height={500} />
              </CardHeader>
              <CardContent>
                <h3>{data.original_title}</h3>
              </CardContent>
            </Card>
            )
          })
        }
      </section>
    </main>
  )
}
