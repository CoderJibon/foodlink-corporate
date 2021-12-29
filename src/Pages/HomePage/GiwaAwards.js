import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Slider from 'react-slick';

const GiwaAwards = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Box className="contentSlider">
            <Container>
                <Slider  {...settings}>
                    <div className="slideContentItem">
                        <div className='items one'>
                            <Typography className="headTitle" component="h3" >
                                GIWA AWARDS
                            </Typography>
                        </div>
                        <div className='items'>
                            <Typography component="p" >
                                2014 | Gold <br /> Best Food & Art Display
                            </Typography>
                            <Typography component="p" >
                                2015 | Bronze <br /> Best Food & Art Display
                            </Typography>
                        </div>
                        <div className='items'>
                             <Typography component="p" >
                                2018 | Gold <br /> Best Food & Art Display
                            </Typography>
                            <Typography component="p" >
                                2018 | Silver <br /> Best Food & Art Display
                            </Typography>
                        </div>
                        <div className='items'>
                             <Typography component="p" >
                                22019 | Gold <br /> Best Food & Art Display
                            </Typography>
                        </div>
                    </div>


                    <div className="slideContentItem">
                        <div className='items one'>
                            <Typography className="headTitle" component="h3" >
                                GIWA AWARDS
                            </Typography>
                        </div>
                        <div className='items'>
                            <Typography component="p" >
                                2014 | Gold <br /> Best Food & Art Display
                            </Typography>
                            <Typography component="p" >
                                2015 | Bronze <br /> Best Food & Art Display
                            </Typography>
                        </div>
                        <div className='items'>
                             <Typography component="p" >
                                2018 | Gold <br /> Best Food & Art Display
                            </Typography>
                            <Typography component="p" >
                                2018 | Silver <br /> Best Food & Art Display
                            </Typography>
                        </div>
                        <div className='items'>
                             <Typography component="p" >
                                22019 | Gold <br /> Best Food & Art Display
                            </Typography>
                        </div>
                    </div>
                </Slider>
            </Container>
        </Box>
    );
};

export default GiwaAwards;