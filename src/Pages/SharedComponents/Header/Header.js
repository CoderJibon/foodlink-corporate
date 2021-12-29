import { Button, Container, List, ListItem, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system";
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
const Header = () => {
  const classes = useStyle();

  const active = ({ isActive }) => ({
    fontWeight: isActive ? "700" : "400"
  });
  
  return (
    <Box className={classes.headerContent}>
        <Box className="logo" >
          <Link to="/">
              <img src={process.env.PUBLIC_URL+`/assets/logo.png`} alt="foodlink" />
          </Link>
        </Box>
        <Box>
          <AppBar position="static" className={classes.root}> 
            <Toolbar>
              <Container>
                <Box className={classes.center}>
                  <List className={classes.list}>
                    <ListItem className={classes.item} >
                    <Button to="/"
                      component={NavLink}
                      className={classes.btn}
                       style={active}
                      >
                        Home
                      </Button>
                    </ListItem>
                    <ListItem className={classes.item}>
                      <Button style={active} to="/whoWeAre" component={NavLink} className={classes.btn}>
                        Who We Are
                      </Button>
                    </ListItem>
                    <ListItem className={classes.item}>
                      <Button style={active} to="/whatWeDo" component={NavLink} className={classes.btn}>
                        What We Do
                      </Button>
                    </ListItem>
                    <ListItem className={classes.item}>
                      <Button style={active} to="/WhyUs" component={NavLink} className={classes.btn}>
                        Why Us
                      </Button>
                  </ListItem>
                   <ListItem style={{padding:"0px"}}>
                      <Button style={active} to="/contact" component={NavLink} className={classes.btn}>
                        Contact
                      </Button>
                    </ListItem>
                  </List>
                </Box>
              </Container>
            </Toolbar>
          </AppBar>
        </Box>
    </Box>
  );
};


const useStyle = makeStyles({
  root: {
    backgroundColor: "transparent!important",
    boxShadow:"inherit!important"
  },
  list: {
    display: "inline-flex",
    
  },
  item: {
    borderRight: "1px solid rgba(0, 105, 152, 1)!important",
    padding:"0px!important"
  },
  center: {
    textAlign:"center"
  },
  btn: {
    padding: "0px 10px!important",
    fontSize: "18px!important",
    background:"-webkit-linear-gradient(90deg, #006998 6.94%, #153261 87.5%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    width: "200px",
    fontWeight: "400",
    textTransform:"capitalize"
  },
  headerContent: {
    paddingBottom:"20px"
  }

});

export default Header;