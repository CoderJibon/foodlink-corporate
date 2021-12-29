import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "./RightTextLeftImg.css";
const RightTextLeftImg = ({RightTextSection,col}) => {
    // console.log(RightTextSection[0]);
    const { heading, title, img, des, btnText, btnUrl } = RightTextSection[0];
    return (
        <Box className='leftTextBox'>
            <Container>
                <Box>
                    {
                        RightTextSection[0]?.heading &&
                        <Typography className="sectionHeading" component="h2">
                            {heading} 
                        </Typography>
                    }
                    
                    <Box>
                        <Grid container spacing={4} alignItems="flex-end">
                            <Grid item xs={12} md={col?.left} >
                                { RightTextSection[0]?.img &&
                                    <Box className="leftimg">
                                        <img style={{width:"100%"}} src={img} alt={title} />
                                    </Box>
                                }
                            </Grid>
                            <Grid item xs={12} md={col?.right} >
                                <Box className="contentBox">
                                    { RightTextSection[0]?.title &&
                                    <Typography style={{maxWidth: "400px"}} className="head" component="h3" >
                                        {title}
                                    </Typography>
                                    }
                                    { RightTextSection[0]?.des &&
                                    <Typography className='contentText' component="p" >
                                       {des}
                                    </Typography>
                                    }
                                    { RightTextSection[0]?.btnText &&
                                        <Button href={btnUrl} >{btnText}</Button>
                                    }
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
           </Container>
        </Box>
    );
};

export default RightTextLeftImg;