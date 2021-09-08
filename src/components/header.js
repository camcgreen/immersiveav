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
          style={{ color: "white", textDecoration: "none" }}
        >
          Live
        </Link>
        <Link
          className="header__container__navigation__service-links"
          to="/virtual"
          style={{ color: "white", textDecoration: "none" }}
        >
          Virtual
        </Link>
        <Link
          className="header__container__navigation__service-links"
          to="/studio"
          style={{ color: "white", textDecoration: "none" }}
        >
          Studio
        </Link>
        <Link
          className="header__container__navigation__service-links"
          to="/hybrid"
          style={{ color: "white", textDecoration: "none" }}
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
