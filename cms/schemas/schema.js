import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import TournamentSeries from "./TournamentSeries"
import Tournament from "./Tournament"
import Team from "./Team"
import MatchResult from "./MatchResult"
import Match from "./Match"
import Group from "./Group"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    TournamentSeries,
    Tournament,
    Team,
    MatchResult,
    Match,
    Group
  ])
})