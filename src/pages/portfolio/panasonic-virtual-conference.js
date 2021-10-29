import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import HeroImage from "../../images/project4.jpeg"
import Image1 from "../../images/microsites-1.jpeg"
import Image2 from "../../images/panasonic-4.jpeg"
import Image3 from "../../images/stream-supp-1.jpg"
import Image4 from "../../images/microsites-hero.jpeg"
import Image5 from "../../images/projection-supp-1.png"
import Image6 from "../../images/panasonic-1.jpeg"
import Image7 from "../../images/projection-hero.jpeg"
import Image8 from "../../images/services-studio-1.jpg"
import Image9 from "../../images/panasonic-3.png"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgOrange from "../../svg/bg-orange.svg"

import "../../styles/styles.scss"

const Panasonic = () => {
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
        <h1 className="portfolio-item__h1">Panasonic Virtual Conference</h1>
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
              src={images[5]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--5"
            />
            <img
              src={images[4]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--6"
            />
          </div>
          <div className="portfolio-item__container__quote">
            <h1 className="portfolio-item__container__quote__h1">
              {'" Lorem ipsum dolor sit amet, consecteur adipiscing'}
            </h1>
            <h3 className="portfolio-item__container__quote__h3">Panasonic</h3>
          </div>
          <div className="portfolio-item__container__challenge">
            <h2 className="portfolio-item__container__challenge__h2">
              Challenge
            </h2>
            <p className="portfolio-item__container__challenge__p">
              StudioX provided{" "}
              <Link to="/services/studio/stream-management-services">
                stream management services
              </Link>{" "}
              and remote studio facilities for a Panasonic virtual conference.
              Connecting over 500 industry experts, product users and partners,
              experiential agency{" "}
              <a
                href="https://identitygroup.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Identity Group
              </a>{" "}
              chose Immersive AV and the StudioX solution to take the 9th annual
              <a
                href="https://toughbookinnovationforum.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Toughbook Innovation
              </a>{" "}
              Forum virtual.
            </p>
            <p className="portfolio-item__container__challenge__p">
              Identity Group contacted Immersive AV with a detailed brief for
              the Toughbook Innovation Forum. A stable, reliable solution was
              required to stream multiple presenters in several virtual rooms
              for delegates to participate in. As with a physical event, a main
              stage and breakout rooms were required to run simultaneously. The
              output needed to be a seamless, high-quality streaming experience,
              customised to Toughbook branding.
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              Our stream management centre in Telford facilitated the remote
              studio broadcast of the Toughbook Innovation Forum.
            </p>
            <p className="portfolio-item__container__solution__p">
              Using state of the art IT infrastructure, our broadcast engineers
              produced the stream using three vMix encoding computers. One
              functioning as a virtual green room, cueing presenters before
              their slot, one mixing the live stream and another switching
              between inputs. We used an NDI network to capture each live feed,
              with the audio mixed and processed on an audio console in the
              stream management centre.
            </p>
            <p className="portfolio-item__container__solution__p">
              PowerPoint presentations content were hosted in Telford, with each
              speaker controlling their content using an internet clicker,
              eliminating the need to say ‘next slide please’.
            </p>
          </div>
          <div className="portfolio-item__container__supplementary-images">
            <img
              src={images[1]}
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
            <h1 className="portfolio-item__container__quote__h1">
              Lorem ipsum dolor sit amet
            </h1>
          </div>
          <div className="portfolio-item__container__result">
            <h2 className="portfolio-item__container__result__h2">Result</h2>
            <p className="portfolio-item__container__result__p">
              Making the transition from a regular physical event to a virtual
              solution is a big step, with multiple requirements to cater for.
            </p>
            <p className="portfolio-item__container__result__p">
              533 participants from around the world joined the virtual
              iteration of the Toughbook Innovation Forum 2020, with excellent
              feedback from Panasonic, Identity Group and the delegates who
              attended.
            </p>
            <p className="portfolio-item__container__result__p">
              Once the event had been successfully delivered, the overarching
              opinion was that in the face of such challenging circumstances,
              the virtual event, facilitated by StudioX, exceeded the
              expectations of all concerned.
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

export default Panasonic
