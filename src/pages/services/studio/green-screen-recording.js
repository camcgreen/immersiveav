import React from "react"
import { Helmet } from "react-helmet"
import "../../../styles/styles.scss"

import Header from "../../../components/header"
import LowHero from "../../../components/lowHero"
import News from "../../../components/news"
import NewFooter from "../../../components/footerNew"

import { footerText } from "../../../utils/helper"

import HeroImage from "../../../images/green-screen.jpeg"
import SuppImage1 from "../../../images/green-1.jpeg"
import SuppImage2 from "../../../images/green-2.jpeg"

const GreenScreen = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Green Screen Recording | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title cms-container__post__title--service">
            Green Screen Recording
          </h1>
          {/* <h2 className="cms-container__post__date"></h2> */}
          <img className="cms-container__post__img" src={HeroImage} alt="" />
          <div className="cms-container__post__body">
            <h2>
              Green screen recording allows presenters to be filmed in a studio
              space, with the background replaced with virtual content.
            </h2>
            <p>
              Imagine your virtual event, hosted by a presenter immersed in a
              virtual environment, with unparalleled levels of interactivity.
              The green screen filming technique brings Hollywood special
              effects to corporate events and makes anything possible.
            </p>
            <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p>
            <p>
              An ideal option for conferences and events, our green screen
              filming studios are a full-service solution guaranteed to get you
              noticed. Staffed by an experienced team of experts, who will never
              let you down.
            </p>
            <p>
              The green screen studio is lit with studio lighting, balanced with
              a digital light meter to achieve equal luminosity of the colour
              green throughout the set. We use media servers such as Disguise to
              replace the green areas with virtual content.
            </p>
            <p>
              <img
                src={SuppImage2}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p>
            <p>
              The environment we add in can be virtually anything. We can
              augment the green areas with virtual content created in generative
              content engines such as Notch or Unreal Engine.
            </p>
          </div>
          <btn
            onClick={() => window.history.back()}
            className="cms-container__post__back"
          >
            ← Back
          </btn>
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

export default GreenScreen
