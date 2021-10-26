import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import LowHero from "./lowHero"
import SubHero from "../components/subHero"
import News from "./news"
import Footer from "./footer"
import NewFooter from "../components/footerNew"

import { footerText } from "../utils/helper"

import bgBlue from "../svg/bg-blue.svg"
import bgArrowOrange from "../svg/bg-arrow-orange.svg"

import "../styles/styles.scss"

const ServiceItem = props => {
  console.log(props.heroImage)
  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      {/* <div className="bg-white"></div> */}
      {/* <div className="bg-av">
        <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
        <img
          className="bg-av__img bg-av__img--arrow-orange"
          src={bgArrowOrange}
          alt=""
        />
      </div> */}
      <div className="service-item">
        <div className="bg-av">
          <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
          <img
            className="bg-av__img bg-av__img--arrow-orange"
            src={bgArrowOrange}
            alt=""
          />
        </div>
        <h1 className="service-item__h1">{props.serviceName}</h1>
        <div className="service-item__container">
          <div className="service-item__container__hero-array">
            <img
              src={props.images[0]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--1"
            />
            <img
              src={props.images[1]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--2"
            />
            <img
              src={props.images[2]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--3"
            />
            <img
              src={props.images[3]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--4"
            />
            <img
              src={props.images[4]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--5"
            />
            <img
              src={props.images[5]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--6"
            />
            <img
              src={props.images[6]}
              alt=""
              className="service-item__container__hero-array__img service-item__container__hero-array__img--7"
            />
          </div>
          <img
            src={props.heroImage}
            alt=""
            className="service-item__container__hero-image"
          />
          <div className="service-item__container__empty"></div>
          <div className="service-item__container__quote">
            <h1 className="service-item__container__quote__h1">
              {props.headerText[0]}
            </h1>
            {/* <h3 className="service-item__container__quote__h3">
              Name of client
            </h3> */}
          </div>
          <div className="service-item__container__challenge">
            {/* <h2 className="service-item__container__challenge__h2">
              Challenge
            </h2> */}
            <p className="service-item__container__challenge__p">
              {props.paraText[0]}
            </p>
            <p className="service-item__container__challenge__p">
              {props.paraText[1]}
            </p>
          </div>
          <div className="service-item__container__supplementary-images">
            <img
              src={props.images[4]}
              alt=""
              className="service-item__container__supplementary-images__img service-item__container__supplementary-images__img--1"
            />
            <img
              src={props.images[5]}
              alt=""
              className="service-item__container__supplementary-images__img service-item__container__supplementary-images__img--2"
            />
          </div>
          <div className="service-item__container__result">
            <p className="service-item__container__result__p">
              {props.paraText[2]}
            </p>
            <p className="service-item__container__result__p">
              {props.paraText[3]}
            </p>
          </div>
          <div className="service-item__container__quote service-item__container__quote--end">
            <h1 className="service-item__container__quote__h1">
              {props.headerText[1]}
            </h1>
          </div>
        </div>
      </div>
      <News />
      {/* <Footer /> */}
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default ServiceItem
