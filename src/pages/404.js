import React from "react"

import Header from "../components/header"
import LowHero from "../components/lowHero"
import News from "../components/news"
import NewFooter from "../components/footerNew"

const NotFoundPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      <div className="not-found">
        <h2 className="not-found__h1">Oops! That page can’t be found.</h2>
      </div>
      <News />
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">Create with us.</h1>
      </div>
    </div>
  )
}

export default NotFoundPage
