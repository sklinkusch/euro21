/** @jsxImportSource theme-ui */
import React from "react"
import { Link } from "react-router-dom"

const tournaments = [
  {
    title: "Men's Euro",
    editions: [
      {
        link: "/euromen/2020",
        title: "Euro 2020"
      },
      {
        link: "/euromen/2016",
        title: "Euro 2016"
      },
      {
        link: "/euromen/2012",
        title: "Euro 2012"
      },
      {
        link: "/euromen/2008",
        title: "Euro 2008"
      },
      {
        link: "/euromen/2004",
        title: "Euro 2004"
      },
    ],
  },
  {
    title: "Women's Euro",
    editions: [
      {
        link: "/eurowomen/2022",
        title: "Euro 2022"
      },
      {
        link: "/eurowomen/2017",
        title: "Euro 2017"
      },
      {
        link: "/eurowomen/2013",
        title: "Euro 2013"
      },
      {
        link: "/eurowomen/2009",
        title: "Euro 2009"
      },
      {
        link: "/eurowomen/2005",
        title: "Euro 2005"
      },
      {
        link: "/eurowomen/2001",
        title: "Euro 2001"
      }
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
      },
      {
        link: "/worldcupwomen/2011",
        title: "World Cup 2011"
      },
      {
        link: "/worldcupwomen/2007",
        title: "World Cup 2007"
      },
      {
        link: "/worldcupwomen/2003",
        title: "World Cup 2003"
      },
      {
        link: "/worldcupwomen/1999",
        title: "World Cup 1999"
      },
      {
        link: "/worldcupwomen/1995",
        title: "World Cup 1995"
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