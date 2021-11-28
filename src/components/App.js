import React, { Suspense, lazy } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
const Euro20 = lazy(() => import("../pages/Euro20"))
const Euro16 = lazy(() => import("../pages/Euro16"))
const Euro12 = lazy(() => import("../pages/Euro12"))
const Euro08 = lazy(() => import("../pages/Euro08"))
const Home = lazy(() => import("../pages/Home"))

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
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
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App