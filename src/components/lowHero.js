import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import CoverImage from "../images/cover.png"
import PosterImage from "../images/poster.jpg"
import HeroVideo from "../videos/immersiveav.mp4"

const LowHero = props => {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger)
      }

      let tlLowHero = gsap.timeline()
      tlLowHero.from(".low-hero", {
        scrollTrigger: {
          trigger: ".new-footer",
          scrub: true,
        },
        scale: 2.5,
      })
      // tlLowHero
      //   .to(".low-hero__parent__magnet", {
      //     scrollTrigger: {
      //       trigger: ".new-footer",
      //       scrub: true,
      //     },
      //     scale: 1,
      //   })
      //   .from(".low-hero__image", {
      //     scrollTrigger: {
      //       trigger: ".new-footer",
      //       scrub: true,
      //     },
      //     scale: 1,
      //   })
      // tlLowHero
      //   .to(".low-hero__parent__magnet", {
      //     scrollTrigger: {
      //       trigger: firstBreak,
      //       scrub: true,
      //     },
      //     scale: 2.5,
      //   })
      //   .to(".low-hero__image", {
      //     scrollTrigger: {
      //       trigger: firstBreak,
      //       scrub: true,
      //     },
      //     scale: 2.5,
      //   })
      //   .to(".low-hero__image", {
      //     immediateRender: false,
      //     scrollTrigger: {
      //       trigger: ".footer",
      //       scrub: true,
      //     },
      //     scale: 1,
      //   })
      //   .to(".low-hero__parent__magnet", {
      //     immediateRender: false,
      //     scrollTrigger: {
      //       trigger: ".footer",
      //       scrub: true,
      //     },
      //     scale: 1,
      //   })
    }, 100)
  })
  return (
    <div className="low-hero">
      <div className="low-hero__parent">
        <img src={CoverImage} alt="" className="low-hero__image" />
        <video
          className="low-hero__parent__magnet"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          poster={PosterImage}
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  )
}

export default LowHero
