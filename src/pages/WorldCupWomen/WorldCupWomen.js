import React, { lazy } from 'react'
import { useParams } from "react-router-dom"
const Home = lazy(() => import("../Home.js"))
const WorldCup2015 = lazy(() => import("./WWorldCup2015.js"))
const WorldCup2019 = lazy(() => import("./WWorldCup2019.js"))

function WorldCupWomen() {
  const { year } = useParams()
  console.log(year)
  switch (year) {
    case "2015":
      return <WorldCup2015 />
    case "2019":
      return <WorldCup2019 />
    default:
      return <Home />
  }
}

export default WorldCupWomen