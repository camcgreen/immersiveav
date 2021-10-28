import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import News from "../components//news"
import NewFooter from "../components/footerNew"

import bgBlue from "../svg/bg-blue.svg"
import bgOrange from "../svg/bg-orange.svg"

import HeroLive from "../images/services-hero-1.jpeg"
import HeroVirtual from "../images/services-hero-2.jpg"
import HeroStudio from "../images/services-hero-3.jpeg"
import HeroHybrid from "../images/services-hero-4.jpg"
import ImageTop1 from "../images/services-top-1.jpg"
import ImageTop2 from "../images/services-top-2.jpg"
import ImageTop3 from "../images/services-top-3.jpg"
import ImageTop4 from "../images/services-top-4.jpeg"
import ImageTop5 from "../images/services-top-5.jpeg"
import ImageVirtual1 from "../images/services-virtual-1.jpg"
import ImageStudio1 from "../images/services-studio-1.jpg"
import ImageHybrid1 from "../images/services-hybrid-1.jpg"

import "../styles/styles.scss"
import { footerText } from "../utils/helper"

const OurServices = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Services | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="our-services">
        <div className="bg-av">
          <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
          <img
            className="bg-av__img bg-av__img--orange"
            src={bgOrange}
            alt=""
          />
        </div>
        <h1 className="our-services__h1">Services</h1>
        <div className="our-services__container">
          {/* <StaticImage
            className="our-services__container__hero-image"
            src={props.heroImage}
            // src={"../images/news1.jpg"}
            alt=""
          /> */}
          <div className="our-services__container__quote">
            <h1 className="our-services__container__quote__h1">
              All our services are curated to deliver an exceptional user
              experience.
            </h1>
          </div>
          <div className="our-services__container__hero-array">
            <img
              src={ImageTop1}
              alt=""
              className="our-services__container__hero-array__img our-services__container__hero-array__img--1"
            />
            <img
              src={ImageTop2}
              alt=""
              className="our-services__container__hero-array__img our-services__container__hero-array__img--2"
            />
            <img
              src={ImageTop3}
              alt=""
              className="our-services__container__hero-array__img our-services__container__hero-array__img--3"
            />
            <img
              src={ImageTop4}
              alt=""
              className="our-services__container__hero-array__img our-services__container__hero-array__img--4"
            />
            <img
              src={HeroLive}
              alt=""
              className="our-services__container__hero-array__img our-services__container__hero-array__img--5"
            />
            <img
              src={ImageTop5}
              alt=""
              className="our-services__container__hero-array__img our-services__container__hero-array__img--6"
            />
          </div>
          <div className="our-services__container__live">
            <h2 className="our-services__container__live__h2">Live</h2>
            <p className="our-services__container__live__p">
              Nothing beats the experience of a{" "}
              <Link to="/services/live">live event</Link>, when all our senses
              are activated and engaged with the environment around us. Our
              event technologists integrate leading-edge hardware with
              innovative digital content to create unique experiences bespoke to
              your objectives.
            </p>
            <p className="our-services__container__live__p">
              Our pedigree is in live events. We understand what’s needed to
              make things happen in a way which exceeds everyone’s expectations.
              From conceptualisation through pre-production and onsite delivery,
              your live event is in safe hands with Immersive AV.
            </p>
          </div>
          <div className="our-services__container__empty"></div>
          <div className="our-services__container__supplementary-images">
            <img
              src={ImageVirtual1}
              alt=""
              className="our-services__container__supplementary-images__img our-services__container__supplementary-images__img--1"
            />
            <img
              src={HeroVirtual}
              alt=""
              className="our-services__container__supplementary-images__img our-services__container__supplementary-images__img--2"
            />
          </div>
          <div className="our-services__container__virtual">
            <h2 className="our-services__container__virtual__h2">Virtual</h2>
            <p className="our-services__container__virtual__p">
              More than just a substitute for live,{" "}
              <Link to="/services/virtual">virtual events</Link> reach audiences
              you only previously dreamed of. Freed from the shackles of
              physical restrictions, a virtual event can be anything you want it
              to be—created from the ground up with your objectives at the core
              of every element.
            </p>
            <p className="our-services__container__virtual__p">
              We don’t just do virtual events, we make them. Immersive AV’s
              virtual event services can cover everything from designing the
              platform to creating bespoke 3D virtual environments and
              live-streamed integrations. Whatever your virtual event
              requirements, we have a solution to help you make amazing things
              happen.
            </p>
          </div>
          <div className="our-services__container__studio">
            <h2 className="our-services__container__studio__h2">Studio</h2>
            <p className="our-services__container__studio__p">
              A live-streamed production is an effective tool which helps you
              connect with your audience, wherever they may be.
              Broadcast-quality streamed events are more achievable than ever
              before with studio services from Immersive AV.
            </p>
            <p className="our-services__container__studio__p">
              Our studio solutions satisfy all budgets and requirements, from
              fully-remote{" "}
              <Link to="/services/studio/stream-management-services">
                stream management services
              </Link>{" "}
              to{" "}
              <Link to="/services/studio/led-streaming-studios">
                LED streaming studios
              </Link>{" "}
              and{" "}
              <Link to="/services/studio/green-screen-recording">
                green screen filming
              </Link>{" "}
              with the creation of virtual sets. What’s more, we’ll take care of
              all technical and creative demands, allowing you to focus on what
              you do best.
            </p>
          </div>
          <div className="our-services__container__supplementary-images our-services__container__supplementary-images--studio">
            <img
              src={ImageStudio1}
              alt=""
              className="our-services__container__supplementary-images__img our-services__container__supplementary-images__img--1 our-services__container__supplementary-images__img--1--studio"
            />
            <img
              src={HeroStudio}
              alt=""
              className="our-services__container__supplementary-images__img our-services__container__supplementary-images__img--2"
            />
          </div>
          <div className="our-services__container__supplementary-images">
            <img
              src={ImageHybrid1}
              alt=""
              className="our-services__container__supplementary-images__img our-services__container__supplementary-images__img--1"
            />
            <img
              src={HeroHybrid}
              alt=""
              className="our-services__container__supplementary-images__img our-services__container__supplementary-images__img--2"
            />
          </div>
          <div className="our-services__container__hybrid">
            <h2 className="our-services__container__hybrid__h2">Hybrid</h2>
            <p className="our-services__container__hybrid__p">
              Combining the best of live and virtual, a{" "}
              <Link to="/services/hybrid">hybrid event</Link> enables event
              organisers to reach their greatest potential. A hybrid event
              satisfies both groups of delegates: those who wish to attend in
              person, and those who participate online.
            </p>
            <p className="our-services__container__hybrid__p">
              Our hybrid event services take the building blocks from our live
              and virtual solutions to create a unified experience for live and
              virtual delegates, ensuring there are equal benefits for everyone
              who participates, no matter how they choose to attend.
            </p>
          </div>
        </div>
      </div>
      <News />
      {/* <Footer /> */}
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default OurServices
