import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "./Contact.css";
const ContactSectionOne = () => {

    return (
        <Box className='leftTextBox'>
            <Container>
                <Box>
                    <Typography className="sectionHeading" component="h2">
                        Getting Started
                    </Typography>
                    <Box>
                        <Grid container spacing={4} alignItems="flex-end">
                            <Grid item xs={12} md={6} >
                                <Box className="contentBox">
                                    <Typography style={{ maxWidth: "400px" }} className="head" component="h3" >
                                        1
                                    </Typography>
                                    <Typography className='contentText' component="p" >
                                        Get in touch when you're ready to provide the most delicious and nutritious food with the Foodlink promise. It takes a large amount of work and expertise into creating nutritious, delicious meals that meet the requirements of both consumers and the contracting body. This includes offering meals that meet a variety of nutritional and religious requirements, offering healthy options and meal deals keeping up with the latest food trends.
                                    </Typography>
                                    <Typography style={{ maxWidth: "400px" }} className="head" component="h3" >
                                        2
                                    </Typography>
                                    <Typography className='contentText' component="p" >
                                       We’ll meet with you to review your service needs and develop a plan for you. Understanding our clients’ needs and objectives is vital for us to deliver successfully as it shapes the food service offer. Is it a retail outlet, canteen-style facility, set menu provision or food delivered directly to consumers? Whether you want us to design the café/ canteen for you ? 
                                    </Typography>
                                    <Typography style={{ maxWidth: "400px" }} className="head" component="h3" >
                                       3
                                    </Typography>
                                    <Typography className='contentText' component="p" >
                                        Once we understand the brief, we’ll offer a food solution engineered to your needs. Once there is agreement on the food offering/ solution, we give you our best offer.
                                    </Typography>
                                </Box>
                            </Grid>
                             <Grid item xs={12} md={6} >
                                <Box className="leftimg">
                                    <img style={{width:"auto"}} src="https://i.ibb.co/nB7KzXh/Group-9.png" alt="" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
           </Container>
        </Box>
    );
};

export default ContactSectionOne;
