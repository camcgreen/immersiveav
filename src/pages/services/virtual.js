import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgArrowOrange from "../../svg/bg-arrow-orange.svg"

import HeroImage from "../../images/virtual-new-1.jpg"
import Live1 from "../../images/virtual-new-2.jpg"
import Live2 from "../../images/virtual-new-3.jpg"
import Live3 from "../../images/virtual-new-4.jpg"
import Live4 from "../../images/virtual-new-5.jpg"
import Live5 from "../../images/project4.jpeg"
import Live6 from "../../images/virtual-new-7.jpg"
import Live7 from "../../images/project11.jpeg"
import Live8 from "../../images/project5.jpeg"
import Live9 from "../../images/hire.jpg"
import Live10 from "../../images/expo.jpg"
import Live11 from "../../images/virtual-new-9.jpg"
import Live12 from "../../images/virtual-new-10.jpg"

const Virtual = () => {
  const images = [
    Live1,
    Live2,
    Live3,
    Live4,
    Live5,
    Live6,
    Live7,
    Live8,
    Live9,
    Live10,
    Live11,
    Live12,
  ]

  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Virtual Events | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="service-item">
        <div className="bg-av">
          <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
          <img
            className="bg-av__img bg-av__img--arrow-orange"
            src={bgArrowOrange}
            alt=""
          />
        </div>
        <h1 className="service-item__h1">Virtual Events</h1>
        <div className="service-item__container">
          <div className="service-item__container__hero-array">
            <img
              src={images[0]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--1"
            />
            <img
              src={images[1]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--2"
            />
            <img
              src={images[2]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--3"
            />
            <img
              src={images[3]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--4"
            />
            <img
              src={images[4]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--5"
            />
            <img
              src={images[5]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--6"
            />
            <img
              src={images[6]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--7"
            />
          </div>
          <img
            src={HeroImage}
            alt=""
            className="service-item__container__hero-image"
          />
          <div className="service-item__container__empty"></div>
          <div className="service-item__container__quote">
            <h1 className="service-item__container__quote__h1">
              From concept to completion, we’re a virtual event specialist.
            </h1>
          </div>
          <div className="service-item__container__challenge">
            <p className="service-item__container__challenge__p">
              Liberated from the restraints of a physical event, a virtual event
              enables the curation of the user experience to suit your event
              objectives.
            </p>
            <p className="service-item__container__challenge__p">
              The exciting new world of virtual events is paved with limitless
              opportunities. The opportunity to present your brand exactly how
              you want. The opportunity for online visitors to access your
              virtual event from anywhere at any time; and the opportunity to
              collect more data and user insights than ever before.
            </p>
            <p className="service-item__container__challenge__p">
              We’ll take care of all your virtual event requirements. We’ll
              present concepts, develop the content and look after all hosting
              needs. We’ll manage the entire production and delivery process,
              keeping you updated with progress reports and visualisations.
            </p>
          </div>
          <div className="service-item__container__supplementary-images">
            <img
              src={images[10]}
              alt=""
              className="service-item__container__supplementary-images__img service-item__container__supplementary-images__img--1"
            />
            <img
              src={images[11]}
              alt=""
              className="service-item__container__supplementary-images__img service-item__container__supplementary-images__img--2"
            />
          </div>
          <div className="service-item__container__result">
            <p className="service-item__container__result__p">
              A virtual event is an exciting opportunity to reach your greatest
              audience. Releasing the shackles of time zone and geographic
              location makes your event accessible to more people.
            </p>
            <p className="service-item__container__result__p">
              Our developers will create the experience to your specific
              requirements, in terms of look and functionality. Whatever you
              need, we can do—from 3D environments to embedded digital assets
              and integration with social media and e-commerce platforms.
            </p>
          </div>
          <div className="service-item__container__quote service-item__container__quote--end">
            <h1 className="service-item__container__quote__h1">
              Achieve your greatest potential, with a virtual event.
            </h1>
          </div>
        </div>
        <Link
          className="cms-container__post__back"
          to="/"
          style={{ textDecoration: "none", marginBottom: 100, zIndex: 7 }}
        >
          <btn>← Home</btn>
        </Link>
      </div>
      <News />
      <NewFooter />
      <div className="empty">
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default Virtual
