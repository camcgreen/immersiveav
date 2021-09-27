import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import IconMenuOpen from "../svg/menu-open.svg"
import { gsap } from "gsap"

import Menu from "./menu"

const Header = () => {
  return (
    <>
      <Menu />
      <header className="header">
        <div className="header__container">
          <div className="header__container__logo">
            <Link to="/" className="link">
              <StaticImage
                src="../images/immersiveav-logo.png"
                alt="ImmersiveAV logo"
                placeholder="none"
              />
            </Link>
          </div>
          <nav className="header__container__navigation">
            <Link
              className="header__container__navigation__service-links link"
              to="/live"
            >
              {/* <a className="header__container__navigation__service-links link"> */}
              {/* Live */}
              {/* </a> */}
              Live
            </Link>
            <Link
              className="header__container__navigation__service-links link"
              to="/virtual"
            >
              {/* <a className="header__container__navigation__service-links link"> */}
              Virtual
              {/* </a> */}
            </Link>
            <Link
              className="header__container__navigation__service-links link"
              to="/studio"
            >
              {/* <a className="header__container__navigation__service-links link"> */}
              Studio
              {/* </a> */}
            </Link>
            <Link
              className="header__container__navigation__service-links link"
              to="/hybrid"
            >
              {/* <a className="header__container__navigation__service-links link"> */}
              Hybrid
              {/* </a> */}
            </Link>
            <button
              className="header__container__navigation__btn link"
              onClick={() => {
                const menu = document.querySelector(".menu")
                const tl = gsap.timeline()

                menu.classList.add("menu--open")
                tl.to(
                  ".menu__columns__column--left",
                  {
                    y: 0,
                    // yPercent: 10,
                    duration: 0.2,
                    ease: "power4.easeOut",
                  },
                  "+=0"
                )
                  .to(
                    ".menu__columns__column--right",
                    {
                      y: 0,
                      // yPercent: 10,
                      duration: 0.2,
                      ease: "power4.easeOut",
                    },
                    "-=0.1"
                  )
                  .to(
                    ".menu__items",
                    {
                      opacity: 1,
                      skewX: 0,
                      duration: 0.2,
                      ease: "power4.easeIn",
                    },
                    "+=0.4"
                  )
                  .to(
                    ".menu__items__btn",
                    {
                      opacity: 1,
                      duration: 0.1,
                      ease: "power4.easeOut",
                    },
                    "+=0.1"
                  )
              }}
            >
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 341.333 341.333"
              >
                <g>
                  <g>
                    <rect
                      y="277.333"
                      width="341.333"
                      height="42.667"
                      fill="white"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      y="149.333"
                      width="341.333"
                      height="42.667"
                      fill="white"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      y="21.333"
                      width="341.333"
                      height="42.667"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
