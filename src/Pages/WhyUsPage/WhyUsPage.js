import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BannerSlider from '../SharedComponents/BannerSlider/BannerSlider';
import LeftTextRightImage from '../SharedComponents/LeftTextRightImage/LeftTextRightImage';
import RightTextLeftImg from '../SharedComponents/RightTextLeftImg/RightTextLeftImg';
const WhyUsPage = () => {
     // banner slider
  const [sliderBanner, setSliderBanner] = useState([]);

  useEffect(() => {
    fetch("./Api/whyUsbanner.json")
      .then(res => res.json())
      .then(data => {
        setSliderBanner(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const sectionTwoCol = {
    left: 3,
    right: 9
  }
   const SectionTwo = [
    {
      heading: "",
      title: "Hospitality",
      img: "https://i.ibb.co/ZSwCzS1/whyus.png",
      des: "Our unmatched dedication to client stewardship raises the bar on hospitality, inspired by a warm, welcoming and accommodative approach.",
      btnText: "",
      btnUrl:""
    }
  ];
   const SectionOneCol = {
    left: 8,
    right: 4
  }
    const SectionOne = [
    {
      heading: "Foodlink Difference",
      title: "Specialized workforce ",
      img: "https://i.ibb.co/dJ6N7MS/foodlink.png",
      des: "We employ highly skilled people across a range of roles as our brand value attracts the best talent that is passionate, committed and operates in unison with the client’s goals.",
      btnText: "",
      btnUrl:""
    }
  ];
    return (
      <Box>
        <BannerSlider page={`Why Us`} banner={sliderBanner}></BannerSlider>
        <RightTextLeftImg col={SectionOneCol} RightTextSection={SectionOne} />
        <LeftTextRightImage col={sectionTwoCol} leftTextSection={SectionTwo} />
      </Box>
    );
};

export default WhyUsPage;