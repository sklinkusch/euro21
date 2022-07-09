/** @jsxImportSource theme-ui */
import React from 'react'
import Flag from "react-world-flags"
import GB_NIR from "../images/GB_NIR.svg"

function FlagWrapper({ team, participant }) {
  if (team === "GB-NIR") {
    return <img src={GB_NIR} alt={participant} title={participant} sx={{ height: "14px", maxWidth: "22px", marginRight: "8px" }} />
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