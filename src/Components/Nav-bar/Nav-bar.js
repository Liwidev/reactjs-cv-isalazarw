import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HideOnScroll from './Hide-on-scroll/Hide-on-scroll';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const drawerWidth = 240;

export default function NavBar(props){
    const { width, contactScroll, homeScroll, coreExperticesScroll, skillsScroll, aboutScroll } = props;
    const isSmall = width === 'xs' || width === 'sm'  ? true : false;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const useStyles = makeStyles(() => ({
        title: {
          flexGrow: 6,
          fontSize: '40px',
          fontFamily: `Poppins, sans-serif`,
          marginLeft: '40px',
          
          '@media screen and (max-width: 450px)' : {
            fontSize: '25px',
            minWidth:'300px',
            marginLeft: '0px',
          },
        },
        navItems: {
          flexGrow: 1,
          fontSize: '18px',
          fontFamily: `Poppins, sans-serif`,
          fontWeight: 'bold',
          visibility: isSmall? 'hidden' : 'visible',
        },
        SidePanelButton:{
          visibility: isSmall? 'visible' : 'hidden',
        },
        hide: {
          // display: 'none',
        },
        navBar: {
          height: '12vh',
          maxHeight: '100px',
          backgroundColor: '#F57D7C',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {  
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        },
      }));
    const classes = useStyles();

    return (
        <HideOnScroll {...props}>
          <AppBar >
            <Toolbar className={classes.navBar}>
              <div className={classes.SidePanelButton}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <Typography variant="h6" className={classes.title}>
                 Ignacio Salazar Williams 
              </Typography>
              <Button className={classes.navItems} color="inherit" onClick={homeScroll}>Home</Button>
              <Button className={classes.navItems} color="inherit" onClick={aboutScroll}>About</Button>
              <Button className={classes.navItems} color="inherit" onClick={coreExperticesScroll}>Core Expertices</Button>
              <Button className={classes.navItems} color="inherit" onClick={skillsScroll}>Skills</Button>
              <Button className={classes.navItems} color="inherit" onClick={contactScroll}>Contact</Button>
            </Toolbar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>
                <Divider />
                <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
          </AppBar>
        </HideOnScroll>
    )
}