import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "./HomePage.css";
const DomainsOfOperation = () => {
    return (
        <div>
            <Container>
                <Box>
                    <Typography className="sectionHeading" component="h2">
                       Domains of operation   
                    </Typography>
                    <div>
                        <div className='imageList' >
                            <div>
                                <img src="https://i.ibb.co/CwLNdfQ/listimg-4.png" alt="" />
                            </div>
                            <div>
                                 <img src="https://i.ibb.co/1Rx2WXY/listimg-3.png" alt="" />
                            </div>
                            <div>
                                 <img src="https://i.ibb.co/PTrXMjx/listimg-1.png" alt="" />
                            </div>
                            <div>
                                 <img src="https://i.ibb.co/y6nLrvS/listimg-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
    );
};

export default DomainsOfOperation;