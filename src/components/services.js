import React from "react"
import { gsap } from "gsap"

const Services = () => (
  <div className="services">
    <div className="services__cover">
      <img
        className="services__cover__img"
        src="https://i.imgur.com/8fPReyl.jpg"
        alt=""
      />
      <div className="services__cover__black"></div>
    </div>
    <div class="services__image"></div>
    <div class="services__columns">
      <div class="services__column services__column--one">Live</div>
      <div class="services__column services__column--two">Hybrid</div>
      <div class="services__column services__column--three">Virtual</div>
    </div>
  </div>
)

setTimeout(() => {
  const background = document.querySelector(".services__columns")
  const image = document.querySelector(".services__image")
  const columns = document.querySelectorAll(".services__column")
  const images = [
    "https://i2.wp.com/immersiveav.com/wp-content/uploads/2021/04/Website-Tech-production-menu-2.jpg?w=1920&ssl=1",
    "https://i.imgur.com/l2ol4RX.jpg",
    "https://i.imgur.com/76cxmqD.jpg",
  ]

  const tlImage = gsap.timeline()

  columns.forEach((column, i) => {
    column.addEventListener("mouseover", e => {
      column.style.background = "rgba(0, 0, 0, 0.6)"
      image.style.backgroundImage = "url(" + images[i] + ")"

      tlImage.clear()

      tlImage
        .to(".services__cover__img", {
          opacity: 0,
          // scale: 1.2,
          // ease: "power4.easeOut",
          duration: 0.001,
        })
        .fromTo(
          ".services__image",
          {
            opacity: 0,
            scale: 1,
          },
          {
            opacity: 1,
            scale: 1.2,
            ease: "power4.easeOut",
            duration: 1,
          }
        )
    })
  })

  columns.forEach(column => {
    column.addEventListener("mouseout", e => {
      column.style.background = "rgba(50, 50, 50, 0)"
      tlImage.clear()
      tlImage
        .to(".services__image", {
          scale: 1,
          opacity: 0,
          ease: "power4.easeOut",
          duration: 1,
        })
        .to(
          ".services__cover__img",
          {
            opacity: 1,
            ease: "power4.easeOut",
            duration: 1,
          },
          "-=0.95"
        )
    })
  })
}, 1000)

export default Services
