import React, { lazy } from 'react'
import { useParams } from 'react-router-dom'
const Euro2020 = lazy(() => import("./Euro20"))
const Euro2016 = lazy(() => import("./Euro16"))
const Euro2012 = lazy(() => import("./Euro12"))
const Euro2008 = lazy(() => import("./Euro08"))
const Euro2004 = lazy(() => import("./Euro04"))
const Home = lazy(() => import("../Home"))

function EuroMen () {
  const { year } = useParams()
  switch (year) {
    case "2004":
      return <Euro2004 />
    case "2008":
      return <Euro2008 />
    case "2012":
      return <Euro2012 />
    case "2016":
      return <Euro2016 />
    case "2020":
      return <Euro2020 />
    default:
      return <Home />
  }
}

export default EuroMen