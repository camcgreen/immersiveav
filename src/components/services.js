import React, { useEffect } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"

import Services1 from "../images/services-1.jpeg"
import Services2 from "../images/services-2.jpeg"
import Services3 from "../images/services-3.jpeg"
import ServicesPlaceholder from "../images/services-placeholder.jpeg"

const Services = () => {
  useEffect(() => {
    setTimeout(() => {
      const background = document.querySelector(".services__columns")
      const image = document.querySelector(".services__image")
      const columns = document.querySelectorAll(".services__column")
      // const images = [
      //   "https://i2.wp.com/immersiveav.com/wp-content/uploads/2021/04/Website-Tech-production-menu-2.jpg?w=1920&ssl=1",
      //   "https://i1.wp.com/immersiveav.com/wp-content/uploads/2021/04/Website-xR-1.jpg?w=1920&ssl=1",
      //   "https://i.imgur.com/76cxmqD.jpg",
      // ]

      const images = [Services1, Services2, Services3]

      const tlImage = gsap.timeline()

      columns.forEach((column, i) => {
        column.addEventListener("mouseenter", e => {
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
        column.addEventListener("mouseleave", e => {
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
      const discoverTl = gsap.timeline()
      const discoverText = document.querySelectorAll(".services__column__btn")
      // console.log(discoverText)
      discoverText.forEach(text => {
        // console.log(text)
        text.addEventListener("mouseenter", e => {
          discoverTl.clear()
          discoverTl.to(text, {
            color: "#3061e0",
            duration: 0.5,
            ease: "power4.easeOut",
          })
        })
      })
      discoverText.forEach(text => {
        // console.log(text)
        text.addEventListener("mouseleave", e => {
          discoverTl.clear()
          discoverTl.to(text, {
            color: "white",
            duration: 0.5,
            ease: "power4.easeOut",
          })
        })
      })
    }, 100)
  })
  return (
    <div className="services">
      <div className="services__cover">
        <img
          className="services__cover__img"
          // src="https://i.imgur.com/8fPReyl.jpg"
          src={ServicesPlaceholder}
          alt=""
        />
        <div className="services__cover__black"></div>
      </div>
      <div className="services__image"></div>
      <div className="services__columns">
        <div
          className="services__column services__column--one"
          // onClick={() => (window.location = "/services/live")}
        >
          <Link to="/services/live">
            <h1 className="services__column__h1">Live</h1>
            <button className="services__column__btn services__column__btn--one">
              Discover more
            </button>
          </Link>
        </div>
        <div className="services__column services__column--two">
          <Link to="/services/hybrid">
            <h1 className="services__column__h1">Hybrid</h1>
            <button className="services__column__btn services__column__btn--two">
              Discover more
            </button>
          </Link>
        </div>
        <div className="services__column services__column--three">
          <Link to="/services/virtual">
            <h1 className="services__column__h1">Virtual</h1>
            <button className="services__column__btn services__column__btn--three">
              Discover more
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services
