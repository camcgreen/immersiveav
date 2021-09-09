import React from "react"
import { gsap } from "gsap"

const Services = () => (
  <div className="services">
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
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b9a21791534383.5e341720a5140.jpg",
    "https://c4.wallpaperflare.com/wallpaper/415/195/652/spots-reflections-soft-light-wallpaper-preview.jpg",
    "https://img.lovepik.com/photo/40064/5566.jpg_wh860.jpg",
  ]

  const tlImage = gsap.timeline()

  columns.forEach((column, i) => {
    column.addEventListener("mouseover", e => {
      column.style.background = "rgba(0, 0, 0, 0.6)"
      image.style.backgroundImage = "url(" + images[i] + ")"

      tlImage.clear()

      tlImage.fromTo(
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
      tlImage.to(".services__image", {
        scale: 1,
        opacity: 0,
        ease: "power4.easeOut",
        duration: 1,
      })
    })
  })
}, 1000)

export default Services
