import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

const SectionBreak = props => {
  useEffect(() => {
    // const sectionHeaders = document.querySelectorAll(".break__container__h1")
    // const sectionParas = document.querySelectorAll(".break__container__p")
    // sectionHeaders.forEach((header, i) => {
    //   header.addEventListener("mouseenter", () => {
    //     let headerTl = gsap.timeline()
    //     headerTl.to(header, {
    //       y: -10,
    //       duration: 0.2,
    //       ease: "power4.easeOut",
    //     })
    //   })
    //   header.addEventListener("mouseleave", () => {
    //     let headerTl = gsap.timeline()
    //     headerTl.to(header, {
    //       y: 0,
    //       duration: 0.2,
    //       ease: "power4.easeOut",
    //     })
    //   })
    // })
    // const breakReveal = gsap.timeline()
    // sectionHeaders.forEach((header, i) => {
    //   const headerReveal = gsap.timeline()
    //   headerReveal.fromTo(header, {
    //     xPercent: -100,
    //   }, {
    //     xPercent: 0,
    //     duration: 1,
    //     ease: 'power4.easeOut'
    //   })
    // })
    // if (typeof window !== "undefined") {
    //   gsap.registerPlugin(ScrollTrigger)
    // }
    // ScrollTrigger.refresh()
    // const sectionHeaders = gsap.utils.toArray(".break__container__h1")
    // sectionHeaders.forEach(header => {
    //   gsap.to(header, {
    //     x: 100,
    //     yPercent: 0,
    //     scrollTrigger: {
    //       trigger: header,
    //     },
    //   })
    // })
    // if (typeof window !== "undefined") {
    //   gsap.registerPlugin(ScrollTrigger)
    // }
    // // ScrollTrigger.refresh()
    // const divs = gsap.utils.toArray(".break__container")
    // divs.forEach(div => {
    //   gsap.to(div, {
    //     // yPercent: 0,
    //     duration: 0.2,
    //     ease: "power4.easeOut",
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: div,
    //     },
    //   })
    // })

    // if (typeof window !== "undefined") {
    //   gsap.registerPlugin(ScrollTrigger)
    //   gsap.registerPlugin(SplitText)
    // }
    // let sectionTl = gsap.timeline()
    // const sectionHeaders = gsap.utils.toArray(".break__container__h1")
    // // console.log(sectionHeaders)
    // new SplitText(sectionHeaders[0], {
    //   type: "lines",
    //   linesClass: "line-child",
    // })
    // new SplitText(sectionHeaders[0], {
    //   type: "lines",
    //   linesClass: "line-parent",
    // })
    // sectionTl.from(
    //   ".line-child",
    //   {
    //     duration: 1.8,
    //     y: 140,
    //     opacity: 0,
    //     ease: "power4.out",
    //     stagger: {
    //       amount: 0.2,
    //     },
    //   },
    //   "+=0"
    // )

    console.log("useEffect")
  }, [])
  return (
    <div
      className="break"
      style={{
        backgroundColor: props.backgroundColour,
        // backgroundColor: "rgba(48, 97, 224, 0.9)",
        color: props.textColour,
      }}
    >
      {/* <div className="break__bg"></div> */}
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

// ScrollTrigger.refresh()

//   const divs = gsap.utils.toArray(".break__container")
//   divs.forEach(div => {
//     gsap.to(div, {
//       x: 0,
//       yPercent: 0,
// scrollTrigger: {
//   trigger: div,
//   scrub: true,
// },
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
