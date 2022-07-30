/** @jsxImportSource theme-ui */
import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Overview</h1>
      <div sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)"}}>
        <div>
          <h2>Men's Euro</h2>
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
            <li>
              <Link to="/euro04">Euro 2004</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Women's Euro</h2>
          <ul>
            <li>
              <Link to="/weuro22">Euro 2022</Link>
            </li>
            <li>
              <Link to="/weuro17">Euro 2017</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Men's World Cup</h2>
          <ul>
            <li>
              <Link to="/wc22">World Cup 2022</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Women's World Cup</h2>
          <ul>
            <li>
              <Link to="/wwc19">World Cup 2019</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home