import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import { faqsList } from "../utils/helper"
import "../styles/styles.scss"

const FAQs = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="faqs-page">
        <h1 className="faqs-page__h1">Frequently Asked Questions</h1>
        <ul className="faqs-page__list">
          {faqsList.length > 0 ? (
            faqsList.map((faq, i) => {
              return (
                <li className="faqs-page__list__item">
                  {/* {faqsList[i].q} */}
                  <button
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
      <Footer />
    </div>
  )
}

export default FAQs
