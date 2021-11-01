import React from "react"
import { Helmet } from "react-helmet"
import "../../../styles/styles.scss"

import Header from "../../../components/header"
import LowHero from "../../../components/lowHero"
import News from "../../../components/news"
import NewFooter from "../../../components/footerNew"

import { footerText } from "../../../utils/helper"

import HeroImage from "../../../images/generative-hero.jpg"
import SuppImage1 from "../../../images/generative-supp-1.jpg"
import SuppImage2 from "../../../images/generative-supp-2.jpg"

const GenerativeContent = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Generative Content | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title cms-container__post__title--service">
            Generative Content
          </h1>
          {/* <h2 className="cms-container__post__date"></h2> */}
          <img className="cms-container__post__img" src={HeroImage} alt="" />
          <div className="cms-container__post__body">
            <h2>
              Experience the next generation of interactivity with generative
              content.
            </h2>
            <p>
              Experience makers have a new tool in their arsenal! One at the
              cutting edge of experiential content, which uses AI algorithms to
              create unique digital content in real time, triggered by human
              interaction.
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
              Imagine visualising live sales data through an abstract animation
              on an LED wall. What about an avatar being created in real time
              based on a visitor's appearance or movement? Or an interactive
              game where every journey and outcome is different? All this is
              possible with generative content.
            </p>
            <p>
              The scope of possibilities with generative media is vast. We’ve
              created mind blowing generative content installations for London’s
              flagship Adidas store and our own exhibition space at Event Tech
              Live. Both experiences generated lots of interest, with people
              taking pictures and videos to share on social media. With an
              experience as creative as generative content, the reach is far
              greater than those attending the physical event.
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
              We’d love to tell you how we do it, but the process is magic and
              varied depending on the project. If you’re enthusiastic about
              using generative content for your next event, we’ll take care of
              all creative and technical requirements. We’ll develop the concept
              with your marketing or creative team. We’ll develop all the
              content, keeping you up to date with progress videos and
              visualisations throughout the process. When we get to site, we’ll
              do everything there too, from installation, content calibration
              and onsite management. Your generative content installation is in
              safe hands with Immersive AV.
            </p>
            <h2>
              Blow people’s minds with the visual specuacular of generative
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

export default GenerativeContent
