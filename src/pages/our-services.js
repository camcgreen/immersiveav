import * as React from "react";
import Header from "../components/header";
import Phone from "../components/phone";
import Footer from"../components/footer";
import Hero from "../components/hero";
import SubFooter from "../components/subFooter";
import "../styles/our-services.scss"
import { StaticImage } from "gatsby-plugin-image";
import News from "../components/news";


  
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
const firstSectionTexts="Lorem ipsum dolor sit amet consectetur adipiscing elit";
const secondTextServices="";
const thirdTextServices="";
const fourthTextServices="";
const OurServices = () =>{

return(
<div  >
<div className="wrapper4">
<Header/>
<Phone/>
<Hero/>
<main className="body">

    <article className="firstServicesSection">
            <div className="firstTitleBox"><h1 className="firstTitleBoxText">Services</h1></div>
            <div className="firstSection1">
                <div className="flexBox1">
                    <div className="firstTextServices"><p className="textFS" >{firstSectionTexts}</p></div>
                    
                    <div className="firstSection1images">
                        <div className="flexBox1_1">
                        <StaticImage className="img1_1" src="..\images\u9.JPG" alt=""></StaticImage>
                        <StaticImage className="emptySpace1_0" src="..\images\u9.JPG" alt=""></StaticImage>
                        <StaticImage className="img1_2" src="..\images\u10.JPG" alt=""></StaticImage>
                        <StaticImage className="emptySpace1_1" src="..\images\u9.JPG" alt=""></StaticImage>
                        
                        </div>
                        <div className="flexBox1_2">
                        <StaticImage className="img1_3" src="..\images\u8.jpg" alt=""></StaticImage>
                        <StaticImage className="img1_4" src="..\images\c11.jpg" alt=""></StaticImage>
                        <StaticImage className="emptySpace2_0" src="..\images\u9.JPG" alt=""></StaticImage>                        
                        <StaticImage className="img1_5" src="..\images\u4.jpg" alt=""></StaticImage>
                        <StaticImage className="emptySpace2_1" src="..\images\u9.JPG" alt=""></StaticImage>
                        </div>   
                    </div>
                    </div>
                    <div className="flexBox2_0">
                        <div className="flexBox2_1">
                            <div className="flexBox2_1Title">Live</div>
                            <div className="flexBox2_1P">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                        <div className="flexBox2_2">
                        <StaticImage className="img2_2_0" src="..\images\u12.JPEG" alt=""></StaticImage>
                        <StaticImage className="img2_2_1" src="..\images\u3.JPEG" alt=""></StaticImage>
                        </div>

                    </div>
                    
            </div>
            
            
    </article>
    <div className="breakServices"><h1>BREAK</h1>
    </div>
    <article className="servicesSecondSection">
        <div className="servicesSecondTitleBox"><h1 className="servicesSecondTitleBoxText">Services2</h1></div>
            <div>
                <title><h2 className="secondTextServices">{secondTextServices}</h2></title>
            </div>
            <div>
            </div>        
    </article>
    <div className="breakServices"><h1>BREAK</h1>
    </div>
    <article className="servicesThirdSection">
    <div className="servicesThirdTitleBox"><h1 className="servicesSecondTitleBoxText">Services3</h1></div>
        <div>
            <title><h2 className="thirdtextServices">{thirdTextServices}</h2></title>
        </div>        
    </article>
    <div className="breakServices"><h1>BREAK</h1>
    </div>
    <article className="servicesFourthSection">
    <div className="servicesFourthTitleBox"><h1 className="servicesSecondTitleBoxText">Services4</h1></div>
        <div>
            <title><h2 className="fourthtextServices">{fourthTextServices}</h2></title>
        </div>        
    </article>


           
    </main>
        <div className="footerSection">
        <News />
        
        <Footer/>
       <SubFooter/>
       </div>
       
             
       </div>
       </div>
       
       
    )
}
export default OurServices
