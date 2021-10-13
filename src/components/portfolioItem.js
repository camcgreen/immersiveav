import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import LowHero from "./lowHero"
import SubHero from "./subHero"
import News from "./news"
import Footer from "./footer"
import NewFooter from "../components/footerNew"

import bgBlue from "../svg/bg-blue.svg"
import bgOrange from "../svg/bg-orange.svg"

import "../styles/styles.scss"

const PortfolioItem = props => {
  console.log(props.heroImage)
  return (
    <div className="wrapper">
      <Header />
      <LowHero />
      {/* <div className="bg-white"></div> */}
      {/* <div className="bg-av">
        <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
        <img className="bg-av__img bg-av__img--orange" src={bgOrange} alt="" />
      </div> */}
      <div className="portfolio-item">
        <div className="bg-av">
          <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
          <img
            className="bg-av__img bg-av__img--orange"
            src={bgOrange}
            alt=""
          />
        </div>
        <h1 className="portfolio-item__h1">{props.projectName}</h1>
        <div className="portfolio-item__container">
          {/* <StaticImage
            className="portfolio-item__container__hero-image"
            src={props.heroImage}
            // src={"../images/news1.jpg"}
            alt=""
          /> */}
          <img
            src={props.heroImage}
            alt=""
            className="portfolio-item__container__hero-image"
          />
          <div className="portfolio-item__container__hero-array">
            <img
              src={props.images[0]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--1"
            />
            <img
              src={props.images[1]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--2"
            />
            <img
              src={props.images[2]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--3"
            />
            <img
              src={props.images[3]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--4"
            />
            <img
              src={props.images[5]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--5"
            />
            <img
              src={props.images[4]}
              alt=""
              className="portfolio-item__container__hero-array__img portfolio-item__container__hero-array__img--6"
            />
          </div>
          <div className="portfolio-item__container__quote">
            <h1 className="portfolio-item__container__quote__h1">
              {'" Lorem ipsum dolor sit amet, consecteur adipiscing'}
            </h1>
            <h3 className="portfolio-item__container__quote__h3">
              Name of client
            </h3>
          </div>
          <div className="portfolio-item__container__challenge">
            <h2 className="portfolio-item__container__challenge__h2">
              Challenge
            </h2>
            <p className="portfolio-item__container__challenge__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              semper dolor. Aliquam gravida purus vel sem facilisis viverra.
              Vestibulum eu sapien vel nisl semper consectetur sed et lorem. Sed
              non metus vel mi rutrum pulvinar. Quisque purus odio, malesuada
              eget lorem sit amet, blandit mollis massa. Suspendisse potenti.
              Aenean at odio eget mi luctus suscipit. Ut vel ipsum sit amet eros
              pulvinar aliquam condimentum vel erat. Etiam et urna auctor,
              rhoncus eros in, tristique augue. Maecenas et nunc et mi convallis
              efficitur. Praesent accumsan nibh sed turpis bibendum euismod.
              Donec vel nibh nec mauris aliquet euismod quis vitae libero. Nunc
              accumsan elementum augue, id finibus arcu posuere eu. Pellentesque
              ullamcorper turpis et nibh posuere vehicula. Etiam malesuada urna
              orci, vitae fringilla purus dapibus eu. Cras tincidunt justo sed
              ex pellentesque accumsan. Nam malesuada est ac consequat tempor.
              Curabitur facilisis velit at viverra sagittis. Morbi fringilla
              bibendum est, eu sagittis velit placerat et. Vestibulum dui elit,
              pulvinar non turpis in, ultricies tincidunt magna. Duis quis dolor
              elit. Vivamus sed velit sed ligula fermentum tristique. Proin eget
              risus enim. Maecenas sollicitudin nisi vestibulum vulputate
              facilisis.
            </p>
          </div>
          <div className="portfolio-item__container__solution">
            <h2 className="portfolio-item__container__solution__h2">
              Solution
            </h2>
            <p className="portfolio-item__container__solution__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              semper dolor. Aliquam gravida purus vel sem facilisis viverra.
              Vestibulum eu sapien vel nisl semper consectetur sed et lorem. Sed
              non metus vel mi rutrum pulvinar. Quisque purus odio, malesuada
              eget lorem sit amet, blandit mollis massa. Suspendisse potenti.
              Aenean at odio eget mi luctus suscipit. Ut vel ipsum sit amet eros
              pulvinar aliquam condimentum vel erat. Etiam et urna auctor,
              rhoncus eros in, tristique augue. Maecenas et nunc et mi convallis
              efficitur. Praesent accumsan nibh sed turpis bibendum euismod.
              Donec vel nibh nec mauris aliquet euismod quis vitae libero. Nunc
              accumsan elementum augue, id finibus arcu posuere eu. Pellentesque
              ullamcorper turpis et nibh posuere vehicula. Etiam malesuada urna
              orci, vitae fringilla purus dapibus eu. Cras tincidunt justo sed
              ex pellentesque accumsan. Nam malesuada est ac consequat tempor.
              Curabitur facilisis velit at viverra sagittis. Morbi fringilla
              bibendum est, eu sagittis velit placerat et. Vestibulum dui elit,
              pulvinar non turpis in, ultricies tincidunt magna. Duis quis dolor
              elit. Vivamus sed velit sed ligula fermentum tristique. Proin eget
              risus enim. Maecenas sollicitudin nisi vestibulum vulputate
              facilisis.
            </p>
          </div>
          <div className="portfolio-item__container__supplementary-images">
            <img
              src={props.images[1]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--1"
            />
            <img
              src={props.images[7]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--2"
            />
            <img
              src={props.images[8]}
              alt=""
              className="portfolio-item__container__supplementary-images__img portfolio-item__container__supplementary-images__img--3"
            />
          </div>
          <div className="portfolio-item__container__quote">
            <h1 className="portfolio-item__container__quote__h1">
              Lorem ipsum dolor sit amet
            </h1>
          </div>
          <div className="portfolio-item__container__result">
            <h2 className="portfolio-item__container__result__h2">Result</h2>
            <p className="portfolio-item__container__result__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              semper dolor. Aliquam gravida purus vel sem facilisis viverra.
              Vestibulum eu sapien vel nisl semper consectetur sed et lorem. Sed
              non metus vel mi rutrum pulvinar. Quisque purus odio, malesuada
              eget lorem sit amet, blandit mollis massa. Suspendisse potenti.
              Aenean at odio eget mi luctus suscipit. Ut vel ipsum sit amet eros
              pulvinar aliquam condimentum vel erat. Etiam et urna auctor,
              rhoncus eros in, tristique augue. Maecenas et nunc et mi convallis
              efficitur. Praesent accumsan nibh sed turpis bibendum euismod.
              Donec vel nibh nec mauris aliquet euismod quis vitae libero. Nunc
              accumsan elementum augue, id finibus arcu posuere eu. Pellentesque
              ullamcorper turpis et nibh posuere vehicula. Etiam malesuada urna
              orci, vitae fringilla purus dapibus eu. Cras tincidunt justo sed
              ex pellentesque accumsan. Nam malesuada est ac consequat tempor.
              Curabitur facilisis velit at viverra sagittis. Morbi fringilla
              bibendum est, eu sagittis velit placerat et. Vestibulum dui elit,
              pulvinar non turpis in, ultricies tincidunt magna. Duis quis dolor
              elit. Vivamus sed velit sed ligula fermentum tristique. Proin eget
              risus enim. Maecenas sollicitudin nisi vestibulum vulputate
              facilisis.
            </p>
          </div>
        </div>
      </div>
      <News />
      {/* <Footer /> */}
      <NewFooter />
      <div className="empty">
        {/* <SubHero /> */}
        <h1 className="empty__title">Create with us.</h1>
      </div>
    </div>
  )
}

export default PortfolioItem
