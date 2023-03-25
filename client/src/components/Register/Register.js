// import axios from "axios";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./register.css";

// export default function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(false);
//     try {
//       const res = await axios.post("/auth/register", {
//         username,
//         email,
//         password,
//       });
//       res.data && window.location.replace("/login");
//     } catch (err) {
//       setError(true);
//     }
//   };
//   return (
//     <div className="register">
//       <span className="registerTitle">Register</span>
//       <form className="registerForm" onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your username..."
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label>Email</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your email..."
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           className="registerInput"
//           placeholder="Enter your password..."
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="registerButton" type="submit">
//           Register
//         </button>
//       </form>
//       <button className="registerLoginButton">
//         <Link className="link" to="/login">
//           Login
//         </Link>
//       </button>
//       {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
//     </div>
//   );
// } 

import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./register.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 50px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
    backgroundSize: "cover",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 50,
  },
  form: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    border: "none",
  },
  button: {
    marginTop: 20,
    cursor: "pointer",
    backgroundColor: "teal",
    border: "none",
    color: "white",
    borderRadius: 10,
    padding: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  paper: {
    padding: theme.spacing(4),
    maxWidth: 400,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
}));

export default function Register() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Typography variant="h1" className={classes.title}>
        Register
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
          label="Email"
          variant="outlined"
          className={classes.input}
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
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
          Register
        </Button>
        </form>
        <div>
        <span>
          Already registered?&nbsp;
        </span>
        <Link to="/login">
          LOGIN
        </Link>
      </div>
      </Paper>
      {error && (
        <span className={classes.error}>Something went wrong!</span>
      )}
    </div>
  );
}