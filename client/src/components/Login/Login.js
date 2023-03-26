// import axios from "axios";
// import { useContext, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./login.css";

// export default function Login() {
//   const userRef = useRef();
//   const passwordRef = useRef();
//   const { dispatch, isFetching } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("/v1/auth/login", {
//         username: userRef.current.value,
//         password: passwordRef.current.value,
//       });
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE" });
//     }
//   };

//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm" onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           type="text"
//           className="loginInput"
//           placeholder="Enter your username..."
//           ref={userRef}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           className="loginInput"
//           placeholder="Enter your password..."
//           ref={passwordRef}
//         />
//         <button className="loginButton" type="submit" disabled={isFetching}>
//           Login
//         </button>
//       </form>
//       <button className="loginRegisterButton">
//         <Link className="link" to="/register">
//           Register
//         </Link>
//       </button>
//     </div>
//   );
// }
// import axios from "axios";
// import React, { useContext, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Context } from '../../context/Context';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   TextField,
//   Button,
//   Typography,
//   Paper,
// } from '@material-ui/core';
// // import backgroundImage from '../../assets/images/background.jpg';

// const useStyles = makeStyles((theme) => ({
//   login: {
//     height: 'calc(100vh - 50px)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImage})`,
//     backgroundSize: 'cover',
//   },
//   paper: {
//     padding: theme.spacing(4),
//     maxWidth: 400,
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//   },
//   form: {
//     marginTop: theme.spacing(2),
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     marginBottom: theme.spacing(2),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     backgroundColor: theme.palette.error.main,
//     color: theme.palette.common.white,
//     '&:hover': {
//       backgroundColor: theme.palette.error.dark,
//     },
//   },
//   title: {
//     fontSize: 50,
//     marginBottom: theme.spacing(2),
//   },
// }));

// export default function Login() {
//   const userRef = useRef();
//   const passwordRef = useRef();
//   const { dispatch, isFetching } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: 'LOGIN_START' });
//     try {
//       const res = await axios.post('/v1/auth/login', {
//         username: userRef.current.value,
//         password: passwordRef.current.value,
//       });
//       dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//     } catch (err) {
//       dispatch({ type: 'LOGIN_FAILURE' });
//     }
//   };

//   const classes = useStyles();

//   return (
//     <div className={classes.login}>
//       <Paper className={classes.paper}>
//       <Typography variant="h1" className={classes.title}>
//         Login
//       </Typography>
//         <form className={classes.form} onSubmit={handleSubmit}>
//           <TextField
//             label="Username"
//             variant="outlined"
//             className={classes.input}
//             inputRef={userRef}
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             className={classes.input}
//             inputRef={passwordRef}
//           />
//           <Button
//             variant="contained"
//             className={classes.button}
//             type="submit"
//             disabled={isFetching}
//           >
//             Login
//           </Button>
//         </form>
//         <div>
//         <span>
//           Still not registered?&nbsp;
//         </span>
//         <Link to="/register">
//           REGISTER
//         </Link>
//       </div>
//       </Paper>
//     </div>
//   );
// }

// import axios from "axios";
// import React, { useContext, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Context } from '../../context/Context';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   TextField,
//   Button,
//   Typography,
//   Paper,
// } from '@material-ui/core';
// // import backgroundImage from '../../assets/images/background.jpg';

// const useStyles = makeStyles((theme) => ({
//   login: {
//     height: 'calc(100vh - 50px)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${backgroundImage})`,
//     backgroundSize: 'cover',
//   },
//   paper: {
//     padding: theme.spacing(4),
//     maxWidth: 400,
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//   },
//   form: {
//     marginTop: theme.spacing(2),
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     marginBottom: theme.spacing(2),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     backgroundColor: theme.palette.error.main,
//     color: theme.palette.common.white,
//     '&:hover': {
//       backgroundColor: theme.palette.error.dark,
//     },
//   },
//   title: {
//     fontSize: 50,
//     marginBottom: theme.spacing(2),
//   },
// }));

// export default function Login() {
//   const usernameRef = useRef();
//   const passwordRef = useRef();
//   const { dispatch, isFetching } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: 'LOGIN_START' });
//     try {
//       const res = await axios.post('/v1/auth/login', {
//         username: usernameRef.current.value,
//         password: passwordRef.current.value,
//       });
//       dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//     } catch (err) {
//       dispatch({ type: 'LOGIN_FAILURE' });
//     }
//   };

//   const classes = useStyles();

//   return (
//     <div className={classes.login}>
//       <Paper className={classes.paper}>
//       <Typography variant="h1" className={classes.title}>
//         Login
//       </Typography>
//         <form className={classes.form} onSubmit={handleSubmit}>
//           <TextField
//             label="Username"
//             variant="outlined"
//             className={classes.input}
//             inputRef={usernameRef}
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             className={classes.input}
//             inputRef={passwordRef}
//           />
//           <Button
//             variant="contained"
//             className={classes.button}
//             type="submit"
//             disabled={isFetching}
//           >
//             Login
//           </Button>
//         </form>
//         <div>
//         <span>
//           Don't have an account?&nbsp;
//         </span>
//         <Link to="/register">
//           Register
//         </Link>
//       </div>
//       </Paper>
//     </div>
//   );
// }
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from './styles';

export default function Login() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      res.data && window.location.replace("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h1" className={classes.title}>
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            className={classes.input}
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            className={classes.input}
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Login
          </Button>
        </form>
        <div>
          <span className={classes.white}>Don't have an account? </span>
          <Link to="/register" className={classes.white}>
            REGISTER
          </Link>
        </div>
      </Paper>
      {error && (
        <span className={classes.error}>Something went wrong!</span>
      )}
    </div>
  );
}