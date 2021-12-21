import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../../../styles/styles.scss"

import Header from "../../../components/header"
import LowHero from "../../../components/lowHero"
import News from "../../../components/news"
import NewFooter from "../../../components/footerNew"

import { footerText } from "../../../utils/helper"

import HeroImage from "../../../images/walls-new-1.jpg"
import SuppImage1 from "../../../images/walls-new-2.jpg"
import SuppImage2 from "../../../images/walls-new-3.jpg"
import SuppImage3 from "../../../images/walls-new-4.jpg"

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
              physical touchpoints,{" "}
              <Link to="/services/live/gesture-controlled-content">
                gesture control
              </Link>{" "}
              or touchscreen activation, we create and build interactive walls
              to make your next event your best event.
            </p>
            <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
                // style={{ width: "25%" }}
              />
            </p>
            <p>
              Using high definition LED walls,{" "}
              <Link to="/services/live/projection-mapping">
                projection mapping
              </Link>{" "}
              or integrating different technologies, our interactive walls have
              created memorable experiences for brands such as{" "}
              <Link to="/portfolio/global-all-electric-mini-launch">Mini</Link>,
              Dairy Gold and{" "}
              <Link to="/portfolio/pepsi-lays-experiential-installation">
                Pepsi Lays
              </Link>
              .
            </p>
            <p>
              <img
                src={SuppImage2}
                alt=""
                className="cms-container__post__body__service-img"
                // style={{ width: "35%" }}
              />
            </p>
            <p>
              The content of an interactive wall wall is tailored to your brand
              and products or services. The storytelling approach is popular,
              using a narrative journey to explain your products and services to
              prospective customers. Interactive features can include{" "}
              <Link to="/services/live/custom-games">gamification</Link>, selfie
              cameras, activating digital content and triggering{" "}
              <Link to="/services/live/gesture-controlled-content">
                gesture controlled content
              </Link>
              .
            </p>
            <p>
              <img
                src={SuppImage3}
                alt=""
                className="cms-container__post__body__service-img"
                // style={{ width: "40%" }}
              />
            </p>
            <p style={{ gridColumn: "1 / 3" }}>
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
