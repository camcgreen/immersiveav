import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ExpoSVG from "../svg/expo.svg"
import ButtonBg from "../svg/buttonbg.svg"

const Expo = () => (
  <div className="expo">
    <div className="expo__container">
      <StaticImage
        className="expo__container__image"
        src="../images/hire.jpg"
        alt="ImmersiveAV Hire"
      />
      <div className="expo__container__overlay"></div>
      <div className="expo__container__text">
        <img src={ExpoSVG} alt="" className="expo__container__text__logo" />
        <p className="expo__container__text__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="expo__container__text__btn">
          <img src={ButtonBg} alt="" />
          <p>Learn more</p>
        </button>
      </div>
    </div>
    <div className="expo__container">
      <StaticImage
        className="expo__container__image"
        src="../images/expo.jpg"
        alt="ImmersiveAV Expo"
      />
      <div className="expo__container__overlay"></div>
      <div className="expo__container__text">
        <img src={ExpoSVG} alt="" className="expo__container__text__logo" />
        <p className="expo__container__text__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="expo__container__text__btn">
          <img src={ButtonBg} alt="" />
          <p>Learn more</p>
        </button>
      </div>
    </div>
  </div>
)

export default Expo
