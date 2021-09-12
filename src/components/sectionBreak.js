import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const SectionBreak = props => {
  useEffect(() => {})
  return (
    <div
      className="break"
      style={{
        backgroundColor: props.backgroundColour,
        color: props.textColour,
      }}
    >
      <div className="break__container">
        <h1 className="break__container__h1">{props.h1}</h1>
        {props.p && <p className="break__container__p">{props.p}</p>}
      </div>
    </div>
  )
}

// setTimeout(() => {
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

//   ScrollTrigger.refresh()

//   const divs = gsap.utils.toArray(".break__container")
//   divs.forEach(div => {
//     gsap.to(div, {
//       x: 0,
//       yPercent: 0,
//       scrollTrigger: {
//         trigger: div,
//         scrub: true,
//       },
//     })
//   })

//   // let tlBreak = gsap.timeline({
//   //   scrollTrigger: {
//   //     trigger: ".break",
//   //     scrub: true,
//   //   },
//   // })
//   // tlBreak.from(".break__container", { yPercent: -50 }, "+=0")
// }, 100)

export default SectionBreak
