import React, { Suspense, lazy } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
const Euro20 = lazy(() => import("../pages/Euro20"))
const Home = lazy(() => import("../pages/Home"))

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/euro20">
            <Euro20 />
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