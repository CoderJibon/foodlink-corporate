import { SwipeableDrawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
const SiteDrawer = ({mobileOpen,setMobileOpen}) => {
    const classes = useStyle();

    const closeDoor = (e) => {
        setMobileOpen(false);
    };

    return (
        <>
            <SwipeableDrawer
                anchor="left"
                open={mobileOpen}
                onOpen={()=>setMobileOpen(true)}
                onClose={()=>setMobileOpen(false)}
            >
            <Box className={classes.logoW}>
                <Link to="/" >
                    <img className={classes.mbNav} src={process.env.PUBLIC_URL+`/assets/logo.png`} alt="foodlink" />
                </Link>
            </Box>
                <List className={classes.drawer}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={closeDoor} className={classes.linkList}
                            component={Link} to="/" >
                            <ListItemText className={classes.btn} primary="home" />
                        </ListItemButton>
                    </ListItem>
                     <ListItem disablePadding >
                        <ListItemButton onClick={closeDoor} className={classes.linkList}
                            component={Link} to="/whoWeAre"
                        >
                            <ListItemText className={classes.btn} primary="Who We Are" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={closeDoor} className={classes.linkList}
                            component={Link} to="/whatWeDo"
                        >
                            <ListItemText className={classes.btn} primary=" What We Do" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={closeDoor} className={classes.linkList}
                            component={Link} to="/WhyUs"
                        >
                            <ListItemText className={classes.btn} primary="Why Us" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className={classes.linkList} onClick={closeDoor}
                            component={Link} to="/contact">
                            <ListItemText className={classes.btn} primary="Contact" />
                        </ListItemButton>
                    </ListItem>
                </List>                   
            </SwipeableDrawer>
        </>
    );
};

const useStyle = makeStyles({
    drawer: {
        width: "250px",
        padding:"0"
    },
    linkList: {
        textDecoration: "none",
        padding:"5px 20px"
    },
     mbNav: {
        width: "auto",
        maxHeight:"40px"
    },
    logoW: {
        display: "flex",
        justifyContent: "center",
        paddingTop:"10px"
    },
    btn: {
        fontSize: "18px!important",
        background:"-webkit-linear-gradient(90deg, #006998 6.94%, #153261 87.5%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        width: "200px",
        isActive : 400,
        textTransform:"capitalize"
    },
});
export default SiteDrawer;