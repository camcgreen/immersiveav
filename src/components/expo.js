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
          <svg
            width="237"
            height="43"
            viewBox="0 0 237 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.77786 42.1016C0.451647 42.1016 -0.406411 40.7008 0.196287 39.5202L19.4881 1.74142C20.0345 0.672034 21.1342 -0.000873566 22.3355 -0.000873566L235.18 -0.000900269C236.506 -0.000900269 237.364 1.39842 236.762 2.57824L217.5 40.3573C216.954 41.4271 215.854 42.1008 214.652 42.1008L1.77786 42.1016Z"
              fill="#00ADEF"
            />
          </svg>
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
          <svg
            width="237"
            height="43"
            viewBox="0 0 237 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.77786 42.1016C0.451647 42.1016 -0.406411 40.7008 0.196287 39.5202L19.4881 1.74142C20.0345 0.672034 21.1342 -0.000873566 22.3355 -0.000873566L235.18 -0.000900269C236.506 -0.000900269 237.364 1.39842 236.762 2.57824L217.5 40.3573C216.954 41.4271 215.854 42.1008 214.652 42.1008L1.77786 42.1016Z"
              fill="#00ADEF"
            />
          </svg>
          <p>Learn more</p>
        </button>
      </div>
    </div>
  </div>
)

export default Expo
