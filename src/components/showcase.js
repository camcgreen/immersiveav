import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"

const Showcase = () => {
  return (
    <div className="showcase">
      <Carousel interval={3500} pause={false} touch={true}>
        <Carousel.Item>
          <div className="showcase__gradient"></div>
          <StaticImage
            className="showcase__img"
            src="../images/project4.jpeg"
            alt="Panasonic Virtual Conference"
          />
          <div className="showcase__content">
            <h1 className="showcase__content__company">Panasonic</h1>
            <h2 className="showcase__content__project">Virtual Conference</h2>
            <button className="showcase__content__btn">Discover</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="showcase__gradient"></div>
          <StaticImage
            className="showcase__img"
            src="../images/project5.jpeg"
            alt="Huawei Rubik's Cube"
          />
          <div className="showcase__content">
            <h1 className="showcase__content__company">Huawei</h1>
            <h2 className="showcase__content__project">Rubik's Cube</h2>
            <button className="showcase__content__btn">Discover</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="showcase__gradient"></div>
          <StaticImage
            className="showcase__img"
            src="../images/project1.jpeg"
            alt="Adidas Retail Installation"
          />
          <div className="showcase__content">
            <h1 className="showcase__content__company">Adidas</h1>
            <h2 className="showcase__content__project">Retail Installation</h2>
            <button className="showcase__content__btn">Discover</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="showcase__gradient"></div>
          <StaticImage
            className="showcase__img"
            src="../images/project2.jpeg"
            alt="Mini All Electric Launch"
          />
          <div className="showcase__content">
            <h1 className="showcase__content__company">Mini</h1>
            <h2 className="showcase__content__project">All Electric Launch</h2>
            <button className="showcase__content__btn">Discover</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="showcase__gradient"></div>
          <StaticImage
            className="showcase__img"
            src="../images/project3.jpeg"
            alt="UMA Music Video"
          />
          <div className="showcase__content">
            <h1 className="showcase__content__company">UMA</h1>
            <h2 className="showcase__content__project">Music Video</h2>
            <button className="showcase__content__btn">Discover</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Showcase
