/** @jsxImportSource theme-ui */
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDebugState } from "use-named-state"
import { NewMatchList } from "../../components/MatchList"
import { GeneralTableSet } from "../../components/Table"
import { AchtelfinaleNew } from "../../components/Achtelfinale"
import { ViertelfinaleNew } from "../../components/Viertelfinale"
import { HalbfinaleNew } from "../../components/Halbfinale"
import { FinaleNew, Platz3New } from '../../components/Finale';
import { FlagSet } from "../../components/helpers"
import { localeName as locales } from '../../components/countries';
/* eslint-disable react-hooks/exhaustive-deps */

function WorldCup2014() {
  const [matches, setMatches] = useDebugState("matches",{})
  useEffect(() => {
    document.title = `${locales("WorldCup")} 2014`
  }, [])
  useEffect(() => {
    async function fetchData () {
      const longLang = navigator && "language" in navigator ? navigator.language : ""
      const lang = longLang.length > 0 ? longLang.substring(0,2) : "en"
      const response = await fetch(`https://euro21-api.vercel.app/worldcupmen?year=2014&lang=${lang}`)
      const data = await response.json()
      setMatches(await data)
    }
    fetchData()
  },[])
  const lang = navigator.language
  return (
    <div className="App" sx={{ textAlign: "center", py: "16px", backgroundColor: "bg", color: "ft" }}>
      <h1 sx={{ fontSize: 3, fontWeight: "bold", my: "8px", px: ["4px", "4px", "0px"], hyphens: ["auto", "none"] }} lang={lang}>
        <span>{locales("WorldCup")}</span>{" "}
        <span>2014</span>
      </h1>
      <header className="App-header" sx={{ display: "grid", gridTemplateColumns: "1fr", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "ft" }}>
        <aside sx={{ width: "100%" }}>
          {matches.hasOwnProperty("groups") && matches.groups && (<NewMatchList matches={matches.groups} />)}
        </aside>
        <main sx={{ width: "100%" }}>
          {matches.hasOwnProperty("groups") && matches.groups && (<GeneralTableSet matches={matches.groups} />)}
           <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"] }}>
            {matches.hasOwnProperty("AF") && matches.AF && (<AchtelfinaleNew matches={matches.AF} />)}
            {matches.hasOwnProperty("VF") && matches.VF && (<ViertelfinaleNew matches={matches.VF} />)}
            {matches.hasOwnProperty("HF") && matches.HF && (<HalbfinaleNew matches={matches.HF} />)}
            {matches.hasOwnProperty("3P") && matches["3P"] && (<Platz3New match={matches["3P"]} />)}
            {matches.hasOwnProperty("F") && matches.F && (<FinaleNew match={matches.F} />)}
          </div>
        </main>
      </header>
        {matches.hasOwnProperty("champion") && matches.champion && <h2 sx={{ width: "100%", fontSize: 2 }}>
        {locales("WChampion")}: <FlagSet code={matches.champion} large={true} />
      </h2>}
      <div sx={{ textAlign: "center" }}>
        <Link to="/">{locales("Back")}</Link>
      </div>
    </div>
  );
}

export default WorldCup2014