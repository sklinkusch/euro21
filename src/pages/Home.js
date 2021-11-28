import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Overview</h1>
      <ul>
        <li>
          <Link to="/euro20">Euro 2020</Link>
        </li>
        <li>
          <Link to="/euro16">Euro 2016</Link>
        </li>
        <li>
          <Link to="/euro12">Euro 2012</Link>
        </li>
        <li>
          <Link to="/euro08">Euro 2008</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home