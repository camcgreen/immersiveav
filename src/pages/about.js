import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import SubHero from "../components/subHero"
import News from "../components/news"
// import Footer from "../components/footer"
import NewFooter from "../components/footerNew"

import bgBlue from "../svg/bg-blue.svg"
import bgOrange from "../svg/bg-orange.svg"
import bgArrowOrange from "../svg/bg-arrow-orange.svg"

const About = () => {
  return (
    <div className="wrapper">
      <Header />
      <LowHero />
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
      {/* <Footer /> */}
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">Create with us.</h1>
      </div>
    </div>
  )
}

export default About
