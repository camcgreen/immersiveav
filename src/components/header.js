import React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
        <Link to="/live">Live</Link>
        <Link to="/virtual">Virtual</Link>
        <Link to="/studio">Studio</Link>
        <Link to="/hybrid">Hybrid</Link>
        <button>MENU</button>
      </nav>
    </div>
  </header>
)

export default Header
