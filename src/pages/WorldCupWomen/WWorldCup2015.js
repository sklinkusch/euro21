/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDebugState } from 'use-named-state'
import { MatchList } from "../../components/MatchList"
import { TableSet, TableThird } from "../../components/Table"
import matches, { matchaf, matchvf, matchhf, match3p, matchf } from "../../data/WorldCupWomen/matches_wwc2015"
import { AchtelfinaleNew } from "../../components/Achtelfinale"
import { Viertelfinale } from "../../components/Viertelfinale"
import { Halbfinale } from '../../components/Halbfinale';
import { getAssociation16, getKoTeams, getKoTeam, FlagSet, getChampion, getLoser } from '../../components/helpers';
import { Finale, Platz3 } from '../../components/Finale';
import { localeName as locales } from '../../components/countries';
/* eslint-disable react-hooks/exhaustive-deps */

function WWC15() {
  const uefaCoefficient = ["ES", "NL", "DE", "IT", "GB-ENG", "RU", "HR", "PT", "SE", "DK", "FR", "CZ", "UA", "CH", "TR", "SK", "HU", "FI", "GB-SCT", "PL", "AT", "BE", "GB-WLS", "MK"]
  const [groupA, setGroupA] = useDebugState("groupA",[])
  const [groupB, setGroupB] = useDebugState("groupB",[])
  const [groupC, setGroupC] = useDebugState("groupC",[])
  const [groupD, setGroupD] = useDebugState("groupD",[])
  const [groupE, setGroupE] = useDebugState("groupE",[])
  const [groupF, setGroupF] = useDebugState("groupF",[])
  const [first, setFirst] = useDebugState("first",[])
  const [second, setSecond] = useDebugState("second",[])
  const [third, setThird] = useDebugState("third",[])
  const [winningTeams, setWinningTeams] = useDebugState("winningTeams",[])
  const [association, setAssociation] = useDebugState("association",[])
  const [afTeams, setAfTeams] = useDebugState("afTeams",[])
  const [vfTeams, setVfTeams] = useDebugState("vfTeams",[])
  const [hfTeams, setHfTeams] = useDebugState("hfTeams",[])
  const [teams3P, setTeams3P] = useDebugState("teams3P", [])
  const [fTeams, setFTeams] = useDebugState("fTeams",[])
  const [champion, setChampion] = useDebugState("champion",null)
  useEffect(() => {
    document.title = `${locales("WorldCup")} 2015`
  }, [])
  useEffect(() => {
    const aTeamAF1 = first[1]
    const bTeamAF1 = winningTeams[association.indexOf(1)]
    const teamsAF1 = [aTeamAF1, bTeamAF1]
    const aTeamAF2 = second[0]
    const bTeamAF2 = second[2]
    const teamsAF2 = [aTeamAF2, bTeamAF2]
    const aTeamAF3 = first[4]
    const bTeamAF3 = second[3]
    const teamsAF3 = [aTeamAF3, bTeamAF3]
    const aTeamAF4 = first[5]
    const bTeamAF4 = second[4]
    const teamsAF4 = [aTeamAF4, bTeamAF4]
    const aTeamAF5 = first[0]
    const bTeamAF5 = winningTeams[association.indexOf(7)]
    const teamsAF5 = [aTeamAF5, bTeamAF5]
    const aTeamAF6 = second[1]
    const bTeamAF6 = second[5]
    const teamsAF6 = [aTeamAF6, bTeamAF6]
    const aTeamAF7 = first[3]
    const bTeamAF7 = winningTeams[association.indexOf(3)]
    const teamsAF7 = [aTeamAF7, bTeamAF7]
    const aTeamAF8 = first[2]
    const bTeamAF8 = winningTeams[association.indexOf(5)]
    const teamsAF8 = [aTeamAF8, bTeamAF8]
    const teamsAF = [teamsAF1, teamsAF2, teamsAF3, teamsAF4, teamsAF5, teamsAF6, teamsAF7, teamsAF8]
    setAfTeams(teamsAF)
  })
  useEffect(() => {
    const aTeamVF1 = getKoTeams(matchaf, 0, first[1], winningTeams[association.indexOf(1)])
    const bTeamVF1 = getKoTeams(matchaf, 3, first[5], second[4])
    const teamsVF1 = [aTeamVF1, bTeamVF1]
    const aTeamVF2 = getKoTeams(matchaf, 1, second[0], second[2])
    const bTeamVF2 = getKoTeams(matchaf, 6, first[3], winningTeams[association.indexOf(3)])
    const teamsVF2 = [aTeamVF2, bTeamVF2]
    const aTeamVF3 = getKoTeams(matchaf, 2, first[4], second[3])
    const bTeamVF3 = getKoTeams(matchaf, 7, first[2], winningTeams[association.indexOf(5)])
    const teamsVF3 = [aTeamVF3, bTeamVF3]
    const aTeamVF4 = getKoTeams(matchaf, 5, second[1], second[5])
    const bTeamVF4 = getKoTeams(matchaf, 4, first[0], winningTeams[association.indexOf(7)])
    const teamsVF4 = [aTeamVF4, bTeamVF4]
    const teamsVF = [teamsVF1, teamsVF2, teamsVF3, teamsVF4]
    setVfTeams(teamsVF)
  }, [matchaf, winningTeams, association, first, second])
  useEffect(() => {
    const aTeamHF1 = getKoTeam(matchvf, 1, vfTeams[1], 0, vfTeams[1], 1)
    const bTeamHF1 = getKoTeam(matchvf, 0, vfTeams[0], 0, vfTeams[0], 1)
    const teamsHF1 = [aTeamHF1, bTeamHF1]
    const aTeamHF2 = getKoTeam(matchvf, 2, vfTeams[2], 0, vfTeams[2], 1)
    const bTeamHF2 = getKoTeam(matchvf, 3, vfTeams[3], 0, vfTeams[3], 1)
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
    const mergedGroups = [groupA, groupB, groupC, groupD, groupE, groupF]
    const firstPlace = mergedGroups.map(group => group[0])
    const secondPlace = mergedGroups.map(group => group[1])
    const thirdPlace = mergedGroups.map(group => group[2])
    const sortedThird = thirdPlace.sort((a, b) => {
      const aUefa = uefaCoefficient.indexOf(a.team)
      const bUefa = uefaCoefficient.indexOf(b.team)
      if (a.points > b.points) {
        return -1
      } else if (b.points > a.points) {
        return +1
      } else if (a.goalDifference > b.goalDifference) {
        return -1
      } else if (b.goalDifference > a.goalDifference) {
        return +1
      } else if (a.fairPlay < b.fairPlay) {
        return -1
      } else if (b.fairPlay < a.fairPlay) {
        return +1
      }
      return aUefa - bUefa
    })
    const bestThirds = sortedThird.slice(0, 4).map(item => {
      if (item && item.hasOwnProperty("group") && item.hasOwnProperty("team")) {
        const { group, team } = item
        return { group, team }
      }
      return {}
    })
    const winningCombination = bestThirds.map(item => {
      return item.group || ""
    }).sort((a, b) => a < b ? -1 : +1).join("")
    const wTeams = bestThirds.sort((a, b) => a.group < b.group ? -1 : +1).map(item => item.team)
    const assoc = getAssociation16(winningCombination)
    setFirst(firstPlace)
    setSecond(secondPlace)
    setThird(sortedThird)
    setWinningTeams(wTeams)
    setAssociation(assoc)
  }, [groupA, groupB, groupC, groupD, groupE, groupF])
  const lang = navigator.language
  return (
    <div className="App" sx={{ textAlign: "center", py: "16px", backgroundColor: "bg", color: "ft" }}>
      <h1 sx={{ fontSize: 3, fontWeight: "bold", my: "8px", px: ["4px", "4px", "0px"], hyphens: ["auto", "none"] }} lang={lang}>
        <span>{locales("WorldCup")}</span>{" "}
        <span>2015</span>
      </h1>
      <header className="App-header" sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr", "1fr 2fr"], borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "ft" }}>
        <aside sx={{ width: "100%" }}>
          <MatchList matches={matches} />
        </aside>
        <main sx={{ width: "100%" }}>
          <TableSet
            matches={matches}
            groupA={groupA}
            groupB={groupB}
            groupC={groupC}
            groupD={groupD}
            groupE={groupE}
            groupF={groupF}
            setGroupA={setGroupA}
            setGroupB={setGroupB}
            setGroupC={setGroupC}
            setGroupD={setGroupD}
            setGroupE={setGroupE}
            setGroupF={setGroupF}
            coefficient={uefaCoefficient}
            modus="wc"
          />
           <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(6,1fr)"] }}>
            <TableThird third={third} maxColumns={6} />
            <AchtelfinaleNew teams={afTeams} matchaf={matchaf} maxColumn={6} />
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

export default WWC15;
