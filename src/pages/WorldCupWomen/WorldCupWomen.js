import React, { lazy } from 'react'
import { useParams } from "react-router-dom"
const Home = lazy(() => import("../Home.js"))
const WorldCup1991 = lazy(() => import("./WWorldCup1991"))
const WorldCup1995 = lazy(() => import("./WWorldCup1995"))
const WorldCup1999 = lazy(() => import("./WWorldCup1999"))
const WorldCup2003 = lazy(() => import("./WWorldCup2003"))
const WorldCup2007 = lazy(() => import("./WWorldCup2007"))
const WorldCup2011 = lazy(() => import("./WWorldCup2011"))
const WorldCup2015 = lazy(() => import("./WWorldCup2015"))
const WorldCup2019 = lazy(() => import("./WWorldCup2019"))

function WorldCupWomen() {
  const { year } = useParams()
  switch (year) {
    case "1991":
      return <WorldCup1991 />
    case "1995":
      return <WorldCup1995 />
    case "1999":
      return <WorldCup1999 />
    case "2003":
      return <WorldCup2003 />
    case "2007":
      return <WorldCup2007 />
    case "2011":
      return <WorldCup2011 />
    case "2015":
      return <WorldCup2015 />
    case "2019":
      return <WorldCup2019 />
    default:
      return <Home />
  }
}

export default WorldCupWomen