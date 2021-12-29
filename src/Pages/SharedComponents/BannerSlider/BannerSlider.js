import { Button, Container, IconButton, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Slider from "react-slick";
import "./BannerSlider.css";

const BannerSlider = (props) => {
  const classes = useStyle();

  // console.log(props);

  const settings = {
    dots: true,
    autoplay:true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box className={classes.root}>
      <Box className="BannerSlider" >
        <Box className="home_vertical">
          <Typography>{props.page}</Typography>
        </Box>

        <Container disableGutters style={{padding:"0 5px"}} >
          <Slider {...settings}>
            {/* slide item */}
            {
              props.banner.map(items => {
                return (
                  <Box key={items?.bgImgUrl} className="bannerItem"
                    sx={{
                    backgroundImage: `url(${items?.bgImgUrl})`,
                  }}
                >
                    <Box  className={classes.bannerCont} >
                      <Typography component="h3" variant="inherit" className="bannerHeading" >
                        {items?.headingText}
                      </Typography>
                      {
                        items?.buttonName && 
                        <Button component="a" href={items?.buttonURl} className="bannerButton"
                        variant="inherit">{items?.buttonName}</Button>
                      }
                      
                    </Box>
                  </Box>
                )
              })
            }
            {/* Slide Item end */}
          </Slider>
        </Container>


        <Box className="social_vertical">
          <Link target="_blank" href="/">
            <IconButton className={classes.iconColor} size="small">
              <FaEnvelope />
            </IconButton>
          </Link>
          <Link target="_blank" href="/">
            <IconButton className={classes.iconColor} size="small">
              <IoMdCall />
            </IconButton>
          </Link>
          <Link target="_blank" href="/">
            <IconButton className={classes.iconColor} size="small">
              <FaFacebook />
            </IconButton>
          </Link>
          <Link target="_blank" href="/">
            <IconButton className={classes.iconColor} size="small">
              <FaInstagram />
            </IconButton>
          </Link>
          <Link target="_blank" href="/">
            <IconButton className={classes.iconColor} size="small">
              <FaTwitter />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const useStyle = makeStyles({
  root: {
    maxWidth: "1322px",
    margin:"auto"
  },
  iconColor: {
    color:"rgba(0, 105, 152, 1)!important"

  },
  bannerCont: {
    maxWidth: "70%",
    margin: "auto",
    textAlign:"center"
  }

});



export default BannerSlider;
