import React, { useEffect, useState, useRef } from "react"
import { Helmet } from "react-helmet"
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
import NewFooter from "../components/footerNew"

//Import helpers
// import "../utils/helper"
import { breakText, footerText } from "../utils/helper"

const IndexPage = ({ data }) => {
  // console.log(data.allMarkdownRemark.edges)
  const [loaded, setLoaded] = useState(false)
  // const setLoaded = () => {
  //   loaded = true
  // }
  // let loaded = false
  useEffect(() => {
    const preload1 = new Image()
    preload1.src = "../images/services-1.jpeg"
    const preload2 = new Image()
    preload2.src = "../images/services-2.jpeg"
    const preload3 = new Image()
    preload3.src = "../images/services-3.jpeg"
    const preload4 = new Image()
    preload4.src = "../images/hire.jpg"
    const preload5 = new Image()
    preload5.src = "../images/expo.jpg"
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
      gsap.registerPlugin(SplitText)
    }

    const sections = gsap.utils.toArray(".break__container__p ")
    sections.forEach(section => {
      console.log(section)
      gsap.from(section, {
        duration: 1.8,
        y: 140,
        opacity: 0,
        ease: "power4.out",
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: section,
        },
      })
    })
  }, [])
  const ref = useRef(null)
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Technology for Live, Virtual & Hybrid Events | Immersive AV
        </title>
      </Helmet>
      <Header />
      <Phone />
      <Hero style={{ transform: "translate(-50%, -50%) !important" }} />
      <main>
        <div
          className="break"
          id="break-0"
          style={{
            backgroundColor: "rgba(48, 97, 224, 0.9)",
            color: "#f2f2f2",
          }}
        >
          <div className="break__container">
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
        {/* <News posts={data.allMarkdownRemark.edges} /> */}
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
      {/* <Footer /> */}
      <NewFooter />
      <div className="empty">
        <h1 className="empty__title">{footerText}</h1>
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
