import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { ScrollTrigger } from "gsap/ScrollTrigger"

import gsap from "gsap"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import SubHero from "../components/subHero"
import News from "../components/news"
import Footer from "../components/footer"
import NewFooter from "../components/footerNew"

import bgBlue from "../svg/bg-blue.svg"
import bgArrowOrange from "../svg/bg-arrow-orange.svg"

import Project1 from "../images/project1.jpeg"
import Project2 from "../images/project2.jpeg"
import Project3 from "../images/project3.jpeg"
import Project4 from "../images/project4.jpeg"
import Project5 from "../images/project10.jpeg"
import Project6 from "../images/project6.jpeg"
import Project7 from "../images/project7.jpeg"
import Project8 from "../images/project8.jpeg"
import Project9 from "../images/project9.jpeg"
import Project10 from "../images/project5.jpeg"
import Project11 from "../images/project11.jpeg"
import Project12 from "../images/project12.jpeg"
import Project13 from "../images/project13.jpeg"
import { footerText } from "../utils/helper"

const Portfolio = () => {
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("title")
  const [type, setType] = useState("type")
  const [paragraph, setParagraph] = useState("paragraph")
  const [link, setLink] = useState("/")

  const [updateKey, setUpdateKey] = useState(0)

  // let updateKey = 0

  const togglePopup = (image, title, type, paragraph, link) => {
    const popup = document.querySelector(".portfolio-page__container__popup")

    if (image && title && type && paragraph && link) {
      setImage(image)
      setTitle(title)
      setType(type)
      setParagraph(paragraph)
      setLink(link)
      ScrollTrigger.refresh()
      ScrollTrigger.getAll().forEach(instance => {
        instance.kill()
      })
      setUpdateKey(updateKey + 1)
    }

    if (popup.style.pointerEvents === "none") {
      popup.style.pointerEvents = "all"
      gsap.to(popup, {
        opacity: 1,
        duration: 0.2,
        ease: "power4.in",
      })
    } else {
      gsap.to(popup, {
        opacity: 0,
        duration: 0.2,
        ease: "power4.out",
      })
      setTimeout(() => {
        popup.style.pointerEvents = "none"
      }, 200)
    }
  }

  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Case Studies | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero key={updateKey} />
      <div className="portfolio-page">
        <div className="bg-av">
          <img
            className="bg-av__img bg-av__img--arrow-orange bg-av__img--arrow-orange--portfolio"
            src={bgArrowOrange}
            alt=""
          />
        </div>
        <h1 className="portfolio-page__h1">Case Studies</h1>
        <div className="portfolio-page__container">
          <div
            className="portfolio-page__container__popup"
            style={{ pointerEvents: "none", opacity: 0 }}
          >
            <svg
              onClick={() => togglePopup()}
              className="portfolio-page__container__popup__close"
              height="512pt"
              viewBox="0 0 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
              />
              <path
                fill="white"
                d="m176.8125 351.1875c-4.097656 0-8.195312-1.554688-11.308594-4.691406-6.25-6.25-6.25-16.382813 0-22.632813l158.398438-158.402343c6.253906-6.25 16.386718-6.25 22.636718 0s6.25 16.382812 0 22.636718l-158.402343 158.398438c-3.15625 3.136718-7.25 4.691406-11.324219 4.691406zm0 0"
              />
              <path
                fill="white"
                d="m335.1875 351.1875c-4.09375 0-8.191406-1.554688-11.304688-4.691406l-158.398437-158.378906c-6.253906-6.25-6.253906-16.382813 0-22.632813 6.25-6.253906 16.382813-6.253906 22.632813 0l158.398437 158.398437c6.253906 6.25 6.253906 16.382813 0 22.632813-3.132813 3.117187-7.230469 4.671875-11.328125 4.671875zm0 0"
              />
            </svg>
            <div className="portfolio-page__container__popup__text">
              <img
                src={image}
                alt=""
                className="portfolio-page__container__popup__text__img"
              />
              <div className="portfolio-page__container__popup__text__bio">
                <h2 className="portfolio-page__container__popup__text__bio__h2">
                  {title}
                </h2>
                <h3 className="portfolio-page__container__popup__text__bio__h3">
                  {type}
                </h3>
                <Link
                  className="portfolio-page__container__popup__text__bio__link"
                  to={"/portfolio" + link}
                >
                  <button className="portfolio-page__container__popup__text__bio__btn">
                    See project
                  </button>
                </Link>
              </div>
              <div className="portfolio-page__container__popup__text__description">
                <p className="portfolio-page__container__popup__text__description__p">
                  {paragraph.split("|")[0]}
                </p>
                <p className="portfolio-page__container__popup__text__description__p">
                  {paragraph.split("|")[1]}
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-page__container__item portfolio-page__container__item--empty"></div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project1,
                "Adidas Retail Installation",
                "Live",
                "How do you generate a buzz in store, when footfall is at an all time low because of a global pandemic? Adidas wanted to set the standard for what an experiential retail installation could achieve.| Working with The Marketing Store, Immersive AV helped Adidas attract more customers through the doors and keep them inside for longer with some clever tech experiences.",
                "/adidas-experiential-retail-installation"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Adidas Retail Installation"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project2,
                "Mini Electric Launch",
                "Hybrid",
                "Mini wanted to celebrate the global launch of the Mini Cooper SE, the first all-electric Mini on the market. So we partnered with Unit 9 to build the ElectriCity, an interactive mural powered by touch and the technology itself.",
                "/global-all-electric-mini-launch"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project2.jpeg"
              alt="Mini All Electric Launch"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project3,
                "The UMA Music Video",
                "Studio",
                "Bands releasing a new single in the middle of a global lockdown needed to find a creative way to reach their fans. |Which is exactly what The UMA did when they used the LED studio at StudioX Telford to launch their single ‘Fire’ in summer 2020.",
                "/the-uma-music-video"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project3.jpeg"
              alt="The UMA Music Video"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div className="portfolio-page__container__item portfolio-page__container__item--empty"></div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project4,
                "Panasonic Virtual Conference",
                "Virtual",
                "StudioX provided stream management services and remote studio facilities for a Panasonic virtual conference.| Connecting over 500 industry experts, product users and partners, experiential agency Identity Group chose Immersive AV and the StudioX solution to take the 9th annualToughbook Innovation Forum virtual.",
                "/panasonic-virtual-conference"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project4.jpeg"
              alt="Direct Line Smart Crossing"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project5,
                "The Smart Crossing",
                "Live",
                "To create the world’s first responsive road. Led by the team at Umbrellium in association with Saatchi & Saatchi on behalf of Direct Line. ",
                "/the-smart-crossing-by-direct-line-umbrellium"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project10.jpeg"
              alt="Candy Crush Live Stream"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project6,
                "Candy Crush Live Stream",
                "Studio",
                "Immersive AV provided stream management services for the Candy Crush live stream. |Passionate about connecting with their loyal fans, Candy Crush had ambitious plans for the grand finale of their All Stars contest.",
                "/candy-crush-live-stream"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project6.jpeg"
              alt="Pepsi Lays Experiential Installation"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project7,
                "Pepsi Lays Experiential Installation",
                "Live",
                "Immersive AV partnered with brand experience specialists Giant Cookie and marketing agency Fuse, to produce an interactive experience for Pepsi Lays at the Champions League final 2019 in Madrid. |Our Pepsi Lays experiential installation was a centre-piece of the official UEFA fan zone, registering 11,371 interactions during the four day event.",
                "/pepsi-lays-experiential-installation"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project7.jpeg"
              alt="Thales Virtual Conference"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          {/* <div className="portfolio-page__container__item"></div> */}
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project8,
                "Thales Virtual Conference",
                "Virtual",
                "Immersive AV provided green screen studio facilities, virtual set integration and stream management services for the Thales virtual conference.| Aerospace manufacturer Thales and their experiential agency First Event enlisted Immersive AV and the StudioX team to produce the technical and creative elements of their senior leadership conference 2021.",
                "/thales-virtual-conference"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project8.jpeg"
              alt="World Skills Opening Ceremonye"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div className="portfolio-page__container__item portfolio-page__container__item--empty"></div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project9,
                "World Skills Opening Ceremony",
                "Live",
                "To consult on the opening and closing Ceremonies for Abu Dhabi and to oversee systems design and delivery with the chosen AV contractor for the live experience agency People.| The venue being custom built within the Du Arena, Abu Dhabi and the opening Ceremony to consist of a central screen 21mx 12m, two side screens of 14m x 8m, a 4.5m globe for projection and floor projection to a section of the performance space.",
                "/world-skills-opening-ceremony"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project9.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div className="portfolio-page__container__item portfolio-page__container__item--empty"></div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project10,
                "Huawei Rubik’s Cube",
                "Live",
                "When Huawei launched their latest smartphone, they wanted to create a spectacle and get people talking. |Working with Kerve Creative, Immersive AV designed and built a 4.5M high interactive Rubik’s cube which used the device’s groundbreaking AI to help users complete the famously difficult puzzle.",
                "/interactive-rubiks-cube"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project5.jpeg"
              alt="Huawei Rubik’s Cube"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
        </div>
      </div>
      <News />
      <NewFooter />
      <div className="empty">
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default Portfolio
