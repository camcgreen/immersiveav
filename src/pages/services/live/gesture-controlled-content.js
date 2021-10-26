import React from "react"
import "../../../styles/styles.scss"

import Header from "../../../components/header"
import LowHero from "../../../components/lowHero"
import News from "../../../components/news"
import NewFooter from "../../../components/footerNew"

import { footerText } from "../../../utils/helper"

import HeroImage from "../../../images/green-screen.jpeg"
// import SuppImage1 from "../../../images/green-1.jpeg"
// import SuppImage2 from "../../../images/green-2.jpeg"

const GestureControlled = () => {
  return (
    <div className="wrapper">
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
            {/* <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p> */}
            <p>
              Gesture control is the perfect input method for the post-Covid
              era. Removing the requirement for physical touch and maintaining a
              generous distance between users. We use a variety of movement
              detection methods such as wireframe skeletal mapping and IR
              cameras to detect a person’s movement, which is then interpreted
              by the software and influences the content displayed on screen.
            </p>
            <p>
              How to use gesture control technology to enhance the visitor
              experience? Popular applications of gesture controlled content
              include gamification and generative content, where the person’s
              movement is reflected on a big screen through the real time
              creation of an avatar or other animated sequence. Gesture control
              can also be used to trigger information on an interactive wall,
              where users can explore digital content related to your brand and
              services.
            </p>
            {/* <p>
              <img
                src={SuppImage2}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p> */}
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
