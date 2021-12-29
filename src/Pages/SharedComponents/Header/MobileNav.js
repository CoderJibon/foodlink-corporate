import MenuIcon from '@mui/icons-material/Menu';
import { Container, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system";
import React from 'react';
import { Link } from 'react-router-dom';
import SiteDrawer from './SiteDrawer';

const MobileNav = () => {
    const classes = useStyle();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = (event) => {
        setMobileOpen(!mobileOpen);
    }
    
    return (
        <>
            <AppBar position="static" className={classes.root}> 
                <Toolbar>
                    <Container disableGutters>
                        <Box className={classes.mbArea}>
                            <Box>
                                <Link to="/" >
                                    <img className={classes.mbNav} src={process.env.PUBLIC_URL+`/assets/logo.png`} alt="foodlink" />
                                </Link>
                            </Box>
                            <IconButton
                                    size="large"
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    className={classes.menuIcon}
                                    onClick={handleDrawerToggle}
                                >
                                <MenuIcon />
                            </IconButton>
                            <SiteDrawer
                                mobileOpen={mobileOpen}
                                setMobileOpen={setMobileOpen}
                            />
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
           
        </>
    );
};

const useStyle = makeStyles({
  root: {
    backgroundColor: "#fff!important",
  },
    mbNav: {
        width: "auto",
        maxHeight:"40px"
    },
    mbArea: {
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center"
    },
    menuIcon: {
        color: "rgba(0, 105, 152, 1)!important",
        marginRight:"0"
    }

});

export default MobileNav;