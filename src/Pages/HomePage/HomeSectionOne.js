import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from 'react';
import "./HomePage.css";
const HomeSectionOne = () => {
    return (
        <Box>
            <Container>
                <Box>
                    <Typography className="sectionHeading" component="h2">
                        Transform your premise into a Foodies' Paradise 
                    </Typography>
                    <Box>
                        <Grid container spacing={4} alignItems="flex-end">
                            <Grid item xs={12} md={5} >
                                <Box className="leftimg">
                                    <img style={{width:"auto"}} src="https://i.ibb.co/nB7KzXh/Group-9.png" alt="" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={7} >
                                <Box className="contentBox">
                                    <Typography className="head" component="h3" >Foodlink <br />Corporate</Typography>
                                    <Typography component="p" >
                                        We offers world-class quality food services to Improve the <strong>'Quality of Life'</strong> of our business clients through a sharp focus on well-being, process efficiency, and reliability.
                                    </Typography>
                                    <Button>READ MORE</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
           </Container>
        </Box>
    );
};

export default HomeSectionOne;