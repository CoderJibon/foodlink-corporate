import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "./Contact.css";
const ContactFrom = () => {
    return (
        <div className='contactFormPage'>
            <Container>
                <div>
                    <Typography className="sectionHeading" component="h2">
                        Let’s make it happen !
                    </Typography>
                    <div className='fromBox'>
                        <Typography className="FromHeading" component="h2">
                            Basic Information
                        </Typography>
                        <form className='formFill' >
                            <label> Full Name *
                                <input type="text" />
                            </label>
                            <Grid container >
                                <Grid Item>
                                    <label> E-mail *
                                        <input type="text" />
                                    </label>
                                </Grid>
                                <Grid Item>
                                    <label> Phone No. *
                                        <input type="text" />
                                    </label>
                                </Grid>
                            </Grid>
                            <label> Message
                               <textarea name="" id="" cols="30" rows="10"></textarea>
                            </label>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactFrom;