import React, { useState } from 'react';
import { List, ListItem, Toolbar, Typography, IconButton, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { DarkModeToggler, Image } from 'components/atoms';
import PropTypes from 'prop-types';
import logo_dark from './Logo_transparent.png';
import logo_light from './Logo_trans_white.png';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
    color: theme.palette.primary.dark,
    fontSize: '1rem',
    fontFamily: 'Lato',
    fontWeight: 400,
    lineHeight: 1.5,
    textDecoration: 'none',
  },
  listItem: {
    cursor: 'pointer',
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    color: 'red',
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '140px',
    height: '140px',
    marginTop: '-52px',
    marginLeft: '-28px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  mobileMenuButton: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  desktopMenu: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  drawer: {
    width: 250,
  },
  drawerContent: {
    padding: theme.spacing(2),
  },
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;
  const testers = pages.testers;
  const pricing = pages.pricing;

  const menuItems = [landings, supportedPages, account, testers, pricing].map((page, i) => (
    <ListItem key={page.id} className={clsx(classes.listItem)}>
      <Typography
        variant="body1"
        color="textPrimary"
        className={clsx(classes.listItemText, 'menu-item')}
      >
        <a href={page.href} className={classes.navLink}>
          {page.title}
        </a>
      </Typography>
    </ListItem>
  ));

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="thefront">
          <Image
            className={classes.logoImage}
            src={themeMode === 'light' ? logo_dark : logo_light}
            alt="logo"
            lazy={false}
          />
        </a>
      </div>
      <div className={classes.flexGrow} />

      {/* Mobile Menu Button */}
      <div className={classes.mobileMenuButton}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </div>

      {/* Desktop Menu */}
      <div className={classes.desktopMenu}>
        <List disablePadding className={classes.navigationContainer}>
          {menuItems}
          <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
            <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
          </ListItem>
        </List>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <div className={classes.drawerContent}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
          <List disablePadding>{menuItems}</List>
          <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        </div>
      </Drawer>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
