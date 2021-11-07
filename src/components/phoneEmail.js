import React from "react"
import "../styles/styles.scss"

import IconPhone from "../svg/iconPhone.svg"
import IconEmail from "../svg/iconEmail.svg"

const PhoneEmail = () => {
  return (
    <div className="phone-email">
      {/* <div className="phone-email__container">
        <img src={IconPhone} alt="" className="phone-email__svg" />
        <a
          className="phone-email__text"
          href="tel:+441952953500"
          target="_blank"
          rel="noopener noreferrer"
        >
          01952 953 500
        </a>
      </div>
      <div className="phone-email__container">
        <img src={IconEmail} alt="" className="phone-email__svg" />
        <a
          className="phone-email__text"
          href="mailto:enquiries@immersiveav.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          enquiries@immersiveav.com
        </a>
      </div> */}

      <div className="phone-email__container">
        <div className="phone-email__container__block">
          <a
            href="mailto:enquiries@immersiveav.com"
            target="_blank"
            rel="noopener noreferrer"
            // className="phone-email__container__block__text"
          >
            {/* <img
              src={IconEmail}
              alt=""
              className="phone-email__container__block__svg"
            /> */}
            <svg
              className="phone-email__container__block__svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.0012 36.772L63.5102 13.0562V11.6789C63.5102 10.2575 62.3577 9.10498 60.9363 9.10498H3.06612C1.64472 9.10498 0.492188 10.2575 0.492188 11.6789V13.0562L32.0012 36.772Z"
                fill="black"
              />
              <path
                d="M33.6852 42.5165C33.1866 42.8918 32.5936 43.0795 32.0012 43.0795C31.4088 43.0795 30.8158 42.8918 30.3172 42.5165L0.492188 20.0674V52.3214C0.492188 53.7428 1.64472 54.8953 3.06612 54.8953H60.9363C62.3577 54.8953 63.5102 53.7428 63.5102 52.3214V20.0674L33.6852 42.5165Z"
                fill="black"
              />
            </svg>
          </a>
          <a
            href="mailto:enquiries@immersiveav.com"
            target="_blank"
            rel="noopener noreferrer"
            className="phone-email__container__block__text"
          >
            enquiries@immersiveav.com
          </a>
        </div>

        <div className="phone-email__container__block">
          <a
            href="tel:+441952953500"
            target="_blank"
            rel="noopener noreferrer"
            // className="phone-email__container__block__text"
          >
            {/* <img
              src={IconPhone}
              alt=""
              className="phone-email__container__block__svg"
            /> */}
            <svg
              className="phone-email__container__block__svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M28.075 36.907L35.8089 44.6409C36.5015 45.3335 37.566 45.4899 38.4286 45.027L47.697 40.0514C48.3825 39.6831 49.2109 39.7009 49.8801 40.0984L63.403 48.1231C64.3679 48.6955 64.7562 49.893 64.3046 50.9198C63.1491 53.5495 61.0457 58.3693 60.2101 60.5004C60.0345 60.9491 59.7728 61.3601 59.4087 61.6752C50.3963 69.4873 32.4653 59.9685 18.7405 46.2437C5.01346 32.5181 -4.50527 14.5871 3.30683 5.57466C3.62256 5.21058 4.03357 4.9489 4.48156 4.77326C6.612 3.93772 11.4325 1.8343 14.0622 0.678767C15.089 0.227221 16.2865 0.615479 16.8589 1.58044L24.8836 15.1033C25.2804 15.7725 25.2982 16.6009 24.9305 17.2864L19.955 26.5534C19.4921 27.416 19.6485 28.4805 20.3411 29.1731L28.075 36.907Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="tel:+441952953500"
            target="_blank"
            rel="noopener noreferrer"
            className="phone-email__container__block__text"
          >
            01952 953 500
          </a>
        </div>
      </div>
    </div>
  )
}

export default PhoneEmail
