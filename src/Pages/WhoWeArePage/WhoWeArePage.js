import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BannerSlider from '../SharedComponents/BannerSlider/BannerSlider';
import ImgSlider from '../SharedComponents/ImgSlider/ImgSlider';
import LeftTextRightImage from '../SharedComponents/LeftTextRightImage/LeftTextRightImage';
import RightTextLeftImg from '../SharedComponents/RightTextLeftImg/RightTextLeftImg';

const WhoWeArePage = () => {
     // banner slider
  const [sliderBanner, setSliderBanner] = useState([]);

  useEffect(() => {
    fetch("./Api/whoWeArebanner.json")
      .then(res => res.json())
      .then(data => {
        setSliderBanner(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  // section one

  const SectionOne = [
    {
      heading: "Transform your premise into a Foodies' Paradise",
      title: "Foodlink\n Corporate",
      img: "https://i.ibb.co/nB7KzXh/Group-9.png",
      des: "We offers world-class quality food services to Improve the 'Quality of Life' of our business clients through a sharp focus on well-being, process efficiency, and reliability. Foodlink F&B Holding India Pvt. Ltd. has forayed into this segment by strategically using its central kitchens, warehouses, and resource pool of culinary experts based across the country. This move is bolstered by the group’s desire to be India’s most comprehensive food services company catering to businesses, industries, education, and healthcare segments in private & public sectors, through creating value for clients' daily life, through a most definitive culinary experience that is efficient, flexible and cost-effective thus enriching the at-work meal experience.",
      btnText: "",
      btnUrl:""
    }
  ];
  const SectionTwo = [
    {
      heading: "",
      title: "About Foodlink F&B Holdings India Pvt. Ltd.",
      img: "https://i.ibb.co/WFSDLxt/section-Two-Why-We-Are.png",
      des: "Foodlink is India’s leading catering company renowned for its best in class cuisine offerings and impeccable service creating intense culinary experiences. Founded in 2003, it is known for executing various awe-inspiring events with peculiar and demanding hospitality and culinary needs across India and internationally, having catered to the top industrialists, celebrities, and politicians of the world at significant events across the globe. It has also conceived and operates specialty restaurants like India Bistro, China Bistro, Glocal Junction, and cloud kitchens like Art of Dum in addition to its banqueting vertical called Jade Banquets.  ",
      btnText: "",
      btnUrl:""
    }
  ];

  const sectionOneCol = {
    left: 6,
    right: 6
  }
   const sectionTwoCol = {
    left: 6,
    right: 6
  }
  const width = "auto";
    return (
      <Box>
        <BannerSlider page={`Who We Are`} banner={sliderBanner} />
        <LeftTextRightImage width={width} col={sectionOneCol} leftTextSection={SectionOne} />
        <RightTextLeftImg col={sectionTwoCol} RightTextSection={SectionTwo} />
        <ImgSlider/>
      </Box>
    );
};

export default WhoWeArePage;