import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "./LeftTextRightImage.css";

const LeftTextRightImage = ({leftTextSection,col,width}) => {
    // console.log(col);
    const { heading, title, img, des, btnText, btnUrl } = leftTextSection[0];
    return (
        <Box className='leftTextBox'>
            <Container>
                <Box>
                    {
                        leftTextSection[0]?.heading &&
                        <Typography className="sectionHeading" component="h2">
                            {heading} 
                        </Typography>
                    }
                    <Box>
                        <Grid className='grows' container spacing={2} alignItems="flex-end">
                            <Grid className='mobiles' item xs={12} md={col?.right} >
                                { leftTextSection[0]?.img &&
                                    <Box className="leftimgs ">
                                        <img style={{width:width}} src={img} alt={title} />
                                    </Box>
                                }
                            </Grid>
                            <Grid item xs={12} md={col?.left} >
                                <Box className="contentBox">
                                    { leftTextSection[0]?.title &&
                                    <Typography className="head" component="h3" >
                                        {title}
                                    </Typography>
                                    }
                                    { leftTextSection[0]?.des &&
                                    <Typography className='contentText' component="p" >
                                       {des}
                                    </Typography>
                                    }
                                    { leftTextSection[0]?.btnText &&
                                        <Button href={btnUrl} >{btnText}</Button>
                                    }
                                </Box>
                            </Grid>
                             <Grid className='desktops' item xs={12} md={col?.right} >
                                { leftTextSection[0]?.img &&
                                    <Box className="leftimg">
                                        <img style={{width:width}} src={img} alt={title} />
                                    </Box>
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
           </Container>
        </Box>
    );
};

export default LeftTextRightImage;