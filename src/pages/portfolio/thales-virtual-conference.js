import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import HeroImage from "../../images/project8.jpeg"
import Image1 from "../../images/th-1.jpg"
import Image2 from "../../images/th-2.jpg"
import Image3 from "../../images/th-4.jpg"
import Image4 from "../../images/th-3.jpg"
import Image5 from "../../images/th-5.jpg"
import Image6 from "../../images/services-virtual-1.jpg"
import Image7 from "../../images/project8.jpeg"
import Image8 from "../../images/thales1.jpeg"
import Image9 from "../../images/thales3.png"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgOrange from "../../svg/bg-orange.svg"

import "../../styles/styles.scss"

const Thales = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ]
  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      <div className="portfolio-item">
        <div className="bg-av">
          <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
          <img
            className="bg-av__img bg-av__img--orange"
            src={bgOrange}
            alt=""
          />
        </div>
        <h1 className="portfolio-item__h1">Thales Virtual Conference</h1>
        <div className="portfolio-item__container">
          {/* <StaticImage
            className="portfolio-item__container__hero-image"
            src={heroImage}
            // src={"../images/news1.jpg"}
            alt=""
          /> */}
          <img
            src={HeroImage}
            alt=""
            className="portfolio-item__container__hero-image"
          />
          <div className="portfolio-item__container__hero-array">
            <img
              src={images[0]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--1"
            />
            <img
              src={images[1]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--2"
            />
            <img
              src={images[2]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--3"
            />
            <img
              src={images[3]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--4"
            />
            <img
              src={images[4]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--5"
            />
            <img
              src={images[5]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--6"
            />
          </div>
          <div className="portfolio-item__container__quote">
            {/* <h1 className="portfolio-item__container__quote__h1">
              {'" Lorem ipsum dolor sit amet, consecteur adipiscing'}
            </h1>
            <h3 className="portfolio-item__container__quote__h3">Pepsi Lays</h3> */}
          </div>
          <div className="portfolio-item__container__challenge">
            <h2 className="portfolio-item__container__challenge__h2">
              Challenge
            </h2>
            <p className="portfolio-item__container__challenge__p">
              Immersive AV provided{" "}
              <Link to="/services/live/green-screen-recording">
                green screen
              </Link>{" "}
              studio facilities, virtual set integration and{" "}
              <Link to="/services/studio/stream-management-services">
                stream management services
              </Link>{" "}
              for the Thales virtual conference.
            </p>
            <p className="portfolio-item__container__challenge__p">
              <Link to="/services/live">Event technologists</Link> from
              Immersive AV worked with the creative teams at Giant Cookie and
              Fuse. The brief was to create a unique experiential installation
              bespoke to the Pepsi Lays brand which encouraged customer
              engagement.
            </p>
            <p className="portfolio-item__container__challenge__p">
              Aerospace manufacturer Thales and their experiential agency First
              Event enlisted Immersive AV and the StudioX team to produce the
              technical and creative elements of their senior leadership
              conference 2021.
            </p>
            <p className="portfolio-item__container__challenge__p">
              Thales were keen to utilise a high-end virtual conference
              environment for their senior leadership conference 2021. The
              solution required a studio space with the ability to incorporate a
              virtual set and add remote speakers to the conference at specific
              points. The stream needed to be output through a secure platform
              to an online audience of 100 members of the Thales management
              team.
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              A green screen was the most versatile solution to bring the Thales
              virtual conference to life. We used a concave 16M wide, floor to
              ceiling green screen studio in our Telford StudioX facility.
            </p>
            <p className="portfolio-item__container__solution__p">
              Up to three presenters appeared on stage at any given time, with
              two fixed position cameras capturing footage against the green
              screen. We lit the green screen studio with daylight balanced
              lighting fixtures, focussed with a digital colour spectrum
              analyser to ensure equal luminosity across the green surfaces,
              resulting in an even green throughout the set. This made keying
              out the green surfaces during real-time rendering a far more
              efficient process.
            </p>
            <p className="portfolio-item__container__solution__p">
              The camera feed was processed in Disguise, replacing the green
              background with a virtual environment built in Notch. PowerPoint
              presentations displayed on a virtual screen were also processed
              through Disguise, with the rendered output fed into vMix. Holding
              slides, pre-recorded VTs, transitions and lower third graphics
              were all processed in vMix, which also added three remote
              presenters to the stream.
            </p>
            <p className="portfolio-item__container__solution__p">
              The final output was streamed through as a private video through
              the client’s Vimeo account, which included a chat box for viewers
              to pose questions to the presenters.
            </p>
          </div>
          <div className="portfolio-item__container__supplementary-images">
            <img
              src={images[6]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--1"
            />
            <img
              src={images[7]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--2"
            />
            <img
              src={images[8]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--3"
            />
          </div>
          <div className="portfolio-item__container__quote portfolio-item__container__quote--bottom">
            {/* <h1 className="portfolio-item__container__quote__h1">
              Lorem ipsum dolor sit amet
            </h1> */}
          </div>
          <div className="portfolio-item__container__result">
            <h2 className="portfolio-item__container__result__h2">Result</h2>
            <p className="portfolio-item__container__result__p">
              The two hour virtual production was enjoyed by everyone who took
              part in it, both presenters and viewers alike. The online event
              was viewed by 100 members of the Thales management team, who each
              received email invitations to the event.
            </p>
            <p className="portfolio-item__container__result__p">
              The presenters delivered their keynotes flawlessly and the chat
              box function enabled delegates to ask a variety of questions,
              which were answered by the panellists before the CEO’s closing
              statement.
            </p>
          </div>
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

export default Thales
