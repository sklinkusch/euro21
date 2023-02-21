/** @jsxImportSource theme-ui */
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDebugState } from "use-named-state"
import { NewMatchList } from "../../components/MatchList"
import { GeneralTableSet } from "../../components/Table"
import { AchtelfinaleNew } from "../../components/Achtelfinale"
// import { FlagSet } from "../../components/helpers"
// import { Viertelfinale } from "../../components/Viertelfinale"
// import { Halbfinale } from '../../components/Halbfinale';
// import { getKoTeams, getKoTeam, FlagSet, getChampion, getLoser } from '../../components/helpers';
// import { Finale, Platz3 } from '../../components/Finale';
import { localeName as locales } from '../../components/countries';
/* eslint-disable react-hooks/exhaustive-deps */

function WorldCup2022() {
  // const fifaWorldRank = ["BR", "BE", "FR", "AR", "GB-ENG", "ES", "PT", "MX", "NL", "DK", "DE", "UY", "CH", "US", "HR", "GB-WLS", "SN", "IR", "PE", "JP", "MA", "RS", "PL", "UA", "KR", "CR", "TN", "CM", "CA", "GB-SCT", "AU", "EC", "QA", "GH", "AE", "NZ"]
  // const [champion, setChampion] = useDebugState("champion",null)
  const [matches, setMatches] = useDebugState("matches",{})
  // const [matchaf, setMatchaf] = useDebugState("matchaf",[])
  // const [matchvf, setMatchvf] = useDebugState("matchvf",[])
  // const [matchhf, setMatchhf] = useDebugState("matchhf",[])
  // const [match3p, setMatch3p] = useDebugState("match3p",[])
  // const [matchf, setMatchf] = useDebugState("matchf",[])
  useEffect(() => {
    document.title = `${locales("WorldCup")} 2022`
  }, [])
  useEffect(() => {
    async function fetchData () {
      const longLang = navigator && "language" in navigator ? navigator.language : ""
      const lang = longLang.length > 0 ? longLang.substring(0,2) : "en"
      const response = await fetch(`https://euro21-api.vercel.app/worldcup?year=2022&lang=${lang}`)
      const data = await response.json()
      // const { groups, AF, VF, HF, F, champion: fchampion } = await data
      // const thirdP = await data["3P"]
      setMatches(await data)
      // setMatchaf(await AF)
      // setMatchvf(await VF)
      // setMatchhf(await HF)
      // setMatch3p(await thirdP)
      // setMatchf(await F)
      // setChampion(await fchampion)
    }
    fetchData()
  },[])
  const lang = navigator.language
  return (
    <div className="App" sx={{ textAlign: "center", py: "16px", backgroundColor: "bg", color: "ft", width: "100%" }}>
      <h1 sx={{ fontSize: 3, fontWeight: "bold", my: "8px", px: ["4px", "4px", "0px"], hyphens: ["auto", "none"] }} lang={lang}>
        <span>{locales("WorldCup")}</span>{" "}
        <span>2022</span>
      </h1>
      <header className="App-header" sx={{ display: "grid", gridTemplateColumns: "1fr", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "ft", width: "100%" }}>
        <aside sx={{ width: "100%" }}>
          {matches.hasOwnProperty("groups") && matches.groups && (<NewMatchList matches={matches.groups} />)}
        </aside>
        <main sx={{ width: "100%" }}>
          {matches.hasOwnProperty("groups") && matches.groups && (<GeneralTableSet matches={matches.groups} />)}
          <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"], width: "100%", mx: 0 }}>
            {matches.hasOwnProperty("AF") && matches.AF && (<AchtelfinaleNew matches={matches.AF} />)}
          </div>
           {/* <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"], width: "100%", mx: 0 }}>
            <Achtelfinale teams={afTeams} matchaf={matchaf} />
            <Viertelfinale teams={vfTeams} matchvf={matchvf} />
            <Halbfinale teams={hfTeams} matchhf={matchhf} />
            <Platz3 teams={teams3P} match3p={match3p} />
           <Finale teams={fTeams} matchf={matchf} />
          </div> */}
        </main>
      </header>
       {/* <h2 sx={{ width: "100%" }}>
        {locales("WChampion")}: <FlagSet code={champion} large={true} />
      </h2> */}
      <div sx={{ textAlign: "center" }}>
        <Link to="/">{locales("Back")}</Link>
      </div>
    </div>
  );
}

export default WorldCup2022