import { Box, Button, Container, Grid, IconButton, Link, List, ListItem, ListItemText, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    const classes = useStyle();
    return (
        <Box className="footerArea">
            <Container>
                <Box className="footerDesk">
                    <Box className="footerlogo">
                        <img src={process.env.PUBLIC_URL+`/assets/logo.png`} alt="foodlink" />
                    </Box>
                    <Grid container>
                        <Grid item xs={4} sm={6} >
                            <List>
                                <ListItem disablePadding className="listitem"
                                    component={NavLink} to="/" >
                                    <ListItemText className="listText" primary="home" />
                                </ListItem>
                                <ListItem disablePadding className="listitem"
                                    component={NavLink} to="/whoWeAre"
                                >
                                    <ListItemText className="listText" primary="Who We Are" />
                                </ListItem>
                                <ListItem disablePadding className="listitem"
                                    component={NavLink} to="/whatWeDo"
                                >
                                    <ListItemText className="listText" primary=" What We Do" />
                                </ListItem>
                                <ListItem disablePadding className="listitem"
                                    component={NavLink} to="/WhyUs"
                                >
                                    <ListItemText className="listText" primary="Why Us" />
                                </ListItem>
                                <ListItem disablePadding className="listitem"
                                    component={NavLink} to="/contact">
                                    <ListItemText className="listText" primary="Contact" />
                                </ListItem>
                            </List> 
                            <Box className="footerBtn desktopfooter">
                                <Button component="a" href="" variant="outlined">Compliances</Button>
                                <Button component="a" href="" variant="outlined">Logos</Button>
                           </Box>
                        </Grid>
                        <Grid item xs={8} sm={6} >
                            <Box className="subcribe">
                                {/* social icons */}
                                <Box className="socialItems">
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
                                <h4>
                                    Sign up for updates
                                </h4>
                                <Box className="subcri">
                                    <form action="">
                                        <TextField required className="field"
                                            style={{ height: "39px" }} label="E-mail" variant="outlined" />
                                        <Button type="submit" variant="contained">SUBMIT</Button>
                                   </form>
                                </Box>
                                <Box className="download">
                                    <h4>
                                       Download
                                    </h4>
                                    <p>
                                        <Link download href="">
                                            Foodlink Promise of Safety 
                                        </Link>
                                    </p>
                                    <p>
                                         <Link download href="">
                                            Foodlink Corporate Brochure
                                        </Link>
                                    </p>
                                   
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                     <Box className="footerBtn mobilefooter">
                        <Button component="a" href="" variant="outlined">
                            Compliances Logos
                        </Button>
                        <Button component="a" href="" variant="outlined">
                            Compliances Logos
                        </Button>
                        <Button component="a" href="" variant="outlined">
                            Compliances Logos
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
const useStyle = makeStyles({
  
  iconColor: {
        color: "rgba(0, 105, 152, 1)!important",
        marginRight: "10px",
        marginBottom: "20px",
        marginTop:"10px"

  }

});

export default Footer;