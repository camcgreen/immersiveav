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

const CustomGames = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Custom Games | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title cms-container__post__title--service">
            Custom Games
          </h1>
          {/* <h2 className="cms-container__post__date"></h2> */}
          <img className="cms-container__post__img" src={HeroImage} alt="" />
          <div className="cms-container__post__body">
            <h2>
              Gamification is a guaranteed tool to enhance visitor engagement.
            </h2>
            <p>
              Everyone loves to have fun and be challenged. Custom games feature
              both these attractions and can be customised to your brand and
              services. The scope of gamification presents us with a completely
              blank canvas. We can create whatever you need.
            </p>
            {/* <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p> */}
            <p>
              A perfect fit for live and virtual events, some ideas include
              touchscreen games, VR games, gesture controlled games and
              gamification which combines physical actions with a digital
              experience. Such as the rope pull challenge we created for Land
              Rover.
            </p>
            <p>
              One of the key features of all gamification experiences is the
              leaderboard. You invite people to play your game, they exchange
              their details for a position on the leaderboard, often with the
              incentive of prizes for the top performers. This allows you to
              keep people in your space for longer, and collect their details
              for future follow up.
            </p>
            {/* <p>
              <img
                src={SuppImage2}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p> */}
            <p>
              Our developers are proud to be gaming geeks, who are passionate
              about mind-blowing games which are as addictive as they are easy
              to play. We use industry-standard gaming software such as Unity
              and Unreal Engine to create life-like gaming experiences which
              guarantee your brand will be the talk of the show.
            </p>
            <h2>
              Your game lives longer than the event and can be used anywhere,
              anytime.
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

export default CustomGames
