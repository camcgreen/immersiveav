import React from "react"
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
            Phone: 01952 953500
          </li>
          <li className="footer__items__contact__list__item">
            Email: enquiries@immersiveav.com
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
      © 2021 <span className="footer__legal__immersive">IMMERSIVE AV</span> |{" "}
      <span className="footer__legal__terms">TERMS & PRIVACY </span> |{" "}
      <span className="footer__legal__cookie">COOKIE POLICY</span>
    </div>
  </footer>
)

export default Footer
