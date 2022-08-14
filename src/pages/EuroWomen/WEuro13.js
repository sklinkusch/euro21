/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDebugState } from 'use-named-state'
import { MatchListThree } from "../../components/MatchList"
import { TableSetThree, TableThird } from "../../components/Table"
import matches, { matchvf, matchhf, matchf } from "../../data/EuroWomen/matches_weuro2013"
import { Viertelfinale } from "../../components/Viertelfinale"
import { Halbfinale } from '../../components/Halbfinale';
import { getKoTeam, FlagSet, getChampion } from '../../components/helpers';
import { Finale } from '../../components/Finale';
import { localeName as locales } from '../../components/countries';
/* eslint-disable react-hooks/exhaustive-deps */

function WEuro13() {
  const [groupA, setGroupA] = useDebugState("groupA",[])
  const [groupB, setGroupB] = useDebugState("groupB",[])
  const [groupC, setGroupC] = useDebugState("groupC",[])
  const [first, setFirst] = useDebugState("first",[])
  const [second, setSecond] = useDebugState("second",[])
  const [third, setThird] = useDebugState("third", [])
  const [vfTeams, setVfTeams] = useDebugState("vfTeams",[])
  const [hfTeams, setHfTeams] = useDebugState("hfTeams",[])
  const [fTeams, setFTeams] = useDebugState("fTeams",[])
  const [champion, setChampion] = useDebugState("champion",null)
  useEffect(() => {
    const mergedGroups = [groupA, groupB, groupC]
    const firstPlace = mergedGroups.map(group => group[0])
    const secondPlace = mergedGroups.map(group => group[1])
    const thirdPlace = mergedGroups.map(group => group[2])
    const sortedThird = thirdPlace.sort((a,b) => {
      if (a.points - b.points !== 0) {
        return (b.points - a.points)
      } else if (a.goalDifference - b.goalDifference !== 0) {
        return (b.goalDifference - a.goalDifference)
      } else {
        return (a.fairPlay - b.fairPlay)
      }
    })
    setFirst(firstPlace)
    setSecond(secondPlace)
    setThird(sortedThird)
  }, [groupA, groupB, groupC])
  useEffect(() => {
    if(first[0]) {
      const aTeamVF1 = first[0].team || ""
      const bTeamVF1 = third[0].team || ""
      const teamsVF1 = [aTeamVF1, bTeamVF1]
      const aTeamVF2 = second[0].team || ""
      const bTeamVF2 = second[1].team || ""
      const teamsVF2 = [aTeamVF2, bTeamVF2]
      const aTeamVF3 = first[1].team || ""
      const bTeamVF3 = second[2].team || ""
      const teamsVF3 = [aTeamVF3, bTeamVF3]
      const aTeamVF4 = first[2].team || ""
      const bTeamVF4 = third[1].team || ""
      const teamsVF4 = [aTeamVF4, bTeamVF4]
      const teamsVF = [teamsVF1, teamsVF2, teamsVF3, teamsVF4]
      setVfTeams(teamsVF)
    }
  }, [first, second])
  useEffect(() => {
    const aTeamHF1 = getKoTeam(matchvf, 0, vfTeams[0], 0, vfTeams[0], 1)
    const bTeamHF1 = getKoTeam(matchvf, 1, vfTeams[1], 0, vfTeams[1], 1)
    const teamsHF1 = [aTeamHF1, bTeamHF1]
    const aTeamHF2 = getKoTeam(matchvf, 2, vfTeams[2], 0, vfTeams[2], 1)
    const bTeamHF2 = getKoTeam(matchvf, 3, vfTeams[3], 0, vfTeams[3], 1)
    const teamsHF2 = [aTeamHF2, bTeamHF2]
    const teamsHF = [teamsHF1, teamsHF2]
    setHfTeams(teamsHF)
  }, [matchvf, vfTeams])
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
        <span>2013</span>
      </h1>
      <header className="App-header" sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr", "1fr 2fr"], borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "ft" }}>
        <aside sx={{ width: "100%" }}>
          <MatchListThree matches={matches} />
        </aside>
        <main sx={{ width: "100%" }}>
          <TableSetThree
            matches={matches}
            groupA={groupA}
            groupB={groupB}
            groupC={groupC}
            setGroupA={setGroupA}
            setGroupB={setGroupB}
            setGroupC={setGroupC}
          />
          <div sx={{ display: "grid", gridTemplateColumns: ["1fr 1fr", "1fr", "1fr 1fr"] }}>
            <TableThird third={third} max={1} />
          </div>
          <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(6,1fr)"] }}>
            <Viertelfinale teams={vfTeams} matchvf={matchvf} />
            <Halbfinale teams={hfTeams} matchhf={matchhf} />
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

export default WEuro13;
