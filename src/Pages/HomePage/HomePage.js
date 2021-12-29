import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import BannerSlider from "../SharedComponents/BannerSlider/BannerSlider";
import BrandLogo from "../SharedComponents/BrandLogo/BrandLogo";
import DomainsOfOperation from "./DomainsOfOperation";
import GiwaAwards from "./GiwaAwards";
import "./HomePage.css";
import HomeSectionOne from "./HomeSectionOne";
const HomePage = () => {
  // home slider
  const [sliderBanner, setSliderBanner] = useState([]);

  useEffect(() => {
    fetch("./Api/homebanner.json")
      .then(res => res.json())
      .then(data => {
        setSliderBanner(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <Box>
      <BannerSlider page={`Home`} banner={sliderBanner} />
      <HomeSectionOne />
      <GiwaAwards />
      <DomainsOfOperation />
      <BrandLogo />
    </Box>
  );
};

export default HomePage;
