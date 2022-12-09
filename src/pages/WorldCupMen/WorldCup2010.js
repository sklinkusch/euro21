/** @jsxImportSource theme-ui */
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDebugState } from "use-named-state"
import { MatchListEight } from "../../components/MatchList"
import matches, { matchaf, matchvf, matchhf, match3p, matchf  } from "../../data/WorldCupMen/matches_wc2010"
import { TableSetEight } from "../../components/Table"
import { Achtelfinale } from "../../components/Achtelfinale"
import { Viertelfinale } from "../../components/Viertelfinale"
import { Halbfinale } from '../../components/Halbfinale';
import { getKoTeams, getKoTeam, FlagSet, getChampion, getLoser } from '../../components/helpers';
import { Finale, Platz3 } from '../../components/Finale';
import { localeName as locales } from '../../components/countries';
/* eslint-disable react-hooks/exhaustive-deps */

function WorldCup2010() {
  const fifaWorldRank = ["BR", "BE", "FR", "AR", "GB-ENG", "ES", "PT", "MX", "NL", "DK", "DE", "UY", "CH", "US", "HR", "GB-WLS", "SN", "IR", "PE", "JP", "MA", "RS", "PL", "UA", "KR", "CR", "TN", "CM", "CA", "GB-SCT", "AU", "EC", "QA", "GH", "AE", "NZ"]
  const [groupA, setGroupA] = useDebugState("groupA",[])
  const [groupB, setGroupB] = useDebugState("groupB",[])
  const [groupC, setGroupC] = useDebugState("groupC",[])
  const [groupD, setGroupD] = useDebugState("groupD",[])
  const [groupE, setGroupE] = useDebugState("groupE",[])
  const [groupF, setGroupF] = useDebugState("groupF",[])
  const [groupG, setGroupG] = useDebugState("groupG",[])
  const [groupH, setGroupH] = useDebugState("groupH",[])
  const [first, setFirst] = useDebugState("first",[])
  const [second, setSecond] = useDebugState("second",[])
  const [afTeams, setAfTeams] = useDebugState("afteams", [])
  const [vfTeams, setVfTeams] = useDebugState("vfTeams",[])
  const [hfTeams, setHfTeams] = useDebugState("hfTeams",[])
  const [teams3P, setTeams3P] = useDebugState("teams3P",[])
  const [fTeams, setFTeams] = useDebugState("fTeams",[])
  const [champion, setChampion] = useDebugState("champion",null)
  useEffect(() => {
    document.title = `${locales("WorldCup")} 2010`
  }, [])
  useEffect(() => {
    const aTeamAF1 = first[0]
    const bTeamAF1 = second[1]
    const teamsAF1 = [aTeamAF1, bTeamAF1]
    const aTeamAF2 = first[2]
    const bTeamAF2 = second[3]
    const teamsAF2 = [aTeamAF2, bTeamAF2]
    const aTeamAF3 = first[3]
    const bTeamAF3 = second[2]
    const teamsAF3 = [aTeamAF3, bTeamAF3]
    const aTeamAF4 = first[1]
    const bTeamAF4 = second[0]
    const teamsAF4 = [aTeamAF4, bTeamAF4]
    const aTeamAF5 = first[4]
    const bTeamAF5 = second[5]
    const teamsAF5 = [aTeamAF5, bTeamAF5]
    const aTeamAF6 = first[6]
    const bTeamAF6 = second[7]
    const teamsAF6 = [aTeamAF6, bTeamAF6]
    const aTeamAF7 = first[5]
    const bTeamAF7 = second[4]
    const teamsAF7 = [aTeamAF7, bTeamAF7]
    const aTeamAF8 = first[7]
    const bTeamAF8 = second[6]
    const teamsAF8 = [aTeamAF8, bTeamAF8]
    const teamsAF = [teamsAF1, teamsAF2, teamsAF3, teamsAF4, teamsAF5, teamsAF6, teamsAF7, teamsAF8]
    setAfTeams(teamsAF)
  })
  useEffect(() => {
    const aTeamVF1 = getKoTeams(matchaf, 2, first[4], second[5])
    const bTeamVF1 = getKoTeams(matchaf, 3, first[6], second[7])
    const teamsVF1 = [aTeamVF1, bTeamVF1]
    const aTeamVF2 = getKoTeams(matchaf, 0, first[0], second[1])
    const bTeamVF2 = getKoTeams(matchaf, 1, first[2], second[3])
    const teamsVF2 = [aTeamVF2, bTeamVF2]
    const aTeamVF3 = getKoTeams(matchaf, 4, first[1], second[0])
    const bTeamVF3 = getKoTeams(matchaf, 5, first[3], second[2])
    const teamsVF3 = [aTeamVF3, bTeamVF3]
    const aTeamVF4 = getKoTeams(matchaf, 6, first[5], second[4])
    const bTeamVF4 = getKoTeams(matchaf, 7, first[7], second[6])
    const teamsVF4 = [aTeamVF4, bTeamVF4]
    const teamsVF = [teamsVF1, teamsVF2, teamsVF3, teamsVF4]
    setVfTeams(teamsVF)
  }, [matchaf, first, second])
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
    setFTeams(teamsF)
    setTeams3P(myTeams3P)
  }, [matchhf, hfTeams])
  useEffect(() => {
    const myChampion = getChampion(matchf, fTeams[0], fTeams[1])
    setChampion(myChampion)
  })
  useEffect(() => {
    const mergedGroups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH]
    const firstPlace = mergedGroups.map(group => group[0])
    const secondPlace = mergedGroups.map(group => group[1])
    setFirst(firstPlace)
    setSecond(secondPlace)
  }, [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH])
  const lang = navigator.language
  return (
    <div className="App" sx={{ textAlign: "center", py: "16px", backgroundColor: "bg", color: "ft" }}>
      <h1 sx={{ fontSize: 3, fontWeight: "bold", my: "8px", px: ["4px", "4px", "0px"], hyphens: ["auto", "none"] }} lang={lang}>
        <span>{locales("WorldCup")}</span>{" "}
        <span>2010</span>
      </h1>
      <header className="App-header" sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr", "1fr 2fr"], borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "ft" }}>
        <aside sx={{ width: "100%" }}>
          <MatchListEight matches={matches} />
        </aside>
        <main sx={{ width: "100%" }}>
          <TableSetEight
            matches={matches}
            groupA={groupA}
            groupB={groupB}
            groupC={groupC}
            groupD={groupD}
            groupE={groupE}
            groupF={groupF}
            groupG={groupG}
            groupH={groupH}
            setGroupA={setGroupA}
            setGroupB={setGroupB}
            setGroupC={setGroupC}
            setGroupD={setGroupD}
            setGroupE={setGroupE}
            setGroupF={setGroupF}
            setGroupG={setGroupG}
            setGroupH={setGroupH}
            coefficient={fifaWorldRank}
            modus="wc"
          />
           <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"] }}>
            <Achtelfinale teams={afTeams} matchaf={matchaf} />
            <Viertelfinale teams={vfTeams} matchvf={matchvf} />
            <Halbfinale teams={hfTeams} matchhf={matchhf} />
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

export default WorldCup2010