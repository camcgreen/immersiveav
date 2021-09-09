import React from "react"
import HeroVideo from "../videos/immersiveav.mp4"
// require("../videos/immersiveav.mp4")

const Hero = () => (
  <div className="hero">
    <div class="hero__parent">
      <video
        class="hero__parent__magnet"
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
    <img src="https://i.imgur.com/kZKTTDI.png" alt="" class="hero__image" />
    <h1 class="hero__title">Lorem ipsum.</h1>
  </div>
)

setTimeout(() => {
  const magnetParent = document.querySelector(".hero")
  const magnet = document.querySelector(".hero__parent__magnet")

  magnetParent.addEventListener("mousemove", e => {
    const pos = magnet.getBoundingClientRect()
    const x = e.pageX - pos.left - pos.width / 2
    const y = e.pageY - pos.top - pos.height / 2

    magnet.style.transform =
      "translate(" + x * 0.045 + "px, " + y * 0.045 + "px)"
  })

  magnetParent.addEventListener("mouseout", e => {
    magnet.style.transform = "translate(0px, 0px)"
  })
}, 1000)

export default Hero
