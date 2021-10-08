import * as React from "react";
import Header from "../components/header";
import Phone from "../components/phone";
import Footer from"../components/footer";
import HireExpo from "../components/hire-expo";
import Hero from "../components/hero";
import SubFooter from "../components/subFooter";
import "../styles/our-services.scss"
import { StaticImage } from "gatsby-plugin-image";


/*<StaticImage
            className="servicesFirstSectionBackground"
            src={LogoOnlyBlue}
            alt=""/>
            <Header/>
    <Phone/>
    <Hero/>
            
     <HireExpo/>
        <Footer/>
       <SubFooter/>        
            
            
            
            
            
            */
//<img src={IconPhone} alt="" />
//<img src={LogoOnlyBlue} alt="" />
const firstTextServices="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sapien ac nunc facilisis scelerisque in in ex. Donec dapibus, nunc egestas";
const secondTextServices="";
const OurServices = () =>{

return(
<div>
<Header/>
<Phone/>
<Hero/>
<main className="mainServices">
     <article className="servicesSections">
        <div className="firstTitleBox"><h1 className="firstTitleBoxText">Services</h1></div>
            <div>
                <title><h2 className="firstTextServices">{firstTextServices}</h2></title>
            </div>
            <div>
            </div>        
    </article>
    <article className="servicesSecondSection">
        <div className="servicesSecondTitleBox"><h1 className="servicesSecondTitleBoxText">Services</h1></div>
            <div>
                <title><h2 className="firstTextServices">{secondTextServices}</h2></title>
            </div>
            <div>
            </div>        
    </article>


           
</main>
        <HireExpo/>
        <Footer/>
       <SubFooter/>        
       </div>
    )
}
export default OurServices
