import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
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

import Person1 from "../images/person1.jpg"
import Person2 from "../images/person2.jpg"
import Person3 from "../images/person3.jpg"
import Person4 from "../images/person4.jpg"
import Person5 from "../images/person5.jpg"
import Person6 from "../images/person6.jpg"
import Person7 from "../images/person7.jpg"
import Person8 from "../images/person8.jpg"
import Person9 from "../images/person9.jpg"
import Person10 from "../images/person10.jpg"
import Person11 from "../images/person11.jpg"
import Person12 from "../images/person12.jpg"
import Person13 from "../images/person13.jpg"

const About = () => {
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [paragraph, setParagraph] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [updateKey, setUpdateKey] = useState(0)

  const togglePopup = (image, name, job, paragraph, email, phone) => {
    console.log("toggle")
    const popup = document.querySelector(".about-page__people__popup")
    console.log(popup)

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
      <Header />
      <LowHero key={updateKey} />
      <div className="about-page">
        <div className="bg-av">
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
        </div>
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
                        <g clip-path="url(#clip0)">
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
          <div
            className="about-page__people__item"
            onClick={e => {
              e.persist()
              togglePopup(
                // "../images/person1.jpg",
                Person1,
                "John Doe",
                "AV Technician",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person1.jpg"
              // src={Person1}
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person2.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person3.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person4.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person5.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person6.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person7.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person8.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person9.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person10.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person11.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person12.jpg"
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
                "Name",
                "Job Title",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies dolor massa, non scelerisque lorem finibus vitae. Donec sit amet nulla lacus. Phasellus pharetra vehicula fringilla. Vivamus sit amet neque auctor, commodo quam sed, lobortis felis. Proin luctus metus quis tincidunt posuere. Maecenas faucibus orci nec semper consectetur.| Quisque auctor enim vitae vulputate porttitor. Donec fermentum ornare odio, quis commodo ex mattis quis.",
                "enquiries@immersiveav.com",
                "+441952953500"
              )
            }}
          >
            <StaticImage
              className="showcase__img"
              src="../images/person13.jpg"
              alt="Huawei Rubik's Cube"
            />
            <div className="about-page__people__item__overlay" />
          </div>
        </div>
        <div className="about-page__container">
          <StaticImage
            className="about-page__container__img about-page__container__img--0 about-page__container--left"
            src="../images/news1.jpg"
            alt=""
          />
          <h2 className="about-page__container__h2 about-page__container__h2--0 about-page__container--right">
            We’re a team of intrepid technologists, driven by the spirit of
            innovation and the constant pursuit of excellence.
          </h2>
          <StaticImage
            className="about-page__container__img about-page__container__img--1 about-page__container--left"
            src="../images/news2.jpg"
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
            src="../images/news3.jpg"
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
        <h1 className="empty__title">Create with us.</h1>
      </div>
    </div>
  )
}

export default About
