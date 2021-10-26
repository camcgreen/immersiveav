import React from "react"
import "../../../styles/styles.scss"

import Header from "../../../components/header"
import LowHero from "../../../components/lowHero"
import News from "../../../components/news"
import NewFooter from "../../../components/footerNew"

import HeroImage from "../../../images/green-screen.jpeg"
// import SuppImage1 from "../../../images/green-1.jpeg"
// import SuppImage2 from "../../../images/green-2.jpeg"

const ProjectionMapping = () => {
  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      <div className="cms-container">
        <div className="cms-container__post">
          <h1 className="cms-container__post__title cms-container__post__title--service">
            Projection Mapping
          </h1>
          {/* <h2 className="cms-container__post__date"></h2> */}
          <img className="cms-container__post__img" src={HeroImage} alt="" />
          <div className="cms-container__post__body">
            <h2>
              Create an extraordinary experience with the magic of projection
              mapping.
            </h2>
            <p>
              Projection mapping combines creative and technological wizardry to
              create a virtual extravaganza that’s impossible to ignore.
              Seemingly unreal, the art of projection mapping takes an irregular
              shaped object such as a building or car and brings it to life with
              colours and movement through animated content.
            </p>
            {/* <p>
              <img
                src={SuppImage1}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p> */}
            <p>
              With projection mapping, the projection surface becomes one with
              the content. The surface is literally a blank canvas and can be
              into anything or be made to disappear completely. Much more than
              projecting an image onto a flat surface, projection mapping is
              cutting edge technology which enables you to create a showstopping
              installation which gets everyone talking.
            </p>
            <p>
              We’ll take care of all your creative and technology needs for your
              projection mapped installation. We’ll present concepts on how best
              to achieve your objectives, create the animated content and manage
              all technical production requirements.
            </p>
            {/* <p>
              <img
                src={SuppImage2}
                alt=""
                className="cms-container__post__body__service-img"
              />
            </p> */}
            <p>
              We use industry standard media servers such as Disguise and
              Pandora’s Box to map the content, real time graphics engines such
              as Notch and Unreal Engine to create the content and the latest
              high powered projectors from Barco or Panasonic to deliver a jaw
              dropping visual spectacular.
            </p>
            <p>
              Projection mapping is a versatile technique suitable to a wide
              range of surfaces and environments. Why not use projection mapping
              to highlight a product on an exhibition stand, or even projection
              map the whole stand itself? Planning a brand activation? Why not
              combine projection mapping with gesture control, generative
              content or touchpoints to create an interactive wall?
            </p>
            <p>
              Whatever your projection mapping requirements, chat to our team
              and discover how we can help you create an extraordinary and
              shareable experience.
            </p>
            {/* <h2>
              Not limited to verticals, our interactive surfaces could also be
              used as floors or tabletops.
            </h2> */}
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

export default ProjectionMapping
