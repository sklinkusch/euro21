/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDebugState } from 'use-named-state'
import { MatchListFour } from "../../components/MatchList"
import { TableSetFour } from "../../components/Table"
import matches, { matchvf, matchhf, match3p, matchf } from "../../data/WorldCupWomen/matches_wwc1999"
import { Viertelfinale } from "../../components/Viertelfinale"
import { Halbfinale } from '../../components/Halbfinale';
import { getKoTeam, FlagSet, getChampion, getLoser } from '../../components/helpers';
import { Finale, Platz3 } from '../../components/Finale';
import { localeName as locales } from '../../components/countries';
/* eslint-disable react-hooks/exhaustive-deps */

function WWC99() {
  const uefaCoefficient = ["ES", "NL", "DE", "IT", "GB-ENG", "RU", "HR", "PT", "SE", "DK", "FR", "CZ", "UA", "CH", "TR", "SK", "HU", "FI", "GB-SCT", "PL", "AT", "BE", "GB-WLS", "MK"]
  const [groupA, setGroupA] = useDebugState("groupA",[])
  const [groupB, setGroupB] = useDebugState("groupB",[])
  const [groupC, setGroupC] = useDebugState("groupC",[])
  const [groupD, setGroupD] = useDebugState("groupD",[])
  const [first, setFirst] = useDebugState("first",[])
  const [second, setSecond] = useDebugState("second",[])
  const [vfTeams, setVfTeams] = useDebugState("vfTeams",[])
  const [hfTeams, setHfTeams] = useDebugState("hfTeams",[])
  const [teams3P, setTeams3P] = useDebugState("teams3P", [])
  const [fTeams, setFTeams] = useDebugState("fTeams",[])
  const [champion, setChampion] = useDebugState("champion",null)
  useEffect(() => {
    document.title = `${locales("WorldCup")} 1999`
  }, [])
  useEffect(() => {
    if (first[0]) {
      const aTeamVF1 = first[3].team || ""
      const bTeamVF1 = second[2].team || ""
      const teamsVF1 = [aTeamVF1, bTeamVF1]
      const aTeamVF2 = first[2].team || ""
      const bTeamVF2 = second[3].team || ""
      const teamsVF2 = [aTeamVF2, bTeamVF2]
      const aTeamVF3 = first[0].team || ""
      const bTeamVF3 = second[1].team || ""
      const teamsVF3 = [aTeamVF3, bTeamVF3]
      const aTeamVF4 = first[1].team || ""
      const bTeamVF4 = second[0].team || ""
      const teamsVF4 = [aTeamVF4, bTeamVF4]
      const teamsVF = [teamsVF1, teamsVF2, teamsVF3, teamsVF4]
      setVfTeams(teamsVF)
    }
  }, [first, second])
  useEffect(() => {
    const aTeamHF1 = getKoTeam(matchvf, 2, vfTeams[2], 0, vfTeams[2], 1)
    const bTeamHF1 = getKoTeam(matchvf, 3, vfTeams[3], 0, vfTeams[3], 1)
    const teamsHF1 = [aTeamHF1, bTeamHF1]
    const aTeamHF2 = getKoTeam(matchvf, 1, vfTeams[1], 0, vfTeams[1], 1)
    const bTeamHF2 = getKoTeam(matchvf, 0, vfTeams[0], 0, vfTeams[0], 1)
    const teamsHF2 = [aTeamHF2, bTeamHF2]
    const teamsHF = [teamsHF1, teamsHF2]
    setHfTeams(teamsHF)
  }, [matchvf, vfTeams])
  useEffect(() => {
    const aTeamF = getKoTeam(matchhf, 0, hfTeams[0], 0, hfTeams[0], 1)
    const aTeam3P = getLoser(matchhf, 0, hfTeams[0], 0, hfTeams[0], 1)
    const bTeamF = getKoTeam(matchhf, 1, hfTeams[1], 0, hfTeams[1], 1)
    const bTeam3P = getLoser(matchhf, 1, hfTeams[1], 0, hfTeams[1], 1)
    const teamsF = [aTeamF, bTeamF]
    const myTeams3P = [aTeam3P, bTeam3P]
    setTeams3P(myTeams3P)
    setFTeams(teamsF)
  }, [matchhf, hfTeams])
  useEffect(() => {
    const myChampion = getChampion(matchf, fTeams[0], fTeams[1])
    setChampion(myChampion)
  })
  useEffect(() => {
    const mergedGroups = [groupA, groupB, groupC, groupD]
    const firstPlace = mergedGroups.map(group => group[0])
    const secondPlace = mergedGroups.map(group => group[1])
    setFirst(firstPlace)
    setSecond(secondPlace)
  }, [groupA, groupB, groupC, groupD])
  const lang = navigator.language
  return (
    <div className="App" sx={{ textAlign: "center", py: "16px", backgroundColor: "bg", color: "ft" }}>
      <h1 sx={{ fontSize: 3, fontWeight: "bold", my: "8px", px: ["4px", "4px", "0px"], hyphens: ["auto", "none"] }} lang={lang}>
        <span>{locales("WorldCup")}</span>{" "}
        <span>1999</span>
      </h1>
      <header className="App-header" sx={{ display: "grid", gridTemplateColumns: "1fr", borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "ft" }}>
        <aside sx={{ width: "100%" }}>
          <MatchListFour matches={matches} />
        </aside>
        <main sx={{ width: "100%" }}>
          <TableSetFour
            matches={matches}
            groupA={groupA}
            groupB={groupB}
            groupC={groupC}
            groupD={groupD}
            setGroupA={setGroupA}
            setGroupB={setGroupB}
            setGroupC={setGroupC}
            setGroupD={setGroupD}
            coefficient={uefaCoefficient}
            modus="wc"
          />
           <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(6,1fr)"] }}>
            <Viertelfinale teams={vfTeams} matchvf={matchvf} maxColumns={6} />
            <Halbfinale teams={hfTeams} matchhf={matchhf} full={true} />
            <Platz3 teams={teams3P} match3p={match3p} />
           <Finale teams={fTeams} matchf={matchf} />
          </div> 
        </main>
      </header>
      <h2>
        {locales("WChampion")}: <FlagSet code={champion} large={true} />
      </h2>
      <div sx={{ textAlign: "center" }}>
        <Link to="/">{locales("Back")}</Link>
      </div>
    </div>
  );
}

export default WWC99;
