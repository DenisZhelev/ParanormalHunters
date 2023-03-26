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