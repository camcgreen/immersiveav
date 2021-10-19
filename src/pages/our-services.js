import React from "react"

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

const OurServices = () => {
  return (
    <div className="wrapper">
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
              Lorem ipsum dolor sit amet
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              semper dolor. Aliquam gravida purus vel sem facilisis viverra.
              Vestibulum eu sapien vel nisl semper consectetur sed et lorem. Sed
              non metus vel mi rutrum pulvinar. Quisque purus odio, malesuada
              eget lorem sit amet, blandit mollis massa.
            </p>
            <p className="our-services__container__live__p">
              Suspendisse potenti. Aenean at odio eget mi luctus suscipit. Ut
              vel ipsum sit amet eros pulvinar aliquam condimentum vel erat.
              Etiam et urna auctor, rhoncus eros in, tristique augue. Maecenas
              et nunc et mi convallis efficitur.
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
          <div className="our-services__container__solution">
            <h2 className="our-services__container__solution__h2">Virtual</h2>
            <p className="our-services__container__solution__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              semper dolor. Aliquam gravida purus vel sem facilisis viverra.
              Vestibulum eu sapien vel nisl semper consectetur sed et lorem. Sed
              non metus vel mi rutrum pulvinar.
            </p>
            <p className="our-services__container__solution__p">
              Quisque purus odio, malesuada eget lorem sit amet, blandit mollis
              massa. Suspendisse potenti. Aenean at odio eget mi luctus
              suscipit. Ut vel ipsum sit amet eros pulvinar aliquam condimentum
              vel erat. Etiam et urna auctor, rhoncus eros in, tristique augue.
            </p>
          </div>
          <div className="our-services__container__solution">
            <h2 className="our-services__container__solution__h2">Studio</h2>
            <p className="our-services__container__solution__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              semper dolor. Aliquam gravida purus vel sem facilisis viverra.
              Vestibulum eu sapien vel nisl semper consectetur sed et lorem. Sed
              non metus vel mi rutrum pulvinar.
            </p>
            <p className="our-services__container__solution__p">
              Quisque purus odio, malesuada eget lorem sit amet, blandit mollis
              massa. Suspendisse potenti. Aenean at odio eget mi luctus
              suscipit. Ut vel ipsum sit amet eros pulvinar aliquam condimentum
              vel erat. Etiam et urna auctor, rhoncus eros in, tristique augue.
            </p>
          </div>
          <div className="our-services__container__supplementary-images our-services__container__supplementary-images--studio">
            <img
              src={ImageStudio1}
              alt=""
              className="our-services__container__supplementary-images__img our-services__container__supplementary-images__img--1"
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
          <div className="our-services__container__solution">
            <h2 className="our-services__container__solution__h2">Hybrid</h2>
            <p className="our-services__container__solution__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              semper dolor. Aliquam gravida purus vel sem facilisis viverra.
              Vestibulum eu sapien vel nisl semper consectetur sed et lorem. Sed
              non metus vel mi rutrum pulvinar.
            </p>
            <p className="our-services__container__solution__p">
              Quisque purus odio, malesuada eget lorem sit amet, blandit mollis
              massa. Suspendisse potenti. Aenean at odio eget mi luctus
              suscipit. Ut vel ipsum sit amet eros pulvinar aliquam condimentum
              vel erat. Etiam et urna auctor, rhoncus eros in, tristique augue.
            </p>
          </div>
        </div>
      </div>
      <News />
      {/* <Footer /> */}
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">Create with us.</h1>
      </div>
    </div>
  )
}

export default OurServices
