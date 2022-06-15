/** @jsxImportSource theme-ui */
import React from 'react'
import Flag from "react-world-flags"

function FlagWrapper({ team, participant }) {
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