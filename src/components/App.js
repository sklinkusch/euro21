import React, { Suspense, lazy } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
const Euro20 = lazy(() => import("../pages/Euro20"))

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/">
            <Euro20 />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App