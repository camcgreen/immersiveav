import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../../../styles/styles.scss"

import Header from "../../../components/header"
import LowHero from "../../../components/lowHero"
import News from "../../../components/news"
import NewFooter from "../../../components/footerNew"

import { footerText } from "../../../utils/helper"

import HeroImage from "../../../images/led-hero.jpg"
import SuppImage1 from "../../../images/led-new-2.jpg"
import SuppImage2 from "../../../images/led-new-3.jpg"
import SuppImage3 from "../../../images/led-new-4.jpg"

const LedStream = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>LED Streaming Studios | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title cms-container__post__title--service">
            LED Streaming Studios
          </h1>
          {/* <h2 className="cms-container__post__date"></h2> */}
          <img className="cms-container__post__img" src={HeroImage} alt="" />
          <div className="cms-container__post__body">
            <h2>
              Capture live or pre-recorded video content in our LED streaming
              studios.
            </h2>
            <p>
              Are you looking for a cutting-edge creative studio space? Our LED
              streaming studios come with all the technology and technical
              support needed to produce a broadcast-quality live stream.
            </p>
            <p>
              The centrepiece of an LED studio is a high definition LED
              background, used to display the content of your choice. We can use
              your own video content or create pixel-perfect artwork which looks
              stunning in our LED streaming studios.
            </p>
            <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
                style={{ width: "50%" }}
              />
            </p>
            <p>
              A flexible and versatile solution is probably at the top of the
              wishlist for your{" "}
              <Link to="/services/studio/stream-management-services">
                live-streamed
              </Link>{" "}
              event. Our team will customise the LED studio package to suit your
              specific needs.
            </p>
            <p>
              <img
                src={SuppImage2}
                alt=""
                className="cms-container__post__body__service-img"
                style={{ width: "50%" }}
              />
            </p>
            <p>
              Need more than just a studio? Why not utilise our stream
              management services, or present your streamed event production
              using a bespoke{" "}
              <Link to="/services/studio/event-streaming-microsites">
                streaming microsite
              </Link>
              ?
            </p>
            <p>
              <img
                src={SuppImage3}
                alt=""
                className="cms-container__post__body__service-img"
                style={{ width: "50%" }}
              />
            </p>
            <h2>So much more than just a studio.</h2>
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

export default LedStream
