import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BannerSlider from '../SharedComponents/BannerSlider/BannerSlider';
import ContactFrom from './ContactFrom';
import ContactSectionOne from './ContactSectionOne';

const ContactPage = () => {
   
    // banner slider
    const [sliderBanner, setSliderBanner] = useState([]);
    

    useEffect(() => {
       
        fetch("./Api/contactBanner.json")
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
            <BannerSlider page={`Contact`} banner={sliderBanner} />
            <ContactSectionOne />
            <br />
            <ContactFrom/>
        </Box>
    );
};

export default ContactPage;