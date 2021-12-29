import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BannerSlider from '../SharedComponents/BannerSlider/BannerSlider';
import BrandLogo from '../SharedComponents/BrandLogo/BrandLogo';
import LeftTextRightImage from '../SharedComponents/LeftTextRightImage/LeftTextRightImage';
import RightTextLeftImg from '../SharedComponents/RightTextLeftImg/RightTextLeftImg';
const WhatWeDoPage = () => {
  // banner slider
  const [sliderBanner, setSliderBanner] = useState([]);

  useEffect(() => {
    fetch("./Api/whatWeDobanner.json")
      .then(res => res.json())
      .then(data => {
        setSliderBanner(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
   const SectionOneCol = {
    left: 8,
    right: 4
  }
   const sectionTwoCol = {
    left: 4,
    right: 8
  }
  
  const SectionOne = [
    {
      heading: "Domains of operation  ",
      title: "Corporate ",
      img: "https://i.ibb.co/VM1n6g8/doone.png",
      des: "The business and corporate sector ranges from offices to business parks. We offer a broad range of catering offers to meet their needs. Offerings include food services in restaurant-style dining, cafés, canteen-style options and dining rooms. Having healthy food options available on-site and throughout the day is one way in which employers can encourage their employees to eat healthily.",
      btnText: "",
      btnUrl:""
    }
  ];
   const SectionTwo = [
    {
      heading: "",
      title: "Manufacturing",
      img: "https://i.ibb.co/n6FjGGT/doTwo.png",
      des: "Manufacturing sector ranges from industrial sites to offshore locations. Studies have shown a clear link between a healthy diet and improved concentration, alertness, problem-solving skills and productivity. Therefore, what employees eat at work impacts on their performance throughout the day. We carefully design our menu to cater to the well being of our consumers. ",
      btnText: "",
      btnUrl: ""
    }
  ];
  const SectionThree = [
    {
      heading: "",
      title: "Healthcare ",
      img: "https://i.ibb.co/Kxz7fpr/there.png",
      des: "Nutrition is vitally important in aiding recovery from illness or treatment in hospital. Every patient is different and we can adapt patient meals to individual requirements. Some patients may need a high calorie diet to aid recovery; others may have to avoid certain ingredients. Some may need foods that are easy to chew or digest, or may need low sugar or low fat options. We strive to offer a range of options and change menus on a regular  to eat. ",
      btnText: "",
      btnUrl:""
    }
  ];
   const SectionFor = [
    {
      heading: "",
      title: "Education",
      img: "https://i.ibb.co/bPQjhTd/for.png",
      des: "Food and drink has been shown to have an impact on students’ concentration levels and behavior and, therefore, their ability to learn. Mealtimes also develop social skills. We offer balanced, nutritious meals to pupils of all ages based around standards developed by government and industry. We also offer healthy drinks to keep hydration levels up. ",
      btnText: "",
      btnUrl: ""
    }
  ];
  
    return (
        <Box>
          <BannerSlider page={`What We Do`} banner={sliderBanner} />
          <RightTextLeftImg col={SectionOneCol} RightTextSection={SectionOne} />
          <LeftTextRightImage col={sectionTwoCol} leftTextSection={SectionTwo} />
          <RightTextLeftImg col={SectionOneCol} RightTextSection={SectionThree} />
          <LeftTextRightImage col={sectionTwoCol} leftTextSection={SectionFor} />
          <BrandLogo/>
        </Box>
    );
};

export default WhatWeDoPage;