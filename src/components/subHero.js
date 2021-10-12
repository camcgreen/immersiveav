import React, { useEffect } from "react"
import HeroVideo from "../videos/immersiveav.mp4"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const SubHero = props => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (typeof window !== "undefined") {
  //       gsap.registerPlugin(ScrollTrigger)
  //     }

  //     const breaksArr = gsap.utils.toArray(".break")
  //     const firstBreak = breaksArr[0]
  //     let tlHero = gsap.timeline()

  //     tlHero
  //       .to(".sub-hero__parent__magnet", {
  //         scrollTrigger: {
  //           trigger: firstBreak,
  //           scrub: true,
  //         },
  //         scale: 2.5,
  //       })
  //       .to(".sub-hero__image", {
  //         scrollTrigger: {
  //           trigger: firstBreak,
  //           scrub: true,
  //         },
  //         scale: 2.5,
  //       })
  //       .to(".sub-hero__image", {
  //         immediateRender: false,
  //         scrollTrigger: {
  //           trigger: ".footer",
  //           scrub: true,
  //         },
  //         scale: 1,
  //       })
  //       .to(".sub-hero__parent__magnet", {
  //         immediateRender: false,
  //         scrollTrigger: {
  //           trigger: ".footer",
  //           scrub: true,
  //         },
  //         scale: 1,
  //       })
  //   }, 100)
  // })
  return (
    <div className="sub-hero">
      <div className="sub-hero__parent">
        <video
          className="sub-hero__parent__magnet"
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          poster="http://i.imgur.com/xHO6DbC.png"
        >
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <img
        src="https://i.imgur.com/kZKTTDI.png"
        alt=""
        className="sub-hero__image"
      />
      {/* <h1 className="sub-hero__title link">We create experiences.</h1> */}
    </div>
  )
}

export default SubHero
