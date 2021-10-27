import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import News from "../components/news"
import NewFooter from "../components/footerNew"
import { footerText } from "../utils/helper"

const NotFoundPage = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero />
      <div className="not-found">
        <h2 className="not-found__h1">Oops! That page can’t be found.</h2>
      </div>
      <News />
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default NotFoundPage
