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
      <Link
        to="/news"
        // style={{ color: "black", textDecoration: "none" }}
      >
        <li className="menu__items__item">News</li>
      </Link>
      <Link
        to="/our-services"
        // style={{ color: "black", textDecoration: "none" }}
      >
        <li className="menu__items__item">Services</li>
      </Link>
      <Link
        to="/about"
        // style={{ color: "black", textDecoration: "none" }}
      >
        <li className="menu__items__item">About</li>
      </Link>
      <Link
        to="/vacancies"
        // style={{ color: "black", textDecoration: "none" }}
      >
        <li className="menu__items__item">Vacancies</li>
      </Link>
      <Link
        to="/contact"
        // style={{ color: "black", textDecoration: "none" }}
      >
        <li className="menu__items__item">Contact</li>
      </Link>
      <Link
        to="/faqs"
        // style={{ color: "black", textDecoration: "none" }}
      >
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
      {/* <img src={IconMenuClose} alt="" /> */}
      <svg
        height="512pt"
        viewBox="0 0 512 512"
        width="512pt"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="black"
          d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
        />
        <path
          fill="black"
          d="m176.8125 351.1875c-4.097656 0-8.195312-1.554688-11.308594-4.691406-6.25-6.25-6.25-16.382813 0-22.632813l158.398438-158.402343c6.253906-6.25 16.386718-6.25 22.636718 0s6.25 16.382812 0 22.636718l-158.402343 158.398438c-3.15625 3.136718-7.25 4.691406-11.324219 4.691406zm0 0"
        />
        <path
          fill="black"
          d="m335.1875 351.1875c-4.09375 0-8.191406-1.554688-11.304688-4.691406l-158.398437-158.378906c-6.253906-6.25-6.253906-16.382813 0-22.632813 6.25-6.253906 16.382813-6.253906 22.632813 0l158.398437 158.398437c6.253906 6.25 6.253906 16.382813 0 22.632813-3.132813 3.117187-7.230469 4.671875-11.328125 4.671875zm0 0"
        />
      </svg>
    </button>
  </div>
)

export default Menu
