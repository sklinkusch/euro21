/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDebugState } from 'use-named-state'
import { MatchListTwo } from "../../components/MatchList"
import { TableSetTwo  } from "../../components/Table"
import matches, { matchhf, matchf } from "../../data/EuroWomen/matches_weuro2001"
import { Halbfinale } from '../../components/Halbfinale';
import { getKoTeam, FlagSet, getChampion } from '../../components/helpers';
import { Finale } from '../../components/Finale';
import { localeName as locales } from '../../components/countries';
/* eslint-disable react-hooks/exhaustive-deps */

function WEuro01() {
  const [groupA, setGroupA] = useDebugState("groupA",[])
  const [groupB, setGroupB] = useDebugState("groupB",[])
  const [first, setFirst] = useDebugState("first",[])
  const [second, setSecond] = useDebugState("second",[])
  const [hfTeams, setHfTeams] = useDebugState("hfTeams",[])
  const [fTeams, setFTeams] = useDebugState("fTeams",[])
  const [champion, setChampion] = useDebugState("champion",null)
  useEffect(() => {
    const mergedGroups = [groupA, groupB]
    const firstPlace = mergedGroups.map(group => group[0])
    const secondPlace = mergedGroups.map(group => group[1])
    setFirst(firstPlace)
    setSecond(secondPlace)
  }, [groupA, groupB])
  useEffect(() => {
    if (first[0]) {
      const aTeamHF1 = first[0].team || ""
      const bTeamHF1 = second[1].team || ""
      const teamsHF1 = [aTeamHF1, bTeamHF1]
      const aTeamHF2 = first[1].team || ""
      const bTeamHF2 = second[0].team || ""
      const teamsHF2 = [aTeamHF2, bTeamHF2]
      const teamsHF = [teamsHF1, teamsHF2]
      setHfTeams(teamsHF)
    }
  }, [first, second])
  useEffect(() => {
    const aTeamF = getKoTeam(matchhf, 0, hfTeams[0], 0, hfTeams[0], 1)
    const bTeamF = getKoTeam(matchhf, 1, hfTeams[1], 0, hfTeams[1], 1)
    const teamsF = [aTeamF, bTeamF]
    setFTeams(teamsF)
  }, [matchhf, hfTeams])
  useEffect(() => {
    const myChampion = getChampion(matchf, fTeams[0], fTeams[1])
    setChampion(myChampion)
  })
  const lang = navigator.language
  return (
    <div className="App" sx={{ textAlign: "center", py: "16px", backgroundColor: "bg", color: "ft" }}>
      <h1 sx={{ fontSize: 3, fontWeight: "bold", my: "8px", px: ["4px", "4px", "0px"], hyphens: ["auto", "none"] }} lang={lang}>
        <span>{locales("Euro")}</span>{" "}
        <span>2001</span>
      </h1>
      <header className="App-header" sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr", "1fr 2fr"], borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "ft" }}>
        <aside sx={{ width: "100%" }}>
          <MatchListTwo matches={matches} />
        </aside>
        <main sx={{ width: "100%" }}>
          <TableSetTwo
            matches={matches}
            groupA={groupA}
            groupB={groupB}
            setGroupA={setGroupA}
            setGroupB={setGroupB}
          />
          <div sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
            <Halbfinale teams={hfTeams} matchhf={matchhf} full={true} />
            <Finale teams={fTeams} matchf={matchf} />
          </div>
        </main>
      </header>
      <h2>
        {locales("EChampion")}: <FlagSet code={champion} large={true} />
      </h2>
      <div sx={{ textAlign: "center" }}>
        <Link to="/">{locales("Back")}</Link>
      </div>
    </div>
  );
}

export default WEuro01;
