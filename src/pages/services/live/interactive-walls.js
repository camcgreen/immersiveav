import React from "react"
import { Helmet } from "react-helmet"
import "../../../styles/styles.scss"

import Header from "../../../components/header"
import LowHero from "../../../components/lowHero"
import News from "../../../components/news"
import NewFooter from "../../../components/footerNew"

import { footerText } from "../../../utils/helper"

import HeroImage from "../../../images/green-screen.jpeg"
// import SuppImage1 from "../../../images/green-1.jpeg"
// import SuppImage2 from "../../../images/green-2.jpeg"

const InteractiveLive = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Interactive Walls | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title cms-container__post__title--service">
            Interactive Walls
          </h1>
          {/* <h2 className="cms-container__post__date"></h2> */}
          <img className="cms-container__post__img" src={HeroImage} alt="" />
          <div className="cms-container__post__body">
            <h2>
              Make any surface an attractive and engaging feature with the magic
              of interactivity.
            </h2>
            <p>
              What better way to attract and engage visitors than with an
              interactive wall, where they get to control the content? Using
              physical touchpoints, gesture control or touchscreen activation,
              we create and build interactive walls to make your next event your
              best event.
            </p>
            {/* <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p> */}
            <p>
              The content of an interactive wall wall is tailored to your brand
              and products or services. Many clients opt for a storytelling
              approach—explaining how their solutions benefit their customers.
              Interactive features can include gamification, selfie cameras,
              activating digital content and triggering gesture controlled
              content.
            </p>
            {/* <p>
              <img
                src={SuppImage2}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p> */}
            <p>
              All our interactive walls come with a data and insights package,
              opening up the interaction data for you to assess the ROI of your
              event and offering insights into which products or services are
              the most popular. An interactive wall is a powerful tool which
              helps you achieve your event marketing objectives.
            </p>
            <h2>
              Not limited to verticals, our interactive surfaces could also be
              used as floors or tabletops.
            </h2>
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

export default InteractiveLive
