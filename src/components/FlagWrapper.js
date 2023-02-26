/** @jsxImportSource theme-ui */
import React from 'react'
import Flag from "react-world-flags"
import GB_NIR from "../images/GB_NIR.svg"
import SU from "../images/SU.svg"
import SU_CIS from "../images/SU_CIS.svg"
import TW_OLY from "../images/TW_OLY.svg"
import YU_SCG from "../images/YU_SCG.svg"

function FlagWrapper({ team, participant }) {
  switch(team) {
    case "GB-NIR":
      return <img src={GB_NIR} alt={participant} title={participant} sx={{ height: "14px", maxWidth: "22px", marginRight: "8px" }} />
    case "SU":
      return <img src={SU} alt={participant} title={participant} sx={{ height: "14px", maxWidth: "22px", marginRight: "8px" }} />
    case "SU-CIS":
      return <img src={SU_CIS} alt={participant} title={participant} sx={{ height: "14px", maxWidth: "22px", marginRight: "8px" }} />
    case "TW-OLY":
      return <img src={TW_OLY} alt={participant} title={participant} sx={{ height: "14px", maxWidth: "22px", marginRight: "8px" }} />
    case "YU-BR":
    case "YU-SCG":
      return <img src={YU_SCG} alt={participant} title={participant} sx={{ height: "14px", maxWidth: "22px", marginRight: "8px" }} />
    default:
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
}

export default FlagWrapper