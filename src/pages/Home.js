import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Overview</h1>
      <ul>
        <Link to="/euro20">Euro 2020</Link>
        <Link to="/euro16">Euro 2016</Link>
      </ul>
    </div>
  )
}

export default Home