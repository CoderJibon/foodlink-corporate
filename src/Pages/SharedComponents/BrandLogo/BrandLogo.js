import { Container, Typography } from '@mui/material';
import React from 'react';
import "./BrandLogo.css";
const BrandLogo = () => {
    return (
        <div className='brandLogo'>
            <Container>
                <Typography className="sectionHeading" component="h2">
                      You are in good company
                </Typography>
                 <marquee behavior="alternate" loop="infinite" scrollamount="3" >
                    <div className='companyLogo'>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/ftD9R1c/10-1.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/xsNc8MW/1-1.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/SNfmJFn/2-20.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/XXbSrM1/7-1.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/k9JnpCj/8-1.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/s2pyfkZ/9-1.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/ftD9R1c/10-1.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/xsNc8MW/1-1.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/SNfmJFn/2-20.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/XXbSrM1/7-1.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/k9JnpCj/8-1.png" alt="" />
                        </div>
                        <div className='brandLogoBox'>
                            <img src="https://i.ibb.co/s2pyfkZ/9-1.png" alt="" />
                        </div>
                    </div>
                </marquee>
            </Container>
        </div>
    );
};

export default BrandLogo;