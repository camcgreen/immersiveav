import React from "react"
import "../../../styles/styles.scss"

import Header from "../../../components/header"
import LowHero from "../../../components/lowHero"
import News from "../../../components/news"
import NewFooter from "../../../components/footerNew"

import { footerText } from "../../../utils/helper"

import HeroImage from "../../../images/microsites-hero.jpeg"
import SuppImage1 from "../../../images/microsites-1.jpeg"

const EventMicrosites = () => {
  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title cms-container__post__title--service">
            Event Streaming Microsites
          </h1>
          {/* <h2 className="cms-container__post__date"></h2> */}
          <img className="cms-container__post__img" src={HeroImage} alt="" />
          <div className="cms-container__post__body">
            <h2>
              Curate the entire user experience of your streamed event with a
              bespoke streaming microsite.
            </h2>
            <p>
              There’s no better way of producing a professional live streamed
              event than hosting it on a custom streaming microsite. Our
              platforms are secure and stable, allowing complete control over
              site aesthetics and user experience.
            </p>
            <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p>
            <p>
              Your event can be available to everyone, or accessible through
              invite only. Our state of the art registration system enables
              customised invitations and a live registration dashboard, so you
              can keep tabs on who’s attending. Our platforms enable users to
              log in via a specific url with personalised log in credentials.
            </p>
            <p>
              All our streaming services encourage user engagement and
              interactivity. The streaming microsite can feature tools for live
              chat, user polls and other engagement tools. Why not customise the
              look and feel of your microsite to reflect your brand identity and
              maximise commercial opportunities with advertising space you can
              sell to sponsors or partners?
            </p>
            <h2>
              We’ll take care of all creative and development needs when
              building a streaming microsite.
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

export default EventMicrosites
