import React, { lazy } from 'react'
import { useParams } from 'react-router-dom'
const Euro2022 = lazy(() => import("./WEuro22"))
const Euro2017 = lazy(() => import("./WEuro17"))
const Euro2013 = lazy(() => import("./WEuro13"))
const Euro2009 = lazy(() => import("./WEuro09"))
const Home = lazy(() => import("../Home"))

function EuroWomen () {
  const { year } = useParams()
  switch (year) {
    case "2009":
      return <Euro2009 />
    case "2013":
      return <Euro2013 />
    case "2017":
      return <Euro2017 />
    case "2022":
      return <Euro2022 />
    default:
      return <Home />
  }
}

export default EuroWomen