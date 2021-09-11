import React from "react"
import { Link } from "gatsby"
import IconMenuClose from "../svg/menu-close.svg"
import { gsap } from "gsap"

const Menu = props => (
  <div
    className="menu"
    style={{ backgroundColor: props.backgroundColour, color: props.textColour }}
  >
    <div className="menu__columns">
      <div className="menu__columns__column menu__columns__column--left"></div>
      <div className="menu__columns__column menu__columns__column--right"></div>
    </div>
    <ul className="menu__items">
      <Link to="/news" style={{ color: "black", textDecoration: "none" }}>
        <li className="menu__items__item">News</li>
      </Link>
      <Link to="/about" style={{ color: "black", textDecoration: "none" }}>
        <li className="menu__items__item">About</li>
      </Link>
      <Link to="/vacancies" style={{ color: "black", textDecoration: "none" }}>
        <li className="menu__items__item">Vacancies</li>
      </Link>
      <Link to="/contact" style={{ color: "black", textDecoration: "none" }}>
        <li className="menu__items__item">Contact</li>
      </Link>
      <Link to="/faqs" style={{ color: "black", textDecoration: "none" }}>
        <li className="menu__items__item">FAQs</li>
      </Link>
    </ul>
    <button
      className="menu__items__btn"
      onClick={() => {
        const menu = document.querySelector(".menu")
        menu.classList.remove("menu--open")

        const tl = gsap.timeline()
        // tl.to(
        //   ".menu__items",
        //   {
        //     opacity: 0,
        //     skewX: 20,
        //     duration: 0.2,
        //     ease: "power4.easeOut",
        //   },
        //   "+=0"
        // )

        tl.to(
          ".menu__items",
          {
            opacity: 0,
            skewX: 8,
            duration: 0.2,
            ease: "power4.easeOut",
          },
          "+=0"
        )
          .to(
            ".menu__columns__column--left",
            {
              y: "-100%",
              // yPercent: 10,
              duration: 0.2,
              ease: "power4.easeOut",
            },
            "+=0"
          )
          .to(
            ".menu__columns__column--right",
            {
              y: "100%",
              // yPercent: 10,
              duration: 0.2,
              ease: "power4.easeOut",
            },
            "-=0.1"
          )
          .to(
            ".menu__items__btn",
            {
              opacity: 0,
              duration: 0.1,
              ease: "power4.easeOut",
            },
            "-=0.1"
          )
      }}
    >
      <img src={IconMenuClose} alt="" />
    </button>
  </div>
)

export default Menu
