import React, { useEffect } from "react"
import { gsap } from "gsap"
import IconDot from "../svg/expo-hire-dot.svg"

const HireExpo = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll(".hire-expo__boxes__box")
    const hireExpoImage = document.querySelector(".hire-expo__image")
    // const images = ["../images/hire.jpg", "../images/expo.jpg"]
    const images = [
      "https://i2.wp.com/immersiveav.com/wp-content/uploads/2021/04/Website-Tech-production-menu-2.jpg?w=1920&ssl=1",
      "https://i1.wp.com/immersiveav.com/wp-content/uploads/2021/04/Website-xR-1.jpg?w=1920&ssl=1",
    ]

    const tlHireExpo = gsap.timeline()

    // const box0 = document.querySelector(".hire-expo__boxes__box--0")
    // const box1 = document.querySelector(".hire-expo__boxes__box--1")

    // box0.addEventListener("mouseenter", e => {
    //   hireExpoImage.style.backgroundImage = `url(${images[0]})`
    //   tlHireExpo.clear()

    //   tlHireExpo
    //     .to(".hire-expo__bg", {
    //       opacity: 0,
    //       // scale: 1.2,
    //       // ease: "power4.easeOut",
    //       duration: 0.001,
    //     })
    //     .fromTo(
    //       hireExpoImage,
    //       {
    //         opacity: 0,
    //         scale: 1,
    //       },
    //       {
    //         opacity: 1,
    //         scale: 1.2,
    //         ease: "power4.easeOut",
    //         duration: 1,
    //       }
    //     )
    //   // .to(
    //   //   ".hire-expo__boxes__box__h1--0",
    //   //   {
    //   //     yPercent: -50,
    //   //   },
    //   //   "-=0.8"
    //   // )
    //   // .fromTo(
    //   //   ".hire-expo__boxes__box__btn--0",
    //   //   {
    //   //     xPercent: -10,
    //   //     opacity: 0,
    //   //   },
    //   //   {
    //   //     xPercent: -50,
    //   //     opacity: 1,
    //   //   },
    //   //   "-=0.8"
    //   // )
    // })

    // box0.addEventListener("mouseleave", e => {
    //   tlHireExpo.clear()

    //   tlHireExpo
    //     .to(hireExpoImage, {
    //       scale: 1,
    //       opacity: 0,
    //       ease: "power4.easeOut",
    //       duration: 1,
    //     })
    //     .to(
    //       ".hire-expo__bg",
    //       {
    //         opacity: 1,
    //         ease: "power4.easeOut",
    //         duration: 1,
    //       },
    //       "-=0.95"
    //     )
    //   // .to(
    //   //   ".hire-expo__boxes__box__h1--0",
    //   //   {
    //   //     yPercent: 0,
    //   //   },
    //   //   "-=0.8"
    //   // )
    //   // .to(
    //   //   ".hire-expo__boxes__box__btn--0",
    //   //   {
    //   //     xPercent: -10,
    //   //     opacity: 0,
    //   //   },
    //   //   "-=0.8"
    //   // )
    // })

    // box1.addEventListener("mouseenter", e => {
    //   hireExpoImage.style.backgroundImage = `url(${images[1]})`
    //   tlHireExpo.clear()

    //   tlHireExpo
    //     .to(".hire-expo__bg", {
    //       opacity: 0,
    //       // scale: 1.2,
    //       // ease: "power4.easeOut",
    //       duration: 0.001,
    //     })
    //     .fromTo(
    //       hireExpoImage,
    //       {
    //         opacity: 0,
    //         scale: 1,
    //       },
    //       {
    //         opacity: 1,
    //         scale: 1.2,
    //         ease: "power4.easeOut",
    //         duration: 1,
    //       }
    //     )
    //   // .to(
    //   //   ".hire-expo__boxes__box__h1--1",
    //   //   {
    //   //     yPercent: -50,
    //   //   },
    //   //   "-=0.8"
    //   // )
    //   // .fromTo(
    //   //   ".hire-expo__boxes__box__btn--1",
    //   //   {
    //   //     xPercent: -10,
    //   //     opacity: 0,
    //   //   },
    //   //   {
    //   //     xPercent: -50,
    //   //     opacity: 1,
    //   //   },
    //   //   "-=0.8"
    //   // )
    // })

    // box1.addEventListener("mouseleave", e => {
    //   tlHireExpo.clear()

    //   tlHireExpo
    //     .to(hireExpoImage, {
    //       scale: 1,
    //       opacity: 0,
    //       ease: "power4.easeOut",
    //       duration: 1,
    //     })
    //     .to(
    //       ".hire-expo__bg",
    //       {
    //         opacity: 1,
    //         ease: "power4.easeOut",
    //         duration: 1,
    //       },
    //       "-=0.95"
    //     )
    //   // .to(
    //   //   ".hire-expo__boxes__box__h1--1",
    //   //   {
    //   //     yPercent: 0,
    //   //   },
    //   //   "-=0.8"
    //   // )
    //   // .to(
    //   //   ".hire-expo__boxes__box__btn--1",
    //   //   {
    //   //     xPercent: -10,
    //   //     opacity: 0,
    //   //   },
    //   //   "-=0.8"
    //   // )
    // })

    boxes.forEach((box, i) => {
      box.addEventListener("mouseenter", e => {
        hireExpoImage.style.backgroundImage = "url(" + images[i] + ")"

        tlHireExpo.clear()

        tlHireExpo
          .to(".hire-expo__bg", {
            opacity: 0,
            // scale: 1.2,
            // ease: "power4.easeOut",
            duration: 0.001,
          })
          .fromTo(
            hireExpoImage,
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
        // .to(
        //   ".hire-expo__boxes__box__h1--" + i,
        //   {
        //     yPercent: -50,
        //   },
        //   "-=0.8"
        // )
        // .fromTo(
        //   ".hire-expo__boxes__box__btn--" + i,
        //   {
        //     xPercent: -10,
        //     opacity: 0,
        //   },
        //   {
        //     xPercent: -50,
        //     opacity: 1,
        //   },
        //   "-=0.8"
        // )
      })
    })

    boxes.forEach((box, i) => {
      box.addEventListener("mouseleave", e => {
        tlHireExpo.clear()

        tlHireExpo
          .to(hireExpoImage, {
            scale: 1,
            opacity: 0,
            ease: "power4.easeOut",
            duration: 1,
          })
          .to(
            ".hire-expo__bg",
            {
              opacity: 1,
              ease: "power4.easeOut",
              duration: 1,
            },
            "-=0.95"
          )
        // .to(
        //   ".hire-expo__boxes__box__h1--" + i,
        //   {
        //     yPercent: 0,
        //   },
        //   "-=0.8"
        // )
        // .to(
        //   ".hire-expo__boxes__box__btn--" + i,
        //   {
        //     xPercent: -10,
        //     opacity: 0,
        //   },
        //   "-=0.8"
        // )
      })
    })
  })
  return (
    <div className="hire-expo">
      <div className="hire-expo__bg">
        <img
          src="https://i0.wp.com/immersiveav.com/wp-content/uploads/2020/01/DirectLine_PinPEP_003.jpg?w=1832&ssl=1"
          alt=""
        />
      </div>
      <div className="hire-expo__image"></div>
      <div className="hire-expo__cover"></div>
      <div className="hire-expo__boxes">
        <div
          className="hire-expo__boxes__box hire-expo__boxes__box--0"
          // style={{ marginRight: "40px" }}
        >
          <img src="" alt="" />
          <h1 className="hire-expo__boxes__box__h1 hire-expo__boxes__box__h1--0">
            Hire
          </h1>
          <button className="hire-expo__boxes__box__btn hire-expo__boxes__box__btn--0">
            Discover
          </button>
          <h2 className="hire-expo__boxes__box__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
        <div
          className="hire-expo__boxes__box hire-expo__boxes__box--1"
          // style={{ marginLeft: "40px" }}
        >
          <img src="" alt="" />
          <h1 className="hire-expo__boxes__box__h1 hire-expo__boxes__box__h1--1">
            Expo
          </h1>
          <button className="hire-expo__boxes__box__btn hire-expo__boxes__box__btn--1">
            Discover
          </button>
          <h2 className="hire-expo__boxes__box__description hire-expo__boxes__box__description--1">
            Aliquam vel neque et urna fermentum vestibulum condimentum a mi.
          </h2>
        </div>
      </div>
      <div className="hire-expo__dot">
        <img src={IconDot} alt="" />
      </div>
    </div>
  )
}

export default HireExpo
