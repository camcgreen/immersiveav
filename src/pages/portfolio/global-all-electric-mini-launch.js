import React from "react"

import PortfolioItem from "../../components/portfolioItem"

import HeroImage from "../../images/project1.jpeg"
import Adidas1 from "../../images/adidas1.jpg"
import Adidas2 from "../../images/adidas2.jpg"
import Adidas3 from "../../images/adidas3.jpg"
import Adidas4 from "../../images/adidas4.jpg"
import Adidas5 from "../../images/adidas5.jpg"
import Adidas6 from "../../images/adidas6.jpg"
import Adidas7 from "../../images/adidas7.jpg"
import Adidas8 from "../../images/adidas8.jpg"
import Adidas9 from "../../images/adidas9.jpg"

const Mini = () => {
  const images = [
    Adidas1,
    Adidas2,
    Adidas3,
    Adidas4,
    Adidas5,
    Adidas6,
    Adidas7,
    Adidas8,
    Adidas9,
  ]
  return (
    <PortfolioItem
      projectName="Mini All Electric Launch"
      heroImage={HeroImage}
      images={images}
    />
  )
}

export default Mini
