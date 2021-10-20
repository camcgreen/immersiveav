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

const Virtual = () => {
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
    "Immersive AV are a virtual event production specialist, with experience at every stage, from concept development to online delivery.",
    "Dream big and achieve your greatest potential with a virtual event from Immersive AV.",
  ]
  const paraText = [
    "Liberated from the restraints of a physical event, a virtual event enables the curation of the user experience to suit your event objectives.",
    "The exciting new world of virtual events is paved with limitless opportunities. The opportunity to present your brand exactly how you want. The opportunity for online visitors to access your virtual event from anywhere at any time; and the opportunity to collect more data and user insights than ever before. We’ll take care of all your virtual event requirements. We’ll present concepts, develop the content and look after all hosting needs. We’ll manage the entire production and delivery process, keeping you updated with progress reports and visualisations.",
    "A virtual event is an exciting opportunity to reach a greater audience than ever before. Releasing the shackles of time zone and geographic location makes your event accessible to more people.",
    "Our developers will create the experience to your specific requirements, in terms of look and functionality. Whatever you need, we can do—from 3D environments to embedded digital assets and integration with social media and e-commerce platforms.",
  ]
  return (
    <ServiceItem
      serviceName="Virtual"
      heroImage={HeroImage}
      images={images}
      headerText={headerText}
      paraText={paraText}
    />
  )
}

export default Virtual
