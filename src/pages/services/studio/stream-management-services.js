import React from "react"
import "../../../styles/styles.scss"

import Header from "../../../components/header"
import LowHero from "../../../components/lowHero"
import News from "../../../components/news"
import NewFooter from "../../../components/footerNew"

import HeroImage from "../../../images/news1.jpg"
import SuppImage1 from "../../../images/stream-1.jpeg"
import SuppImage2 from "../../../images/stream-2.jpeg"

const StreamManagement = () => {
  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title cms-container__post__title--service">
            Stream Management Services
          </h1>
          {/* <h2 className="cms-container__post__date"></h2> */}
          <img className="cms-container__post__img" src={HeroImage} alt="" />
          <div className="cms-container__post__body">
            <h2>
              We’ll take care of all your streaming requirements: either in a
              studio, or fully remote.
            </h2>
            <p>
              Producing a live streamed event presents many challenges and
              potential pitfalls which could jeopardise the whole production.
              Our stream management services take care of everything for you, so
              your event is in safe, experienced hands.
            </p>
            <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p>
            <p>
              Our stream management services could also be referred to as a
              remote studio, because we don’t need to be with you or your
              presenters. Everything is done online. We use industry standard
              streaming software such as vMix to manage all live streamed
              content. We typically use NDI inputs, but can integrate video
              calls through widely used platforms such as Zoom, Microsoft Teams,
              Google Meet and Skype.
            </p>
            <p>
              Our streaming engineers take the video input of all participants
              and make it into a professional streamed output. We integrate
              transition wipes, lower-third graphics and pre-recorded VT
              segments to create a high-quality, glitch-free broadcast.
            </p>
            <p>
              <img
                src={SuppImage2}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p>
            <p>
              The edited stream can be hosted on a bespoke streaming microsite
              or streamed through YouTube, Facebook, Vimeo and all major virtual
              event platforms. Our streams encourage audience participation with
              features such as live chat and audience polls, meaning
              participants aren’t merely passive viewers, but actively engaged
              with the live stream.
            </p>
            <h2>
              Our remote studio systems produce broadcast-quality productions.
              Anywhere, anytime.
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
        <h1 className="empty__title">Create with us.</h1>
      </div>
    </div>
  )
}

export default StreamManagement
