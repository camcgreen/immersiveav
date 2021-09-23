import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className="footer">
    <div className="footer__items">
      <div className="footer__items__contact">
        <h1 className="footer__items__contact__title">Get in touch</h1>
        <ul className="footer__items__contact__list">
          <li className="footer__items__contact__list__item">
            Immersive AV, Technology House,
          </li>
          <li className="footer__items__contact__list__item">
            Halesfield 7, Telford, TF7 4NA
          </li>
          <li className="footer__items__contact__list__item">
            Phone:{" "}
            <a
              href="tel:+441952 953500"
              target="_blank"
              rel="noopener noreferrer"
            >
              01952 953500
            </a>
          </li>
          <li className="footer__items__contact__list__item">
            Email:{" "}
            <a
              href="mailto:enquiries@immersiveav.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__items__contact__list__item__email"
            >
              enquiries@immersiveav.com
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__items__partners">
        <h1 className="footer__items__partners__title">Our Partners</h1>
        <StaticImage
          className="footer__items__partners__image"
          src="../images/partners.png"
          alt="Partners"
          placeholder="none"
        />
      </div>
    </div>
    <div className="footer__legal">
      {/* <Link to="/" className="link"> */}© 2021{" "}
      <span className="footer__legal__immersive">IMMERSIVE AV</span>
      {/* </Link> */}
      <span> | </span>
      {/* <Link to="/terms-privacy" className="link"> */}
      <a className="header__container__navigation__service-links link">
        <span className="footer__legal__terms">TERMS & PRIVACY </span>
      </a>
      {/* </Link> */}
      <span> | </span>
      {/* <Link to="/cookie-policy" className="link"> */}
      <a className="header__container__navigation__service-links link">
        <span className="footer__legal__cookie">COOKIE POLICY</span>
      </a>
      {/* </Link> */}
    </div>
  </footer>
)

export default Footer
