import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import WorldCupMen from "../pages/WorldCupMen/WorldCupMen"
import WorldCupWomen from "../pages/WorldCupWomen/WorldCupWomen"
import EuroMen from "../pages/EuroMen/EuroMen"
import EuroWomen from "../pages/EuroWomen/EuroWomen"
const Home = lazy(() => import("../pages/Home"))

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
  ...others
]

function App() {
  return (
    <Router>
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
          <Route path="/eurowomen/:year">
            <EuroWomen />
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