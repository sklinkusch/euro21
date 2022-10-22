/** @jsxImportSource theme-ui */
import React, { Fragment } from 'react'
import Flag from "react-world-flags"
import GB_NIR from "../images/GB_NIR.svg"
import SU from "../images/SU.svg"
import SU_CIS from "../images/SU_CIS.svg"
import TW_OLY from "../images/TW_OLY.svg"
import YU_SCG from "../images/YU_SCG.svg"
import { participantName } from './countries'

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
    case "Q23A":
      return (
        <Fragment>
          <Flag code="CM" title={participantName("CM")} sx={{ height: "14px", maxWidth: "22px", mr: "8px" }} />
          <Flag code="TH" title={participantName("TH")} sx={{ height: "14px", maxWidth: "22px", mr: "8px" }} />
          <Flag code="PT" title={participantName("PT")} sx={{ height: "14px", maxWidth: "22px", mr: "8px" }} />
        </Fragment>
      )
    case "Q23B":
      return (
        <Fragment>
          <Flag code="SN" title={participantName("SN")} sx={{ height: "14px", maxWidth: "22px", mr: "8px" }} />
          <Flag code="HT" title={participantName("HT")} sx={{ height: "14px", maxWidth: "22px", mr: "8px" }} />
          <Flag code="CL" title={participantName("CL")} sx={{ height: "14px", maxWidth: "22px", mr: "8px" }} />
        </Fragment>
      )
    case "Q23C":
      return (
        <Fragment>
          <img src={TW_OLY} alt={participantName("TW-OLY")} title={participantName("TW-OLY")} sx={{ height: "14px", maxWidth: "22px", marginRight: "8px" }} />
          <Flag code="PY" title={participantName("PY")} sx={{ height: "14px", maxWidth: "22px" }} />
          <Flag code="PG" title={participantName("PG")} sx={{ height: "14px", maxWidth: "22px" }} />
          <Flag code="PA" title={participantName("PA")} sx={{ height: "14px", maxWidth: "22px" }} />
        </Fragment>
      )
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