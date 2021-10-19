import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import SubHero from "../components/subHero"
import News from "../components/news"
// import Footer from "../components/footer"
import NewFooter from "../components/footerNew"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import bgBlue from "../svg/bg-blue.svg"
import bgOrange from "../svg/bg-orange.svg"
import bgArrowOrange from "../svg/bg-arrow-orange.svg"

const About = () => {
  const [title, setTitle] = useState("title")
  const [type, setType] = useState("type")
  const [paragraph, setParagraph] = useState("paragraph")
  const [link, setLink] = useState("/")

  const [updateKey, setUpdateKey] = useState(0)

  const togglePopup = (title, type, paragraph, link) => {
    console.log("toggle")
    const popup = document.querySelector(".about-page__people__popup")
    console.log(popup)

    if (title && type && paragraph && link) {
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
      <Header />
      <LowHero key={updateKey} />
      <div className="about-page">
        <div className="bg-av">
          <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
          <img
            className="bg-av__img bg-av__img--orange bg-av__img--orange--about"
            src={bgOrange}
            alt=""
          />
          <img
            className="bg-av__img bg-av__img--arrow-orange bg-av__img--arrow-orange--about"
            src={bgArrowOrange}
            alt=""
          />
        </div>
        <h1 className="about-page__h1">About</h1>
        <div className="about-page__people">
          <div
            className="about-page__people__popup"
            style={{ pointerEvents: "none", opacity: 0 }}
          >
            <svg
              onClick={() => togglePopup()}
              className="about-page__people__popup__close"
              height="512pt"
              viewBox="0 0 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="black"
                d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
              />
              <path
                fill="black"
                d="m176.8125 351.1875c-4.097656 0-8.195312-1.554688-11.308594-4.691406-6.25-6.25-6.25-16.382813 0-22.632813l158.398438-158.402343c6.253906-6.25 16.386718-6.25 22.636718 0s6.25 16.382812 0 22.636718l-158.402343 158.398438c-3.15625 3.136718-7.25 4.691406-11.324219 4.691406zm0 0"
              />
              <path
                fill="black"
                d="m335.1875 351.1875c-4.09375 0-8.191406-1.554688-11.304688-4.691406l-158.398437-158.378906c-6.253906-6.25-6.253906-16.382813 0-22.632813 6.25-6.253906 16.382813-6.253906 22.632813 0l158.398437 158.398437c6.253906 6.25 6.253906 16.382813 0 22.632813-3.132813 3.117187-7.230469 4.671875-11.328125 4.671875zm0 0"
              />
            </svg>
            <div className="about-page__people__popup__text">
              <h2 className="about-page__people__popup__text__h2">{title}</h2>
              <h3 className="about-page__people__popup__text__h3">{type}</h3>
              <Link
                className="about-page__people__popup__text__link"
                to={"/about" + link}
              >
                <button className="about-page__people__popup__text__btn">
                  See project
                </button>
              </Link>
              <div className="about-page__people__popup__text__description">
                <p className="about-page__people__popup__text__description__p">
                  {paragraph.split("|")[0]}
                </p>
                <p className="about-page__people__popup__text__description__p">
                  {paragraph.split("|")[1]}
                </p>
              </div>
            </div>
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                "Adidas Retail Experiential Installation",
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
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                "Mini All Electric Launch",
                "Hybrid",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/adidas-experiential-retail-installation"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project2.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
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
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
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
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item">
            <StaticImage
              className="showcase__img"
              src="../images/project13.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item">
            <StaticImage
              className="showcase__img"
              src="../images/project6.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item">
            <StaticImage
              className="showcase__img"
              src="../images/project7.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          {/* <div className="about-page__people__item"></div> */}
          <div className="about-page__people__item">
            <StaticImage
              className="showcase__img"
              src="../images/project8.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div className="about-page__people__item ">
            <StaticImage
              className="showcase__img"
              src="../images/project9.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div className="about-page__people__item">
            <StaticImage
              className="showcase__img"
              src="../images/project10.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div className="about-page__people__item">
            <StaticImage
              className="showcase__img"
              src="../images/project11.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div className="about-page__people__item">
            <StaticImage
              className="showcase__img"
              src="../images/project12.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                "Huawei Rubik's Cube",
                "Hybrid",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "/adidas-experiential-retail-installation"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/project5.jpeg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
        </div>
        <div className="about-page__container">
          <StaticImage
            className="about-page__container__img about-page__container__img--0 about-page__container--left"
            src="../images/news1.jpg"
            alt=""
          />
          <h2 className="about-page__container__h2 about-page__container__h2--0 about-page__container--right">
            Lorem ipsum dolor sit amet, consecteur adipiscing eit, sed do
            eiusmod tempor
          </h2>
          <StaticImage
            className="about-page__container__img about-page__container__img--1 about-page__container--left"
            src="../images/news2.jpg"
            alt=""
          />
          <p className="about-page__container__p about-page__container__p--0 about-page__container--right">
            Donec eget aliquam magna, tincidunt congue magna. Suspendisse
            potenti. Proin auctor ante eu mauris iaculis, nec pellentesque est
            ullamcorper. Sed lacinia ut magna non ultrices. Pellentesque
            volutpat purus vel suscipit ultrices. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Nullam
            risus augue, tempor eu odio ut, fermentum aliquam lorem.
          </p>
          <StaticImage
            className="about-page__container__img about-page__container__img--2 about-page__container--left"
            src="../images/news3.jpg"
            alt=""
          />
          <h2 className="about-page__container__h2 about-page__container__h2--1 about-page__container--left">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="about-page__container__p about-page__container__p--1 about-page__container--right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
            egestas dui, at varius risus congue vel. Donec lacus velit,
            condimentum sit amet laoreet in, viverra sit amet magna. Nunc
            euismod elit tellus, non fringilla orci congue ut.
          </p>
        </div>
      </div>
      <News />
      <NewFooter />
      <div className="empty">
        <h1 className="empty__title">Create with us.</h1>
      </div>
    </div>
  )
}

export default About
