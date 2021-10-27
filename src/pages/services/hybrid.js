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

import HeroImage from "../../images/live-1.jpeg"
import Live1 from "../../images/news1.jpg"
import Live2 from "../../images/live-2.jpeg"
import Live3 from "../../images/live-3.jpeg"
import Live4 from "../../images/project1.jpeg"
import Live5 from "../../images/project2.jpeg"
import Live6 from "../../images/project3.jpeg"
import Live7 from "../../images/project4.jpeg"
import Live8 from "../../images/project5.jpeg"
import Live9 from "../../images/hire.jpg"
import Live10 from "../../images/expo.jpg"

const Hybrid = () => {
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
  ]

  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hybrid Events | ImmersiveAV</title>
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
        <h1 className="service-item__h1">Hybrid Events</h1>
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
              Live integrated with virtual for unparalleled results.
            </h1>
          </div>
          <div className="service-item__container__challenge">
            <p className="service-item__container__challenge__p">
              The definition of a hybrid event is clear: the fusion of live and
              virtual elements. But how do you integrate the two groups of
              delegates to create a unified experience?
            </p>
            <p className="service-item__container__challenge__p">
              Our hybrid event technology transcends expectations, offering
              innovation at every touchpoint. Why not combine the best of{" "}
              <Link to="/services/live">live</Link> and{" "}
              <Link to="/services/virtual">virtual</Link> to create a hybrid
              event which will yield your greatest ever results?
            </p>
          </div>
          <div className="service-item__container__supplementary-images">
            <img
              src={images[4]}
              alt=""
              className="service-item__container__supplementary-images__img service-item__container__supplementary-images__img--1"
            />
            <img
              src={images[5]}
              alt=""
              className="service-item__container__supplementary-images__img service-item__container__supplementary-images__img--2"
            />
          </div>
          <div className="service-item__container__result">
            <p className="service-item__container__result__p">
              What can we offer for your hybrid event? Our services are as
              diverse as the clients we serve. From{" "}
              <Link to={"/services/studio/stream-management-services"}>
                streaming live content
              </Link>{" "}
              from your{" "}
              <Link to={"/services/live/live-event-technical-production"}>
                physical event
              </Link>
              , to creating a <Link to="/services/virtual">virtual</Link> 3D
              replica of your space online delegates can join.
            </p>
            <p className="service-item__container__result__p">
              All our innovations are tailored to maximise user engagement and
              can be customised to suit your specific needs.
            </p>
          </div>
          <div className="service-item__container__quote service-item__container__quote--end">
            <h1 className="service-item__container__quote__h1">
              Combine technologies from live and virtual, to create an
              award-winning hybrid event.
            </h1>
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

export default Hybrid
