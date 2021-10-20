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

const Hybrid = () => {
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
    "Live integrated with virtual for unparalleled results.",
    "Combine technologies from live and virtual events to create an award-winning hybrid event. ",
  ]
  const paraText = [
    "The definition of a hybrid event is clear: the fusion of live and virtual events. But how do you integrate the two groups of delegates to create a unified experience?",
    "Our hybrid event technology transcends expectations, offering innovation at every touchpoint. Why not combine the best of live and virtual to create a hybrid event which will yield your greatest ever results?",
    "What can we offer for your hybrid event? Our services are as diverse as the clients we serve. From streaming live content from your physical event, to creating a virtual 3D replica of your space online delegates can join.",
    "All our innovations are tailored to maximise user engagement and can be customised to suit your specific needs.",
  ]
  return (
    <ServiceItem
      serviceName="Hybrid"
      heroImage={HeroImage}
      images={images}
      headerText={headerText}
      paraText={paraText}
    />
  )
}

export default Hybrid
