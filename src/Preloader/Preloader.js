import { Box, Typography } from '@mui/material';
import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import "./Preloader.css";

const Preloader = ({loading}) => {
    return (
        <Box>
            <Box className="art-preloader">
                <Box className="art-preloader-content">
                    <Typography
                        variant="h4"
                        component="h4"
                        style={{
                            color: "#215d88",
                            textTransform: "uppercase",
                            fontWeight: "800",
                            transform: "rotate(-45deg)",
                            marginLeft: "34px",
                            marginBottom:"-37px"
                        }}
                    >
                       Foodlink
                    </Typography>
                    <ClimbingBoxLoader
                        color={"#313130"}
                        loading={loading}
                        size={30}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Preloader;