import React, { lazy } from 'react'
import { useParams } from "react-router-dom"
const Home = lazy(() => import("../Home.js"))
const WorldCup2011 = lazy(() => import("./WWorldCup2011"))
const WorldCup2015 = lazy(() => import("./WWorldCup2015"))
const WorldCup2019 = lazy(() => import("./WWorldCup2019"))

function WorldCupWomen() {
  const { year } = useParams()
  switch (year) {
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