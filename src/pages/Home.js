/** @jsxImportSource theme-ui */
import React from "react"
import { Link } from "react-router-dom"

const tournaments = [
  {
    title: "Men's Euro",
    editions: [
      {
        link: "/euro2020",
        title: "Euro 2020"
      },
      {
        link: "/euro2016",
        title: "Euro 2016"
      },
      {
        link: "/euro2012",
        title: "Euro 2012"
      },
      {
        link: "/euro2008",
        title: "Euro 2008"
      },
      {
        link: "/euro2004",
        title: "Euro 2004"
      },
    ],
  },
  {
    title: "Women's Euro",
    editions: [
      {
        link: "/weuro2022",
        title: "Euro 2022"
      },
      {
        link: "/weuro2017",
        title: "Euro 2017"
      },
    ],
  },
  {
    title: "Men's World Cup",
    editions: [
      {
        link: "/worldcupmen/2022",
        title: "World Cup 2022"
      },
      {
        link: "/worldcupmen/2018",
        title: "World Cup 2018"
      },
      {
        link: "/worldcupmen/2014",
        title: "World Cup 2014"
      },
      {
        link: "/worldcupmen/2010",
        title: "World Cup 2010"
      },
      {
        link: "/worldcupmen/2006",
        title: "World Cup 2006"
      },
      {
        link: "/worldcupmen/2002",
        title: "World Cup 2002"
      },
    ],
  },
  {
    title: "Women's World Cup",
    editions: [
      {
        link: "/worldcupwomen/2019",
        title: "World Cup 2019"
      },
      {
        link: "/worldcupwomen/2015",
        title: "World Cup 2015"
      }
    ],
  }
]

function Home() {
  return (
    <div>
      <h1>Overview</h1>
      <div sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)"}}>
        {tournaments.map((tournament, column) => (
          <div key={column}>
            <h2>{tournament.title}</h2>
            <ul>
              {tournament.editions.map((edition, index) => (
                <li key={`${column}-${index}`}>
                  <Link to={edition.link}>{edition.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home