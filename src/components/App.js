import React, { Suspense, lazy } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import WorldCupMen from "../pages/WorldCupMen/WorldCupMen"
import WorldCupWomen from "../pages/WorldCupWomen/WorldCupWomen"
import EuroMen from "../pages/EuroMen/EuroMen"
const WEuro2017 = lazy(() => import("../pages/WEuro17")) 
const WEuro2022 = lazy(() => import("../pages/WEuro22"))
const Home = lazy(() => import("../pages/Home"))

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
          <Route path="/worldcupwomen/:year">
            <WorldCupWomen />
          </Route>
          <Route path="/euromen/:year">
            <EuroMen />
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