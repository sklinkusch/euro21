/** @jsxImportSource theme-ui */
import React from 'react'
import Flag from "react-world-flags"
import GB_NIR from "../images/GB_NIR.svg"
import SU from "../images/SU.svg"
import SU_CIS from "../images/SU_CIS.svg"
import TW_OLY from "../images/TW_OLY.svg"
import YU_SCG from "../images/YU_SCG.svg"
import YU_SFR from "../images/YU_SFR.svg"

function FlagWrapper({ team, participant, large = false }) {
  const styles = large ? { height: "21px", maxWidth: "30px", minWidth: "21px", mr: "8px" } : { height: "14px", maxWidth: "22px", minWidth: "14px", mr: "8px" }
  switch(team) {
    case "GB-NIR":
      return <img src={GB_NIR} alt={participant} title={participant} sx={{ ...styles }} />
    case "CS":
      return <Flag code='CZ' alt={participant} title={participant} sx={{ ...styles }} />
    case "DE-BRD":
      return <Flag code='DE' alt={participant} title={participant} sx={{ ...styles }} />
    case "SU":
      return <img src={SU} alt={participant} title={participant} sx={{ ...styles }} />
    case "SU-CIS":
      return <img src={SU_CIS} alt={participant} title={participant} sx={{ ...styles }} />
    case "TW-OLY":
      return <img src={TW_OLY} alt={participant} title={participant} sx={{ ...styles }} />
    case "YU-BR":
    case "YU-SCG":
      return <img src={YU_SCG} alt={participant} title={participant} sx={{ ...styles }} />
    case "YU-SFR":
      return <img src={YU_SFR} alt={participant} title={participant} sx={{ ...styles }} />
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