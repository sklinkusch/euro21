import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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
        <Routes>
          <Route path="/worldcupmen/:year" element={<WorldCupMen />} />
          <Route path="/worldcupwomen/:year" element={<WorldCupWomen />} />
          <Route path="/euromen/:year" element={<EuroMen />} />
          <Route path="/eurowomen/:year" element={<EuroWomen />} />
          {tournaments.map((tournament, index) => (
            <Route path={tournament.path} key={index} element={<tournament.Component />} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App