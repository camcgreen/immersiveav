import * as React from "react"

import Header from "../components/header"
import PhoneEmail from "../components/phoneEmail"
import Footer from "../components/footer"

import { faqsList } from "../utils/helper"
import "../styles/styles.scss"
import Phone from "../components/phone"

const FAQs = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="faqs-page">
        <h1 className="faqs-page__h1">FAQs</h1>
        <ul className="faqs-page__list" style={{ paddingLeft: 0 }}>
          {faqsList.length > 0 ? (
            faqsList.map((faq, i) => {
              return (
                <li className="faqs-page__list__item">
                  {/* {faqsList[i].q} */}
                  <button
                    style={{ marginBottom: i === faqsList.length - 1 ? 0 : 80 }}
                    className="faqs-page__list__item__btn"
                    onClick={() => {
                      const body = document.querySelectorAll(
                        ".faqs-page__list__item__body"
                      )[i]
                      const icon = document.querySelectorAll(
                        ".faqs-page__list__item__btn__icon"
                      )[i]
                      if (body.style.display == "none") {
                        body.style.display = "block"
                        icon.innerHTML = "-"
                      } else {
                        body.style.display = "none"
                        icon.innerHTML = "+"
                      }
                    }}
                  >
                    <p className="faqs-page__list__item__btn__text">{faq.q}</p>
                    <p className="faqs-page__list__item__btn__icon">+</p>
                  </button>
                  <div
                    className="faqs-page__list__item__body"
                    style={{ display: "none" }}
                  >
                    <div className="faqs-page__list__item__body__info">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </li>
              )
            })
          ) : (
            <p>No FAQs</p>
          )}
        </ul>
      </div>
      <PhoneEmail />
      <Footer />
    </div>
  )
}

export default FAQs
