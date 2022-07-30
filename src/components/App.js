import React, { Suspense, lazy } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import WEuro17 from "../pages/WEuro17"
import WEuro22 from "../pages/WEuro22"
import WWC15 from "../pages/WWorldCup2015"
import WWC19 from "../pages/WWorldCup2019"
const WC22 = lazy(() => import("../pages/WorldCup2022"))
const Euro20 = lazy(() => import("../pages/Euro20"))
const Euro16 = lazy(() => import("../pages/Euro16"))
const Euro12 = lazy(() => import("../pages/Euro12"))
const Euro08 = lazy(() => import("../pages/Euro08"))
const Euro04 = lazy(() => import("../pages/Euro04"))
const Home = lazy(() => import("../pages/Home"))

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/wc22">
            <WC22 />
          </Route>
          <Route path="/wwc19">
            <WWC19 />
          </Route>
          <Route path="/wwc15">
            <WWC15 />
          </Route>
          <Route path="/euro20">
            <Euro20 />
          </Route>
          <Route path="/euro16">
            <Euro16 />
          </Route>
          <Route path="/euro12">
            <Euro12 />
          </Route>
          <Route path="/euro08">
            <Euro08 />
          </Route>
          <Route path="/euro04">
            <Euro04 />
          </Route>
          <Route path="/weuro22">
            <WEuro22 />
          </Route>
          <Route path="/weuro17">
            <WEuro17 />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App