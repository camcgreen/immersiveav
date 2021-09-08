import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import IconMenu from "../svg/menu.svg"

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__container__logo">
        <Link to="/">
          <StaticImage
            src="../images/immersiveav-logo.png"
            alt="ImmersiveAV logo"
            placeholder="none"
          />
        </Link>
      </div>
      <nav className="header__container__navigation">
        <Link
          className="header__container__navigation__service-links"
          to="/live"
        >
          Live
        </Link>
        <Link
          className="header__container__navigation__service-links"
          to="/virtual"
        >
          Virtual
        </Link>
        <Link
          className="header__container__navigation__service-links"
          to="/studio"
        >
          Studio
        </Link>
        <Link
          className="header__container__navigation__service-links"
          to="/hybrid"
        >
          Hybrid
        </Link>
        <button className="header__container__navigation__btn">
          <img src={IconMenu} alt="" />
        </button>
      </nav>
    </div>
  </header>
)

export default Header
