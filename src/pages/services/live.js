import React from "react"

import ServiceItem from "../../components/serviceItem"

import HeroImage from "../../images/live-1.jpeg"
import Live1 from "../../images/news1.jpg"
import Live2 from "../../images/live-2.jpeg"
import Live3 from "../../images/live-3.jpeg"
import Live4 from "../../images/project1.jpeg"
import Live5 from "../../images/project2.jpeg"
import Live6 from "../../images/project3.jpeg"
import Live7 from "../../images/project4.jpeg"
import Live8 from "../../images/project5.jpeg"
import Live9 from "../../images/hire.jpg"
import Live10 from "../../images/expo.jpg"

const Live = () => {
  const images = [
    Live1,
    Live2,
    Live3,
    Live4,
    Live5,
    Live6,
    Live7,
    Live8,
    Live9,
    Live10,
  ]
  const headerText = [
    "We’re a full service technical production supplier for all your live event needs.",
    "You dream, we do.",
  ]
  const paraText = [
    "We use leading-edge software and hardware to create solution which attract attention, maximise engagement and collect usage data.",
    "Examples of our experiential installations include: interactive touch walls, projection mapping, gesture-controlled content, large scale video walls, generative content and other scalable interactions between physical technology and digital content.",
    "Want to attract attention at your live event? We’ll create a solution which makes you stand out from the crowd and have an unstemable flow of people. Engagement is king—what better way to enhance the time people spend in your space than through interactivity? Custom games, interactive walls, and responsive content are all proven methods of capturing people’s attention. Whatever your interactive dreams, we’ll make them a reality!",
    "Engagement is king—what better way to enhance the time people spend in your space than through interactivity? Custom games, interactive walls, and responsive content are all proven methods of capturing people’s attention. Whatever your interactive dreams, we’ll make them a reality!",
  ]
  return (
    <ServiceItem
      serviceName="Live"
      heroImage={HeroImage}
      images={images}
      headerText={headerText}
      paraText={paraText}
    />
  )
}

export default Live
