import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import CoverImage from "../images/cover.png"
import PosterImage from "../images/poster.jpg"
import HeroVideo from "../videos/immersiveav.mp4"

const Hero = props => {
  useEffect(() => {
    setTimeout(() => {
      // const magnetParents = [
      //   document.querySelector(".hero"),
      //   document.querySelector(".header"),
      // ]
      // const magnet = document.querySelector(".hero__parent__magnet")

      // magnetParents.forEach(parent => {
      //   parent.addEventListener("mousemove", e => {
      //     const pos = magnet.getBoundingClientRect()
      //     const x = e.pageX - pos.left - pos.width / 2
      //     const y = e.pageY - pos.top - pos.height / 2

      //     magnet.style.transform =
      //       "translate(" + x * 0.045 + "px, " + y * 0.045 + "px)"
      //   })

      //   parent.addEventListener("mouseout", e => {
      //     magnet.style.transform = "translate(0px, 0px)"
      //   })
      // })

      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger)
      }

      ScrollTrigger.getAll().forEach(instance => {
        // instance.kill()
      })
      // This in case a scroll animation is active while the route is updated
      // gsap.killTweensOf(window)

      ScrollTrigger.refresh()

      const breaksArr = gsap.utils.toArray(".break")
      const firstBreak = breaksArr[0]
      // const firstBreak = props.ref
      let tlHero = gsap.timeline()
      tlHero
        .to(".hero__parent__magnet", {
          // immediateRender: true,
          scrollTrigger: {
            trigger: firstBreak,
            scrub: true,
          },
          scale: 2.5,
        })
        .to(".hero__image", {
          immediateRender: false,
          scrollTrigger: {
            trigger: firstBreak,
            scrub: true,
          },
          scale: 2.5,
        })
        .to(".hero__image", {
          immediateRender: false,
          scrollTrigger: {
            trigger: ".new-footer",
            scrub: true,
          },
          scale: 1,
        })
        .to(".hero__parent__magnet", {
          immediateRender: false,
          scrollTrigger: {
            trigger: ".new-footer",
            scrub: true,
          },
          scale: 1,
        })
    }, 100)
  })
  return (
    <div className="hero">
      <div className="hero__parent">
        <img src={CoverImage} alt="" className="hero__image" />
        <video
          className="hero__parent__magnet"
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
      <h1 className="hero__title link">We create experiences</h1>
    </div>
  )
}

export default Hero
