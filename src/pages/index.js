import React, { useEffect, useState, useRef } from "react"
import "../styles/styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { customMouse } from "../utils/customMouse"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

//Import SVG
import AVLoader from "../svg/av-load.svg"

//Import components
import Header from "../components/header"
import Phone from "../components/phone"
import Hero from "../components/hero"
import SectionBreak from "../components/sectionBreak"
import Services from "../components/services"
import Showcase from "../components/showcase"
import Expo from "../components/expo"
import HireExpo from "../components/hire-expo"
import News from "../components/news"
import Footer from "../components/footer"

//Import helpers
import "../utils/helper"
import { breakText } from "../utils/helper"

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false)
  // const setLoaded = () => {
  //   loaded = true
  // }
  // let loaded = false
  useEffect(async () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
    // customMouse()
    // if (window.sessionStorage.getItem("firstLoadDone") === null) {
    //   // await this.setState({ loaded: false });
    //   //   await setLoaded();
    //   // window.sessionStorage.setItem('firstLoadDone', 1);
    //   //   // setTimeout(() => this.setState({ fade: true }), 1600);
    //   //   setTimeout(() => this.setState({ loaded: true }), 2200);
    //   // } else {
    //   //   this.setState({ loaded: true });
    //   window.sessionStorage.setItem("firstLoadDone", 1)
    //   setTimeout(() => setLoaded(true), 2000)
    // } else {
    //   setLoaded(true)
    // }

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
      gsap.registerPlugin(SplitText)
    }

    const sections = gsap.utils.toArray(".break__container__p ")
    sections.forEach(section => {
      // new SplitText(section, { type: "lines", linesClass: "line-child" })
      // new SplitText(section, { type: "lines", linesClass: "line-parent" })
      console.log(section)
      gsap.from(section, {
        // gsap.from(".line-child", {
        // opacity: 0,
        // color: "rgb(255, 0, 0)",
        duration: 1.8,
        y: 140,
        opacity: 0,
        ease: "power4.out",
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: section,
          // scrub: true,
        },
      })
    })

    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#break-0",
    //     // start: "top 20%",
    //     // start: "center center",
    //     toggleActions: "play pause resume reverse",
    //   },
    // })

    // new SplitText("p", { type: "lines", linesClass: "line-child" })
    // new SplitText("p", { type: "lines", linesClass: "line-parent" })
    // tl.from(
    //   ".line-child",
    //   {
    //     duration: 1.8,
    // y: 140,
    // opacity: 0,
    // ease: "power4.out",
    // stagger: {
    //   amount: 1,
    // },
    //   },
    //   "+=0"
    // )

    // ScrollTrigger.refresh()

    // new SplitText(".break__container__p--0", {
    //   type: "lines",
    //   linesClass: "line-child",
    // })
    // new SplitText(".break__container__p--0", {
    //   type: "lines",
    //   linesClass: "line-parent",
    // })

    // gsap.from(".break__container__p--0", {
    //   duration: 1.8,
    //   y: 140,
    //   opacity: 0,
    //   ease: "power4.out",
    //   scrollTrigger: {
    //     trigger: ".break--0",
    //   },
    //   stagger: {
    //     amount: 0.2,
    //   },
    // })

    // let sectionTl = gsap.timeline()
    // const sectionHeaders = gsap.utils.toArray(".break__container__h1")
    // sectionHeaders.forEach((header, i) => {
    // new SplitText(header, {
    //   type: "lines",
    //   linesClass: "line-child line-child-" + i,
    // })
    // new SplitText(header, {
    //   type: "lines",
    //   linesClass: "line-parent",
    // })
    //   // gsap.to(header, {
    //   //   // yPercent: 0,
    //   //   duration: 0.2,
    //   //   ease: "power4.easeOut",
    //   //   opacity: 1,
    //   //   scrollTrigger: {
    //   //     trigger: header,
    //   //   },
    //   // })
    //   gsap.from(
    //     // ".line-child-" + i,
    //     header,
    //     {
    // duration: 1.8,
    // y: 140,
    // opacity: 0,
    // ease: "power4.out",
    // scrollTrigger: {
    //   trigger: header,
    // },
    // stagger: {
    //   amount: 0.2,
    // },
    //     },
    //     "+=0"
    //   )
    // })
  }, [])
  // console.log(loaded)
  // setTimeout(() => console.log(loaded), 2300)
  const ref = useRef(null)
  return (
    <div className="wrapper">
      {/* <span className="circle"></span> */}
      <Header />
      <Phone />
      <Hero />
      <main>
        {/* <SectionBreak
          ref={ref}
          // backgroundColour="#3061E0"
          backgroundColour="rgba(48, 97, 224, 0.9)"
          textColour="#f2f2f2"
          h1={breakText[0].h1}
          p={breakText[0].p}
        /> */}
        <div
          className="break"
          id="break-0"
          style={{
            // backgroundColor: "#3061E0",
            backgroundColor: "rgba(48, 97, 224, 0.9)",
            color: "#f2f2f2",
          }}
        >
          <div className="break__container">
            {/* <h1 className="break__container__h1 break__container__h1--0">
              {breakText[0].h1}
            </h1> */}
            <p className="break__container__p break__container__p--0">
              {/* <span>{breakText[0].h1}</span> <br /> <br /> {breakText[0].p} */}
              <span className="break__container__p__title">
                {breakText[0].h1}
              </span>{" "}
              <br /> <br />{" "}
              <span className="break__container__p__body">
                {breakText[0].p}
              </span>
            </p>
            {/* <p className="break__container__p break__container__p--0">
              {breakText[0].p}
            </p> */}
          </div>
        </div>
        <Services />
        {/* <SectionBreak
          // backgroundColour="#f2f2f2"
          backgroundColour="rgba(255, 255, 255, 0.9)"
          textColour="black"
          h1={breakText[1].h1}
        /> */}
        <div
          className="break break--1"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "black",
          }}
        >
          <div className="break__container">
            {/* <h1 className="break__container__h1 break__container__h1--1">
              {breakText[1].h1}
            </h1> */}
            <p className="break__container__p break__container__p--1">
              <span className="break__container__p__title">
                {breakText[1].h1}
              </span>
            </p>
          </div>
        </div>
        <Showcase />
        {/* <SectionBreak
          // backgroundColour="#3061E0"
          backgroundColour="rgba(48, 97, 224, 0.9)"
          textColour="#f2f2f2"
          h1={breakText[2].h1}
        /> */}
        <div
          className="break break--2"
          style={{
            // backgroundColor: "#3061E0",
            backgroundColor: "rgba(48, 97, 224, 0.9)",
            color: "#f2f2f2",
          }}
        >
          <div className="break__container">
            {/* <h1 className="break__container__h1 break__container__h1--2">
              {breakText[2].h1}
            </h1> */}
            <p className="break__container__p break__container__p--2">
              <span className="break__container__p__title">
                {breakText[2].h1}
              </span>
            </p>
          </div>
        </div>
        <News />
        {/* <SectionBreak
          // backgroundColour="white"
          backgroundColour="rgba(255, 255, 255, 0.9)"
          textColour="black"
          h1={breakText[3].h1}
          p={breakText[3].p}
        /> */}
        <div
          className="break break--3"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "black",
          }}
        >
          <div className="break__container">
            {/* <h1 className="break__container__h1 break__container__h1--3">
              {breakText[3].h1}
            </h1> */}
            {/* <p className="break__container__p break__container__p--1">
              {breakText[3].p}
            </p> */}
            <p className="break__container__p break__container__p--3">
              <span className="break__container__p__title">
                {breakText[3].h1}
              </span>{" "}
              <br /> <br />{" "}
              <span className="break__container__p__body">
                {breakText[3].p}
              </span>
            </p>
          </div>
        </div>
        {/* <Expo /> */}
        <HireExpo />
      </main>
      <Footer />
      <div className="empty">
        <h1 className="empty__title">Lorem ipsum.</h1>
      </div>
      {/* <div
        // className={`loading ${loaded ? "" : "loading__shown"}`}
        className="loading"
        style={loaded ? { opacity: 0 } : { opacity: 1 }}
      >
        <img src={AVLoader} alt="" className="loading__svg" />
      </div> */}
    </div>
  )
}

export default IndexPage
