import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/styles.scss"

const FooterNew = () => (
  <footer className="new-footer">
    <ul className="new-footer__items">
      <li className="new-footer__items__item" style={{ marginBottom: 0 }}>
        <a href="tel:+441952 953500" target="_blank" rel="noopener noreferrer">
          P: 01952 953500
        </a>
      </li>
      <li className="new-footer__items__item">
        <a
          href="mailto:enquiries@immersiveav.com"
          target="_blank"
          rel="noopener noreferrer"
          // className="footer__items__contact__list__item__email"
        >
          E: enquiries@immersiveav.com
        </a>
      </li>
      <li className="new-footer__items__item">
        <StaticImage
          // className="footer__items__partners__image"
          src="../images/partners-white.png"
          alt="Partners"
          placeholder="none"
        />
      </li>
      <li
        className="new-footer__items__item new-footer__items__item--address"
        style={{ marginBottom: 0 }}
      >
        Immersive AV, Technology House,
      </li>
      <li className="new-footer__items__item new-footer__items__item--address">
        Halesfield 7, Telford, TF7 4NA
      </li>
      <li className="new-footer__items__item" style={{ marginBottom: 0 }}>
        <div className="new-footer__items__item__legal">
          © 2021{" "}
          <span className="new-footer__items__item__legal__immersive">
            IMMERSIVE AV
          </span>
          <span> | </span>
          <Link to="/terms-privacy" className="link">
            <span className="new-footer__items__item__legal__terms">
              TERMS & PRIVACY{" "}
            </span>
          </Link>
          <span> | </span>
          <Link to="/cookie-policy" className="link">
            <span className="new-footer__items__item__legal__cookie">
              COOKIE POLICY
            </span>
          </Link>
        </div>
      </li>
    </ul>
  </footer>
)

export default FooterNew
