/** @jsxImportSource theme-ui */
import React from 'react'
import Flag from "react-world-flags"
import GB_NIR from "../images/GB_NIR.svg"
import SU from "../images/SU.svg"
import SU_CIS from "../images/SU_CIS.svg"
import TW_OLY from "../images/TW_OLY.svg"
import YU_SCG from "../images/YU_SCG.svg"

function FlagWrapper({ team, participant, large = false }) {
  const styles = large ? { height: "21px", maxWidth: "30px", mr: "8px" } : { height: "14px", maxWidth: "22px", mr: "8px" }
  switch(team) {
    case "GB-NIR":
      return <img src={GB_NIR} alt={participant} title={participant} sx={{ ...styles }} />
    case "SU":
      return <img src={SU} alt={participant} title={participant} sx={{ ...styles }} />
    case "SU-CIS":
      return <img src={SU_CIS} alt={participant} title={participant} sx={{ ...styles }} />
    case "TW-OLY":
      return <img src={TW_OLY} alt={participant} title={participant} sx={{ ...styles }} />
    case "YU-BR":
    case "YU-SCG":
      return <img src={YU_SCG} alt={participant} title={participant} sx={{ ...styles }} />
    default:
      return (
        <Flag
          code={team}
          title={participant}
          sx={{
            ...styles
          }}
          fallback={<span>🏴‍☠️</span>}
        />
      )
  }
}

export default FlagWrapper