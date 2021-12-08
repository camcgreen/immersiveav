import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import LowHero from "../../components/lowHero"
import News from "../../components/news"
import NewFooter from "../../components/footerNew"

import HeroImage from "../../images/pepsi1.jpeg"
import Image1 from "../../images/pepsi-8.jpg"
import Image2 from "../../images/pepsi-3.jpg"
import Image3 from "../../images/pepsi-5.jpg"
import Image4 from "../../images/pepsi-9.jpg"
import Image5 from "../../images/pepsi-6.jpg"
import Image6 from "../../images/pepsi-7.jpg"
import Image7 from "../../images/pepsi-2.jpg"
import Image8 from "../../images/pepsi-10.jpg"
import Image9 from "../../images/pepsi-1.jpg"

import { footerText } from "../../utils/helper"

import bgBlue from "../../svg/bg-blue.svg"
import bgOrange from "../../svg/bg-orange.svg"

import "../../styles/styles.scss"

const Pepsi = () => {
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
        <h1 className="portfolio-item__h1">
          Pepsi Lays Experiential Installation
        </h1>
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
              Immersive AV partnered with brand experience specialists{" "}
              <a
                href="https://www.giantcookie.eu/lays-champions-league"
                target="_blank"
                rel="noopener noreferrer"
              >
                Giant Cookie
              </a>{" "}
              and marketing agency{" "}
              <a
                href="https://fuseint.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fuse
              </a>
              , to produce an interactive experience for Pepsi Lays at the
              Champions League final 2019 in Madrid. Our Pepsi Lays experiential
              installation was a centre-piece of the official UEFA fan zone,
              registering 11,371 interactions during the four day event.
            </p>
            <p className="portfolio-item__container__challenge__p">
              <Link to="/services/live">Event technologists</Link> from
              Immersive AV worked with the creative teams at Giant Cookie and
              Fuse. The brief was to create a unique experiential installation
              bespoke to the Pepsi Lays brand which encouraged customer
              engagement.
            </p>
            <p className="portfolio-item__container__challenge__p">
              With a demanding audience in the fan zone and direct competition
              from UEFA’s other official sponsors—it was essential to create an
              engaging experience which attracted the attention of the 150,000
              football fans who attended the fan zone over the four days.
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              Our experiential installation was split across two areas of the
              Pepsi Lays chalet, with one solution designed to attract
              attention, the other to engage visitors and encourage interaction.
            </p>
            <p className="portfolio-item__container__solution__p">
              Inside the Pepsi Lays chalet, we created an interactive touch wall
              using conductive ink touchpoints and projection mapping. Users
              were encouraged to tap certain points on the wall, which triggered
              video and audio content to be played.
            </p>
            <p className="portfolio-item__container__solution__p">
              Outside, we constructed a 5x3M LED wall, built into the chalet
              design to attract the attention of football fans attending the fan
              zone. The extreme heat and direct sunlight demanded an ultra-high
              specification screen. We used{" "}
              <a
                href="https://www.absen.com/products/rental_stage/PL-Series.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Absen Polaris Pro 3.9mm LED
              </a>
              . Eye catching video content and atmospheric music ensured the
              Pepsi Lays chalet was easily identifiable from anywhere within the
              UEFA fan zone.
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
              The Pepsi Lays area in the Puerta del Sol square in central Madrid
              was a real talking point of the UEFA Champions League festival,
              seen by 150,000 football fans and locals. The interactive touch
              wall was engaged with 11,371 times throughout the four day event
              and delivered tangible results for everyone concerned. Post
              navigation
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

export default Pepsi
