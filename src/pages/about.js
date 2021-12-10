import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import BgAv from "../components/bgAv"
import LowHero from "../components/lowHero"
import SubHero from "../components/subHero"
import News from "../components/news"
// import Footer from "../components/footer"
import NewFooter from "../components/footerNew"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import bgBlue from "../svg/bg-blue.svg"
import bgOrange from "../svg/bg-orange.svg"
import bgArrowOrange from "../svg/bg-arrow-orange.svg"

import Person1 from "../images/bob.jpg"
import Person2 from "../images/christine.jpg"
import Person3 from "../images/russell.jpg"
import Person4 from "../images/andy.jpg"
import Person5 from "../images/Becca.jpg"
import Person6 from "../images/Ben.jpg"
import Person7 from "../images/emily.jpg"
import Person8 from "../images/Hayley.jpg"
import Person9 from "../images/Leroy.jpg"
import Person10 from "../images/Matt.jpg"
import Person11 from "../images/Paul.jpg"
import Person12 from "../images/Rob.jpg"
import Person13 from "../images/Steve.jpg"
import Person14 from "../images/Stewart.jpg"
import Person15 from "../images/tom.jpg"
import Person16 from "../images/sam.jpg"
import Person17 from "../images/scott-j.jpg"
import Person18 from "../images/scott-h.jpg"
import Person19 from "../images/chloe.jpg"
import { footerText } from "../utils/helper"

const About = () => {
  // const paras = gsap.utils.toArray(".about-page__container p")
  // paras.forEach(para => {
  //   gsap.to(para, {
  // x: 300,
  // scrollTrigger: {
  //   trigger: para,
  //   scrub: true,
  //     },
  //   })
  // })

  // gsap.to("about-page__container__p--1", {
  //   x: 300,
  //   scrollTrigger: {
  //     trigger: "about-page__container__p--1",
  //     scrub: true,
  //   },
  // })

  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [paragraph, setParagraph] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [updateKey, setUpdateKey] = useState(0)

  const togglePopup = (image, name, job, paragraph, email, phone) => {
    const popup = document.querySelector(".about-page__people__popup")

    if (image && name && job && paragraph && email && phone) {
      setImage(image)
      setName(name)
      setJob(job)
      setParagraph(paragraph)
      setEmail(email)
      setPhone(phone)
      ScrollTrigger.refresh()
      ScrollTrigger.getAll().forEach(instance => {
        instance.kill()
      })
      setUpdateKey(updateKey + 1)
    }

    if (popup.style.pointerEvents === "none") {
      popup.style.pointerEvents = "all"
      gsap.to(popup, {
        opacity: 1,
        duration: 0.2,
        ease: "power4.in",
      })
    } else {
      gsap.to(popup, {
        opacity: 0,
        duration: 0.2,
        ease: "power4.out",
      })
      setTimeout(() => {
        popup.style.pointerEvents = "none"
      }, 200)
    }
  }
  return (
    <div className="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | ImmersiveAV</title>
      </Helmet>
      <Header />
      <LowHero key={updateKey} />
      <div className="about-page">
        {/* <div className="bg-av">
          <img className="bg-av__img bg-av__img--blue" src={bgBlue} alt="" />
          <img
            className="bg-av__img bg-av__img--orange bg-av__img--orange--about"
            src={bgOrange}
            alt=""
          />
          <img
            className="bg-av__img bg-av__img--arrow-orange bg-av__img--arrow-orange--about"
            src={bgArrowOrange}
            alt=""
          />
        </div> */}
        <BgAv page="about" key={updateKey} />
        <h1 className="about-page__h1">About</h1>
        <div className="about-page__people">
          <div
            className="about-page__people__popup"
            style={{ pointerEvents: "none", opacity: 0 }}
          >
            <svg
              onClick={() => togglePopup()}
              className="about-page__people__popup__close"
              height="512pt"
              viewBox="0 0 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
              />
              <path
                fill="white"
                d="m176.8125 351.1875c-4.097656 0-8.195312-1.554688-11.308594-4.691406-6.25-6.25-6.25-16.382813 0-22.632813l158.398438-158.402343c6.253906-6.25 16.386718-6.25 22.636718 0s6.25 16.382812 0 22.636718l-158.402343 158.398438c-3.15625 3.136718-7.25 4.691406-11.324219 4.691406zm0 0"
              />
              <path
                fill="white"
                d="m335.1875 351.1875c-4.09375 0-8.191406-1.554688-11.304688-4.691406l-158.398437-158.378906c-6.253906-6.25-6.253906-16.382813 0-22.632813 6.25-6.253906 16.382813-6.253906 22.632813 0l158.398437 158.398437c6.253906 6.25 6.253906 16.382813 0 22.632813-3.132813 3.117187-7.230469 4.671875-11.328125 4.671875zm0 0"
              />
            </svg>
            <div className="about-page__people__popup__text">
              <img
                src={image}
                alt=""
                className="about-page__people__popup__text__img"
              />
              {/* <StaticImage
                className="about-page__people__popup__text__img"
                src={image}
                alt="Huawei Rubik's Cube"
              /> */}
              <div className="about-page__people__popup__text__bio">
                <h2 className="about-page__people__popup__text__bio__h2">
                  {name}
                </h2>
                <h3 className="about-page__people__popup__text__bio__h3">
                  {job}
                </h3>
                <div className="about-page__people__popup__text__bio__btns">
                  <a
                    href={`tel:${phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="phone-email__container__block__text"
                  >
                    <button className="about-page__people__popup__text__bio__btns__btn">
                      <svg
                        className="about-page__people__popup__text__bio__btns__svg"
                        width="24"
                        height="24"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M28.075 36.907L35.8089 44.6409C36.5015 45.3335 37.566 45.4899 38.4286 45.027L47.697 40.0514C48.3825 39.6831 49.2109 39.7009 49.8801 40.0984L63.403 48.1231C64.3679 48.6955 64.7562 49.893 64.3046 50.9198C63.1491 53.5495 61.0457 58.3693 60.2101 60.5004C60.0345 60.9491 59.7728 61.3601 59.4087 61.6752C50.3963 69.4873 32.4653 59.9685 18.7405 46.2437C5.01346 32.5181 -4.50527 14.5871 3.30683 5.57466C3.62256 5.21058 4.03357 4.9489 4.48156 4.77326C6.612 3.93772 11.4325 1.8343 14.0622 0.678767C15.089 0.227221 16.2865 0.615479 16.8589 1.58044L24.8836 15.1033C25.2804 15.7725 25.2982 16.6009 24.9305 17.2864L19.955 26.5534C19.4921 27.416 19.6485 28.4805 20.3411 29.1731L28.075 36.907Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="64" height="64" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </a>
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="phone-email__container__block__text"
                  >
                    <button className="about-page__people__popup__text__bio__btns__btn">
                      <svg
                        className="about-page__people__popup__text__bio__btns__svg"
                        width="24"
                        height="24"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.0012 36.772L63.5102 13.0562V11.6789C63.5102 10.2575 62.3577 9.10498 60.9363 9.10498H3.06612C1.64472 9.10498 0.492188 10.2575 0.492188 11.6789V13.0562L32.0012 36.772Z"
                          fill="white"
                        />
                        <path
                          d="M33.6852 42.5165C33.1866 42.8918 32.5936 43.0795 32.0012 43.0795C31.4088 43.0795 30.8158 42.8918 30.3172 42.5165L0.492188 20.0674V52.3214C0.492188 53.7428 1.64472 54.8953 3.06612 54.8953H60.9363C62.3577 54.8953 63.5102 53.7428 63.5102 52.3214V20.0674L33.6852 42.5165Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
              {/* <Link
                className="about-page__people__popup__text__link"
                to={"/about" + link}
              >
                <button className="about-page__people__popup__text__btn">
                  See project
                </button>
              </Link> */}
              <div className="about-page__people__popup__text__description">
                <p className="about-page__people__popup__text__description__p">
                  {paragraph.split("|")[0]}
                </p>
                <p className="about-page__people__popup__text__description__p">
                  {paragraph.split("|")[1]}
                </p>
              </div>
            </div>
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          {/* <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person5,
                "Sharon Reynolds",
                "Founder & CEO",
                "Sharon is the driving force behind everything we do. She has incredible ideas and strategies which result in memorable experiences for our customers. Sharon’s management philosophy is for the business to have a family feel, where everyone feels included and important.| Her passion and energy run throughout Immersive AV. Sharon is the embodiment of the Immersive AV philosophy that anything’s possible.",
                "sharon.reynolds@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person5}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div> */}
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                // "../images/person1.jpg",
                Person1,
                "Bob Walsh",
                "Head of Projects & Technical",
                "Bob’s our onsite general and guru of all things technical. With 25 years experience of delivering events of all shapes and sizes, not even the smallest problem can get past Bob. The events Bob manages run almost as smooth as his infectious Irish charm.| Your event’s in safe hands if it’s passed the fastidious eye of Bob Walsh.",
                "bob.walsh@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              // src="../images/bob.jpg"
              src={Person1}
              alt="Huawei Rubik's Cube"
            />
            {/* <img src={Person1} alt="" className="showcase__img" /> */}
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person2,
                "Christine Jones",
                "Finance Manager",
                "The life and soul of the accounts department, she is our queen of all things admin and finance. With her experience, she helps make the best financial decisions for the company.| Christine is very approachable, if you ever have a problem at work or whether it be something personal she is always there to help you.  ",
                "christine.jones@immersiveav.com ",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              // src="../images/christine.jpg"
              src={Person2}
              alt="Huawei Rubik's Cube"
            />
            {/* <img src={Person1} alt="" className="showcase__img" /> */}
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person3,
                "Russell Young",
                "Account Director",
                "Probably the geekiest member of the account management team, Russ is a wealth of knowledge on all things technical. Russell is passionate about finding new ways of integrating physical and digital technologies to achieve better-than-before results.| The perfect link between sales and technical, Russell will blow your mind with incredible ideas—then shock you again as he brings them to life.",
                "russell.young@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              // src="../images/person3.jpg"
              src={Person3}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person4,
                "Andrew Rowley",
                "Warehouse Manager",
                "Andrew’s organisation and logistical foresight keep the Immersive AV train on track. His depth of knowledge and extensive experience foresee complications before they happen and contribute to the seamless execution of Immersive AV projects.| Andrew leads the warehouse team, with a finger on the pulse of all operational activities.",
                "andy.rowley@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person4}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person5,
                "Rebecca Wilson",
                "Marketing Assistant",
                "Rebecca works with a smile on her face and brings a background of social media excellence and creative ideas to our team. Supporting the marketing department to deliver strategies and campaigns to fit the company's needs.| She knows how to achieve success through social platforms creating engaging and memorable content.  ",
                "rebecca.wilson@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person5}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person6,
                "Ben Degg",
                "Senior Project Manager",
                "Ben’s a man of many talents, loved by everyone at Immersive AV. As Senior Project Manager, Ben oversees the planning and onsite management of our events. He’s an established Project Manager with many years experience of live and virtual events.| When not working on Immersive AV projects, Ben can be found touring with his band The UMA.",
                "ben.degg@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person6}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person7,
                "Emily Ball",
                "Account Director",
                "As the longest serving member of our team, with 16 years loyal service under her belt, Emily knows the capabilities of Immersive AV better than anyone.| Passionate about achieving outstanding customer service, Emily takes pride in going the extra mile for our clients.",
                "emily.ball@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person7}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          {/* <div className="about-page__people__item"></div> */}
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person8,
                "Hayley Woodall",
                "Account Director",
                "To meet Hayley is to love Hayley! Without question one of the most memorable people in our team, Hayley is full of life and passionate about achieving results.| She knows the industry inside out and is motivated by delivering outstanding customer service and ensuring our client’s expectations are always exceeded. ",
                "hayley.woodall@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person8}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person9,
                "Leroy Murray",
                "Projects Director",
                "One of the most organised and knowledgeable people you’ll ever meet, Leroy leads our project management team with a combination of command and capability. A veteran of the industry, Leroy’s worked on events of all scales during a career which spans over 30 years.| A wealth of information and advice, Leroy’s input is guaranteed to make any event run smoother and leave a lasting impression.",
                "leroy.murray@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person9}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person10,
                "Matt Rakowski",
                "Marketing Manager",
                "As an ambitious marketer with 20 years experience in the events industry, Matt brings pragmatism and creativity to his role as Marketing Manager. Matt combines an artistic flair with his extensive technical understanding to communicate the benefits of Immersive AV solutions, which our customers will reap when utilising our services.| An established photographer and copywriter, Matt is one of the leading Marketing Managers in the events industry.",
                "matt.rakowski@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person10}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person11,
                "Paul Flaherty",
                "Account Director",
                "Paul’s one of the most charming and charismatic members of the team.| Highly experienced at delivering engaging experiences for clients at events of all types—projects under Paul’s expert stewardship are in the safest hands.",
                "paul.flaherty@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person11}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person12,
                "Rob Levy",
                "Project Manager",
                "Rob’s positive attitude and inquisitive nature set him apart as one of our most popular Project Managers with clients and onsite crew.| Rob brings many years experience and a meticulous attention to detail—ensuring projects overseen by Rob Levy are destined for success.",
                "rob.levy@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person12}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person14,
                "Stewart Morgan",
                "Assistant Warehouse Manager",
                "As one of our senior warehouse team, Stewart is a key component in bringing Immersive AV projects to life. His product knowledge and logistics experience pays dividends when prepping for jobs.| Also an accomplished electronics engineer, Stewart helps keep our AV stock in perfect working order.",
                "stewart.morgan@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person14}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person19,
                "Chloe Retter",
                "Business Relationship Director",
                "Chloe brings boundless energy and exceptional knowledge to her role as Business Relationship Director. With over 10 years of experience in the exhibitions sector, Chloe truly is an expo girl—one of the key weapons in our arsenal to elevate Immersive AV Expo as Europe’s leading supplier of interactive technology for exhibitions.| You’ll feel nothing but positivity and the assurance everything’s possible when talking to Chloe.",
                "chloe.retter@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person19}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person13,
                "Steve Hallsworth",
                "Founder and Financial Director",
                "One of the founders of Immersive AV, Steve’s vast experience is an asset to the business. His industry knowledge and fiscal acumen make him the ideal Financial Director.| More than just a number cruncher, Steve’s approachability and dry humour make him popular with staff and clients alike.",
                "steve.hallsworth@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person13}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person18,
                "Scott Holman",
                "Sales Manager",
                "Leading the Immersive AV Expo team, Scott’s one of the bigger personalities at Immersive AV, with a lovable, bombastic charm which always leaves a lasting impression.| Scott’s focus is on exhibitions and conferences, working with our clients to achieve their best ever event experience. ",
                "scott.holman@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person18}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          {/* <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person14,
                "David Mulcahy",
                "Technical Director",
                "The genius behind most of Immersive AV’s groundbreaking installations, David is a deep well of knowledge and experience gathered during a career spanning over 30 years.| Driven by challenges and achieving the seemingly impossible, David’s a true gentleman with an exceptional mind.",
                "david.mulcahy@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person14}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div> */}
          <div className="about-page__people__item about-page__people__item--empty"></div>
          {/* <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person14,
                "Rob Adams",
                "Operations Manager",
                "Rob’s an established member of the Immersive AV team, with over a decade of experience fulfilling a variety of roles. As Operations Manager, Rob oversees the logistics of bringing our projects to life.| A friendly and personable character, Rob’s cheery approach brightens everyone’s day.",
                "rob.adams@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person14}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div> */}
          <div className="about-page__people__item about-page__people__item--empty"></div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person17,
                "Scott Jones",
                "Account Director",
                "Without doubt the most stylish member of our team, Scott’s charm will win over even the most hesitant minds. Scott has extensive experience creating wow factor experiences which maximise engagement for our clients.| A level-headed problem solver, Scott knows how to lever emerging and established technologies to achieve great results.",
                "scott.jones@immersievav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person17}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          {/* <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person14,
                "Mike Kershaw",
                "Non Executive Chairman",
                "As one of the most experienced leaders in the events industry, Mike’s position on our board and at the head of our senior leadership team sets us apart from the competition.| Mike’s industry knowledge and business acumen keep Immersive AV on track and ensure all commercial ventures and new technologies make good business sense.",
                "mike.kershaw@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person14}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div> */}
          <div className="about-page__people__item about-page__people__item--empty"></div>
          {/* <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person14,
                "Mike Coupland",
                "Senior AV Technician",
                "One of the most studious and intellectual members of our team, Mike is an instrumental cog in the machinery which brings our projects to life on site.| His technical knowledge and attention to detail mean all the jobs crewed by Mike are in safe hands.",
                "micheal.coupland@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person14}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div> */}
          {/* <div className="about-page__people__item about-page__people__item--empty"></div> */}
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person16,
                "Sam Hayward",
                "AV Technician",
                "An efficient and proactive AV technician, Sam’s friendly and positive attitude makes him a big hit with both clients and colleagues.| Sam’s talents span the full spectrum of live and virtual events, having taken the initiative to elevate himself to the level of expert in both disciplines.",
                "sam.hayward@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person16}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                Person15,
                "Tom Adlam",
                "AV Technician",
                "An accomplished and mild-mannered member of our onsite team, Tom is a meticulous and unflappable AV Technician of the highest order.| Tom’s knowledge and experience enable him to bring even the most complex installations to life and ensure our clients enjoy a hassle-free experience which delivers real results.",
                "tom.adlam@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <img
              className="showcase__img"
              src={Person15}
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
        </div>
        <div className="about-page__container">
          <StaticImage
            className="about-page__container__img about-page__container__img--0 about-page__container--left"
            src="../images/about-new-1.jpg"
            alt=""
          />
          <h2 className="about-page__container__h2 about-page__container__h2--0 about-page__container--right">
            We’re driven by the spirit of innovation and the constant pursuit of
            excellence.
          </h2>
          <StaticImage
            className="about-page__container__img about-page__container__img--1 about-page__container--left"
            src="../images/about-new-2.jpg"
            alt=""
          />
          <p className="about-page__container__p about-page__container__p--0 about-page__container--right">
            Our solutions utilise established methods and emerging technologies
            to break boundaries and get people talking. No idea is too bold, no
            concept too audacious or dream too far-fetched. We settle only for
            perfection and move heaven and earth to get there.
          </p>
          <StaticImage
            className="about-page__container__img about-page__container__img--2 about-page__container--left"
            src="../images/about-new-3.jpg"
            alt=""
          />
          <h2 className="about-page__container__h2 about-page__container__h2--1 about-page__container--left">
            Experience matters
          </h2>
          <p className="about-page__container__p about-page__container__p--1 about-page__container--right">
            Founded 21 years ago as ITR, Immersive AV has evolved to become one
            of Europe’s leading specialists in technical production services for
            events, experiences and activations. We work exclusively for
            agencies. We’ll be the extension of your creative team, guiding you
            through the technical conundrums and helping to deliver a memorable
            experience for your clients.
          </p>
          <p className="about-page__container__p about-page__container__p--1 about-page__container__p about-page__container__p--1--margin about-page__container--right">
            Experience is at the heart of everything we do. Our solutions are
            tailored to create an unforgettable user experience. Our services
            revolve around our client’s experience, ensuring you receive
            exceptional customer service throughout our partnership. And our
            experience matters. Utilise our knowledge and industry experience by
            tapping into some of the finest minds in the industry, and make your
            next event amazing.
          </p>
        </div>
      </div>
      <News />
      <NewFooter />
      <div className="empty">
        <h1 className="empty__title">{footerText}</h1>
      </div>
    </div>
  )
}

export default About
