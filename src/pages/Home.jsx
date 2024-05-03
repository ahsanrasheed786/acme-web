import React, { useContext, useEffect } from "react";
import bgImage from "../../public/images/bgImage.png";
import videoImg from "../../public/images/video.png";
import arrow from "../../public/images/arrow-right-line.png";
import line from "../../public/images/Deco-line.png";
import CardSlider from "../Components/CardSlider/CardSlider";
import ReviewSlider from "../Components/ReviewSlider/ReviewSlider";
// import CaseStudy from "../Components/CaseStudy/CaseStudy"
import CaseStudy from "../Components/CaseStudy/CaseStudy";
import TextAndImageCall from "../Components/TextAndImage/TextAndImageCall";
import DisplayCardCall from "../Components/DisplayCard/DisplayCardCall";
import Ourstack from "../Components/ourStack/OurStack";
// import OurResourse from "../Components/ourResourse/OurResourse";
import { Link } from "react-router-dom";
import Process from './Process'
import ProcessCircle from "../Components/process circle design/ProcessCircle";
import logo from "../../public/images/logo/1.png";
import { Btncontext } from "../Components/Contexts/MenuButton";
const homeData = {
  mainText: `We help build and manage a team of world-class developers to bring your vision to life.`,
};
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="main  ">
        {/* hero section stared */}
        <div className="">
          <div className="heroSection  h-[90vh]  flex leading-7 md:leading-10  ">
            <div className="w-full flex pt-[10vh] justify-center   py-8  px-4 items-center">
              {/* <div className="max-w-screen-xl mx-auto grid md:grid-cols-2"> */}
              {/* <div className="max-w-[100vw]  mx-auto grid lg:grid-cols-2 justify-between "> */}
              <div className="max-w-[100vw]  mx-auto grid lg:grid-cols-2  justify-between ">
              {/* max-h-[50vh] */}
               <div className="flex flex-col justify-center ">
                  {/* <p className="text-caribbean-green "></p> */}
                  <h1 className=" py-2 ">
                    Great <span className=" text-[#b53d7d] "> Product</span> is <br />
                    <span className="bold font-bold">
                      built by great<span className=" text-[#b53d7d]"> teams </span> <br />
                    </span>
                  </h1>
                  <p className="text-gray-800 text-xl  md:text-2xl font-[400] md:mt-10 ">{homeData.mainText}</p>
                  <button className="bg-[#3D63EA] text-xl mt-8 md:mt-20 text-white w-[200px] rounded-md font-medium my-10 mx-auto lg:mx-0 py-3">
                    Let’s get started!
                  </button>
                </div>
                
                <img
                  className=" max-h-[50vh]  w-fit mx-auto "
                  // src="https://i.ibb.co/Rg8mTFW/main.png"
                  src={logo}
                  alt="/"
                />
              </div>
            </div>
            {/* <img className="absolute md:top-[105vh] lg:top-[105vh] top-[97vh] left-20" src={bgImage} alt="" /> */}
            {/* hero section ended */}
          </div>
        </div>
        {/* hero section ended */}
        {/* Services We Offer and slider*/}
        <div className="ServicesWeOffer relative  my-10  ">
          {/* will redirect to the services page */}
          
            <h2 className="   py-10 text-center">Services we offer</h2>
            <div className="slider">
            <Link to="/services">
              <CardSlider />
              </Link>

            </div>
          {/* <img className="absolute bottom-[10px] left-20 md:left-40 lg:left-[70%]" src={bgImage} alt="" /> */}
        </div>
{/* this div created for the space and give the backgrond color */}
        <div className="forSpace py-24 "></div>
         {/* <Process/> */}
         <ProcessCircle/>
        {/* Banner section */}
       
        <div className="banner relative flex flex-wrap justify-center my-20  py-10">
          <img src="https://i.ibb.co/XzQ7HFm/Logo-9.png" alt="-9" />
          <img src="https://i.ibb.co/BgRh1fY/logo8.png" alt="8" />
          <img src="https://i.ibb.co/mJX257t/logo5.png" alt="5" />
          <img src="https://i.ibb.co/cFvPJXx/Logo-7.png" alt="7" />

          <img src="https://i.ibb.co/Lnpb7pv/logo9.png" alt="9" />
          <img src="https://i.ibb.co/YL1ZB2g/Logo-6.png" alt="6" />
          <img src="https://i.ibb.co/1G2rHvV/logo3.png" alt="3" />
        </div>
        {/* review section started  and slider */}
        <ReviewSlider />

        {/* case study section */}
        <div className="caseStudy py-20 px-4  leading-10  ">
          <div className="text py-20">
            <h2 className=" text-center ">
              Our recent <br /> <span>Case studies</span>{" "}
            </h2>
          </div>
          <CaseStudy />
        </div>
        {/* way of building start*/}
        <div className="wayofbuilding py-20 px-4 ">
          <div className=" text-center">
            <h2 >
              Way of building <br /> <span className="font-bold">Great Software</span>{" "}
            </h2>
          </div>
          {/* to redirect at blog page */}
          <Link to="/blog">
            <TextAndImageCall />
          </Link>
        </div>
        {/* Development Aproch section */}
        <div className="development">
          <div className="">
            <p className=" flex justify-center items-center flex-col text-center">
              <img src={line} alt="" />
              <h2 className="py-4">
                Our design and <br />
                <span className="font-bold py-3">development approach</span>
              </h2>
            </p>
          </div>
          {/* <DisplayCard /> */}
          <DisplayCardCall />
        </div>
        {/* from here our tech stack */}
        <div className="our-stack py-10">
          <div>
            <Ourstack />
          </div>
        </div>
        {/* resourse cards sections */}
        {/* <OurResourse /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
