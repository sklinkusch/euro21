/** @jsxImportSource theme-ui */
import React from 'react'
import Flag from "react-world-flags"
import { participantName as participants } from "./countries"

function FlagWrapper({team, participant}) {
  if (team === "Q1") {
    return (
      <span sx={{ cursor: "default"}}>
        <span title={participants("AE")}>🇦🇪</span>
        <span title={participants("AU")}>🇦🇺</span>
        <span title={participants("PE")}>🇵🇪</span>
      </span>
      )
  }
  if (team === "Q2") {
    return (
    <span sx={{ cursor: "default"}}>
      <span title={participants("CR")}>🇨🇷</span>
      <span title={participants("NZ")}>🇳🇿</span>
    </span>
    )
  }
  if (team === "Q3") {
    return (
    <span sx={{ cursor: "default"}}>
      <span title={participants("GB-WLS")}>🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
      <span title={participants("GB-SCT")}>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
      <span title={participants("UA")}>🇺🇦</span>
    </span>
    )
  }
  return (
      <Flag 
        code={team} 
        title={participant} 
        sx={{ 
          height: "14px", 
          maxWidth: "22px", 
          marginRight: "8px" 
        }} 
        fallback={<span>🏴‍☠️</span>} 
      />
  )
}

export default FlagWrapper