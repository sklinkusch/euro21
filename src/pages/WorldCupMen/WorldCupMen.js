import React, { lazy } from 'react'
import { useParams } from "react-router-dom"
const Home = lazy(() => import("../Home.js"))
const WorldCup1994 = lazy(() => import("./WorldCup1994.js"))
const WorldCup1998 = lazy(() => import("./WorldCup1998.js"))
const WorldCup2002 = lazy(() => import("./WorldCup2002.js"))
const WorldCup2006 = lazy(() => import("./WorldCup2006.js"))
const WorldCup2010 = lazy(() => import("./WorldCup2010.js"))
const WorldCup2014 = lazy(() => import("./WorldCup2014.js"))
const WorldCup2018 = lazy(() => import("./WorldCup2018.js"))
const WorldCup2022 = lazy(() => import("./WorldCup2022.js"))

function WorldCupMen () {
  const { year } = useParams()
  switch (year) {
    case "1994":
      return <WorldCup1994 />
    case "1998":
      return <WorldCup1998 />
    case "2002":
      return <WorldCup2002 />
    case "2006":
      return <WorldCup2006 />
    case "2010":
      return <WorldCup2010 />
    case "2014":
      return <WorldCup2014 />
    case "2018":
      return <WorldCup2018 />
    case "2022":
      return <WorldCup2022 />
    default:
      return <Home />
  }
}

export default WorldCupMen