import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../../../styles/styles.scss"

import Header from "../../../components/header"
import LowHero from "../../../components/lowHero"
import News from "../../../components/news"
import NewFooter from "../../../components/footerNew"

import { footerText } from "../../../utils/helper"

import HeroImage from "../../../images/gesture-new-1.jpg"
import SuppImage1 from "../../../images/gesture-new-2.jpg"
import SuppImage2 from "../../../images/gesture-new-3.jpg"
import SuppImage3 from "../../../images/gesture-new-4.jpg"

const GestureControlled = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gesture Controlled Content | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title cms-container__post__title--service">
            Gesture Controlled Content
          </h1>
          {/* <h2 className="cms-container__post__date"></h2> */}
          <img className="cms-container__post__img" src={HeroImage} alt="" />
          <div className="cms-container__post__body">
            <h2>Attract and engage with touchfree user interaction.</h2>
            <p>
              Nothing people's attention more than fun and innovative ways of
              interacting with engaging content. Touchscreens used to be a
              novelty, but they’re now so commonplace, they’re almost expected.
              The most innovative way of interacting with technology is gesture
              control, where the user’s hand and body content control the
              content they see.
            </p>
            <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
                style={{ width: "25%" }}
              />
            </p>
            <p>
              Gesture control is the perfect input method for the post-Covid
              era. Removing the requirement for physical touch and maintaining a
              generous distance between users. We use a variety of movement
              detection methods such as wireframe skeletal mapping and IR
              cameras to detect a person’s movement, which is then interpreted
              by the software and influences the content displayed on screen.
            </p>
            <p>
              <img
                src={SuppImage2}
                alt=""
                className="cms-container__post__body__service-img"
                style={{ width: "35%" }}
              />
            </p>
            <p>
              How to use gesture control technology to enhance the visitor
              experience? Popular applications of gesture controlled content
              include <Link to="/services/live/custom-games">gamification</Link>{" "}
              and{" "}
              <Link to="/services/live/generative-content">
                generative content
              </Link>
              , where the person’s movement is reflected on a big screen through
              the real time creation of an avatar or other animated sequence.
              Gesture control can also be used to trigger information on an{" "}
              <Link to="/services/live/interactive-walls">
                interactive wall
              </Link>
              , where users can explore digital content related to your brand
              and services.
            </p>
            <p>
              <img
                src={SuppImage3}
                alt=""
                className="cms-container__post__body__service-img"
                style={{ width: "40%" }}
              />
            </p>
            <h2>
              A fun and functional way of interacting with engaging digital
              content.
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

export default GestureControlled
