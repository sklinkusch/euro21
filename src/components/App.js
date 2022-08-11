import React, { Suspense, lazy } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import WorldCupMen from "../pages/WorldCupMen/WorldCupMen"
const WEuro2017 = lazy(() => import("../pages/WEuro17")) 
const WEuro2022 = lazy(() => import("../pages/WEuro22"))
const WWC2015 = lazy(() => import("../pages/WWorldCup2015"))
const WWC2019 = lazy(() => import("../pages/WWorldCup2019"))
const Euro2020 = lazy(() => import("../pages/Euro20"))
const Euro2016 = lazy(() => import("../pages/Euro16"))
const Euro2012 = lazy(() => import("../pages/Euro12"))
const Euro2008 = lazy(() => import("../pages/Euro08"))
const Euro2004 = lazy(() => import("../pages/Euro04"))
const Home = lazy(() => import("../pages/Home"))

const WomensWorldCups = [
  {
    path: "/wwc2019",
    Component: WWC2019
  },
  {
    path: "/wwc2015",
    Component: WWC2015
  }
]

const MensEuros = [
  {
    path: "/euro2020",
    Component: Euro2020
  },
  {
    path: "/euro2016",
    Component: Euro2016
  },
  {
    path: "/euro2012",
    Component: Euro2012
  },
  {
    path: "/euro2008",
    Component: Euro2008
  },
  {
    path: "/euro2004",
    Component: Euro2004
  }
]

const WomensEuros = [
  {
    path: "/weuro2022",
    Component: WEuro2022
  },
  {
    path: "/weuro2017",
    Component: WEuro2017
  }
]

const others = [
  {
    path: "/",
    Component: Home
  },
  {
    path: "*",
    Component: Home
  }
]

const tournaments = [
  ...WomensWorldCups,
  ...MensEuros,
  ...WomensEuros,
  ...others
]

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/worldcupmen/:year">
            <WorldCupMen />
          </Route>
          {tournaments.map((tournament, index) => (
            <Route path={tournament.path} key={index}>
              <tournament.Component />
            </Route>
          ))}
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App