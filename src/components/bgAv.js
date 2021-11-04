import React, { useEffect } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import bgBlue from "../svg/bg-blue.svg"
import bgOrange from "../svg/bg-orange.svg"
import bgArrowOrange from "../svg/bg-arrow-orange.svg"

const BgAv = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    ScrollTrigger.refresh()

    const bg = document.querySelector(".bg-av")
    let tlBg = gsap.timeline()
    tlBg
      .to(".bg-av__img--arrow-orange--about", {
        scrollTrigger: {
          trigger: ".about-page",
          // start: "top center",
          // end: "bottom top",
          scrub: 0.5,
        },
        scale: 0.5,
        // scale: 2.5,
        // skewX: 2,
        // skewY: 10,
        // xPercent: 25,
        // yPercent: -100,
        ease: "none",
      })
      .to(".bg-av__img--blue--about", {
        scrollTrigger: {
          trigger: ".about-page",
          // start: "top center",
          // end: "bottom top",
          scrub: 0.5,
        },
        // scale: 0.5,
        // scale: 2.5,
        // skewX: 2,
        // skewY: 10,
        // xPercent: 25,
        // yPercent: -100,
        ease: "none",
      })
  }, [])
  return (
    <div className="bg-av">
      <img
        className="bg-av__img bg-av__img--blue bg-av__img--blue--about"
        src={bgBlue}
        alt=""
      />
      <img
        className="bg-av__img bg-av__img--orange bg-av__img--orange--about"
        src={bgOrange}
        alt=""
      />
      <img
        className="bg-av__img bg-av__img--arrow-orange bg-av__img--arrow-orange--about"
        src={bgArrowOrange}
        alt=""
      />
    </div>
  )
}

export default BgAv
