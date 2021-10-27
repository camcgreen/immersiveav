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
import Project5 from "../images/project5.jpeg"
import Project6 from "../images/project6.jpeg"
import Project7 from "../images/project7.jpeg"
import Project8 from "../images/project8.jpeg"
import Project9 from "../images/project9.jpeg"
import Project10 from "../images/project10.jpeg"
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
    console.log("toggle")
    const popup = document.querySelector(".portfolio-page__container__popup")
    console.log(popup)

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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/adidas-experiential-retail-installation"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project1.jpeg"
              alt="Huawei Rubik's Cube"
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/global-all-electric-mini-launch"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project2.jpeg"
              alt="Huawei Rubik's Cube"
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
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/the-uma-music-video"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project3.jpeg"
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
                Project4,
                "Panasonic Virtual Conference",
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/panasonic-virtual-conference"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project4.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project13,
                "Project Name",
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/panasonic-virtual-conference"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project13.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project6,
                "Project Name",
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/panasonic-virtual-conference"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project6.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project7,
                "Project Name",
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/panasonic-virtual-conference"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project7.jpeg"
              alt="Huawei Rubik's Cube"
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
                "Project Name",
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/panasonic-virtual-conference"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project8.jpeg"
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
                Project9,
                "Project Name",
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/panasonic-virtual-conference"
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
                "Project Name",
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/panasonic-virtual-conference"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project10.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div className="portfolio-page__container__item portfolio-page__container__item--empty"></div>
          <div className="portfolio-page__container__item portfolio-page__container__item--empty"></div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project11,
                "Project Name",
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/panasonic-virtual-conference"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project11.jpeg"
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
                Project12,
                "Project Name",
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/panasonic-virtual-conference"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project12.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="portfolio-page__container__item__overlay" />
          </div>
          <div
            className="portfolio-page__container__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Project5,
                "Rubik's Cube",
                "Live",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/interactive-rubiks-cube"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project5.jpeg"
              alt="Huawei Rubik's Cube"
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
