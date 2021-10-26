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

const LiveEvent = () => {
  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title cms-container__post__title--service">
            Live Event Technical Production
          </h1>
          {/* <h2 className="cms-container__post__date"></h2> */}
          <img className="cms-container__post__img" src={HeroImage} alt="" />
          <div className="cms-container__post__body">
            <h2>
              Immersive AV provides technical production services which enhance
              brand recognition and visitor engagement at live events.
            </h2>
            <p>
              As a full service technical production supplier, we’re passionate
              about using technology to create memorable experiences. Our
              technical production services cover everything from concept
              development to onsite delivery and event management.
            </p>
            {/* <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p> */}
            <p>
              Specialists at creating interactive experiences for live events,
              Immersive AV have a suite of solutions to bring your live event to
              life. By combining established methods of interaction with
              emerging technologies, our solutions transcend the traditional
              boundaries between physical and digital to attract more people to
              your space and maximise visitor engagement.
            </p>
            <p>
              We’ll manage all aspects of technical production for your live
              event. Our team of event technologists includes Project Managers,
              Content Developers, Technical Crew, Riggers, Event Managers and a
              logistics support team to ensure everything runs smoothly.
            </p>
            {/* <p>
              <img
                src={SuppImage2}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p> */}
            <p>
              We leave nothing to chance, executing detailed pre-production
              processes on all projects. Our onsite teams are some of the best
              in the business. We allocate crew based on their skills and
              expertise, ensuring you’re always in safe hands.
            </p>
            <p>
              We’re passionate about post-show aftercare, meaning that when the
              show stops, we dont. We’ll initiate a post-event debrief and
              supply you with any data and analytics generated from digital
              content used at the event.
            </p>
            <h2>
              We’ll manage all the technical production needs and help you to
              deliver a world class event.
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

export default LiveEvent
