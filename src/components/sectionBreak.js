import React from "react"

const SectionBreak = props => (
  <div className="break" style={{ backgroundColor: props.colour }}>
    <h1 className="break__h1">{props.h1}</h1>
    {props.p && <p className="break__p">{props.p}</p>}
  </div>
)

export default SectionBreak
