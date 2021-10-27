import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import News from "../components/news"
import NewFooter from "../components/footerNew"
import { footerText } from "../utils/helper"

const Cookies = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cookie Policy | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="cookies">
        <h1 className="cookies__h1">Cookie Policy</h1>
        <main className="cookies__container">
          <header>Cookie Policy</header>
          <p>
            Immersive AV uses cookies to improve the user experience on our
            website. We do not pass on or in any way collect personal
            information about you as an individual user. We collect standard
            internet log information and details of visitor behaviour patterns.
            We do this to track the number of visitors to the various parts of
            the site. We collect this information in a way which does not
            personally identify anyone.
          </p>
          <p>
            To find out more about cookies, including how to manage or disable
            them, please visit{" "}
            <a
              class="c-link"
              href="http://www.allaboutcookies.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="slack-kit-tooltip"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>
          <p>
            By continuing to use our website, you agree to allow these cookies
            to be placed on your machine.
          </p>
        </main>
      </div>
      <News />
      <NewFooter />
      <div className="empty">
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default Cookies
