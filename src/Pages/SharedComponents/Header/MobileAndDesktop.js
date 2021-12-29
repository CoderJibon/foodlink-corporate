import { Box } from '@mui/material';
import React from 'react';
import Header from "./Header";
import "./Header.css";
import MobileNav from "./MobileNav";
const MobileAndDesktop = () => {
    return (
        <div>
            <Box className="desktop">
                <Header />
            </Box>
            <Box className="mobile">
                <MobileNav />
            </Box>
        </div>
    );
};

export default MobileAndDesktop;