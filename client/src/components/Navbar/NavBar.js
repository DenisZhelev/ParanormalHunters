// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./topbar.css";

// export default function TopBar() {
//   const { user, dispatch } = useContext(Context);
//   const PF = "http://localhost:5000/images/"

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//   };
//   return (
//     <div className="top">
//       <div className="topLeft">
//         <i className="topIcon fab fa-facebook-square"></i>
//         <i className="topIcon fab fa-twitter-square"></i>
//         <i className="topIcon fab fa-pinterest-square"></i>
//         <i className="topIcon fab fa-instagram-square"></i>
//       </div>
//       <div className="topCenter">
//         <ul className="topList">
//           <li className="topListItem">
//             <Link className="link" to="/">
//               CATALOG
//             </Link>
//           </li>
//           <li className="topListItem">
//             <Link className="link" to="/">
//               ABOUT
//             </Link>
//           </li>
//           <li className="topListItem">
//             <Link className="link" to="/">
//               CONTACT
//             </Link>
//           </li>
//           <li className="topListItem">
//             <Link className="link" to="/write">
//               WRITE
//             </Link>
//           </li>
//           <li className="topListItem" onClick={handleLogout}>
//             {user && "LOGOUT"}
//           </li>
//         </ul>
//       </div>
//       <div className="topRight">
//         {user ? (
//           <Link to="/settings">
//             <img className="topImg" src={PF+user.profilePic} alt="" />
//           </Link>
//         ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">
//                 LOGIN
//               </Link>
//             </li>
//             <li className="topListItem">
//               <Link className="link" to="/register">
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         )}
//         <i className="topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   );
// }

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { Context } from "../../context/Context";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function TopBar() {
//   const { user, dispatch } = useContext(Context);
//   const PF = "http://localhost:5000/images/";
  
//   const classes = useStyles();

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <i className="fab fa-facebook-square"></i>
//           </IconButton>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <i className="fab fa-twitter-square"></i>
//           </IconButton>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <i className="fab fa-pinterest-square"></i>
//           </IconButton>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <i className="fab fa-instagram-square"></i>
//           </IconButton>
//           <Button color="inherit" component={Link} to="/catalog">
//             CATALOG
//           </Button>
//           <Button color="inherit" component={Link} to="/">
//             ABOUT
//           </Button>
//           <Button color="inherit" component={Link} to="/">
//             CONTACT
//           </Button>
//           {user && (
//             <>
//               <Button color="inherit" component={Link} to="/write">
//                 WRITE
//               </Button>
//               <Button color="inherit" onClick={handleLogout}>
//                 LOGOUT
//               </Button>
//               {/* <Link to="/settings">
//                 <img src={PF + user.profilePic} alt="" className="topImg" />
//               </Link> */}
//               <Button color="inherit" component={Link} to="/">
//               <img src={PF + user.profilePic} alt="" className="topImg" />
//               </Button>
//             </>
//           )}
//           {!user && (
//             <>
//               <Button color="inherit" component={Link} to="/login">
//                 LOGIN
//               </Button>
//               <Button color="inherit" component={Link} to="/register">
//                 REGISTER
//               </Button>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "../../context/Context";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItemText,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuIcon: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    width: 250,
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      width: "auto",
    },
  },
  drawerItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: theme.spacing(2),
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
  
}));

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:1024px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const menuItems = (
    <div className={classes.drawerItems}>
      <Button color="inherit" component={Link} to="/" onClick={toggleDrawer(false)}>
        HOME
      </Button>
      <Button color="inherit" component={Link} to="/catalog" onClick={toggleDrawer(false)}>
        CATALOG
      </Button>
      <Button color="inherit" component={Link} to="/" onClick={toggleDrawer(false)}>
        ABOUT
      </Button>
      <Button color="inherit" component={Link} to="/" onClick={toggleDrawer(false)}>
        CONTACT
      </Button>
      {user && (
        <>
          <Button color="inherit" component={Link} to="/write" onClick={toggleDrawer(false)}>
            WRITE
          </Button>
          <Button color="inherit" onClick={handleLogout} onClick={toggleDrawer(false)}>
            LOGOUT
          </Button>
          <Button color="inherit" component={Link} to="/" onClick={toggleDrawer(false)}>
            <img src={PF + user.profilePic} alt="" className="topImg" />
          </Button>
        </>
      )}
      {!user && (
        <>
          <Button color="inherit" component={Link} to="/login" onClick={toggleDrawer(false)}>
            LOGIN
          </Button>
          <Button color="inherit" component={Link} to="/register" onClick={toggleDrawer(false)}>
            REGISTER
          </Button>
        </>
      )}
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BLOG
          </Typography>
          {isMobile ? (
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
              {menuItems}
            </Drawer>
          ) : (
            <List component="nav" aria-labelledby="main navigation" className={classes.list}>
              <Button component={Link} to="/" color="inherit">HOME</Button>
             <Button component={Link} to="/catalog" color="inherit">CATALOG</Button>
             <Button component={Link} to="/" color="inherit">ABOUT</Button>
             <Button component={Link} to="/" color="inherit">CONTACT</Button>
              {user && (
                <>
                  <Button color="inherit" component={Link} to="/write" onClick={toggleDrawer(false)}>
                  WRITE
                  </Button>
                  <Button color="inherit" onClick={handleLogout}>
                    LOGOUT
                  </Button>
                  <Button color="inherit" component={Link} to="/settings">
                    <img src={PF + user.profilePic} alt="" className="topImg" />
                  </Button>
                </>
              )}
              {!user && (
                <>
                  <Button color="inherit" component={Link} to="/login">
                    LOGIN
                  </Button>
                  <Button color="inherit" component={Link} to="/register">
                    REGISTER
                  </Button>
                </>
              )}
            </List>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}