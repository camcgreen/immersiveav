import React, { useEffect } from "react"
import { gsap } from "gsap"
import IconPhone from "../svg/phone.svg"

const Phone = props => {
  // useEffect(() => {})
  return (
    <div className="phone">
      <button
        className="phone__btn"
        onClick={() => {
          const number = document.querySelector(".phone__number")
          if (number.style.opacity == 0) {
            number.style.opacity = 1
            number.style.pointerEvents = "all"
          } else {
            number.style.opacity = 0
            number.style.pointerEvents = "none"
          }
        }}
      >
        <img src={IconPhone} alt="" />
      </button>
      <div className="phone__number">
        <a href="tel:+441952 953500" target="_blank" rel="noopener noreferrer">
          01952 953500
        </a>
      </div>
    </div>
  )
}

export default Phone
