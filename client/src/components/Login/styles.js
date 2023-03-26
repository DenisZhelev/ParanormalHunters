import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 50px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url("../../../images/back.jpeg")`,
    backgroundSize: 'cover',
  },
  input: {
    marginBottom: theme.spacing(2),
    '& label.Mui-focused': {
      color: '#ffffff',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#ffffff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ffffff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ffffff',
      },
      '&:hover fieldset': {
        borderColor: '#ffffff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffffff',
      },
    },
    '& input': {
      color: '#ffffff',
    },
    '& label': {
      color: '#ffffff',
    },
  },
  title: {
    fontSize: 50,
    color: "white",
  },
  white: {
    color: "white",
  },
  form: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    backgroundColor: 'rgba(211, 211, 211, 0.0)', // update background color and opacity
    padding: theme.spacing(4), // add padding
    maxWidth: 400,
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(2),
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    border: "none",
    color: theme.palette.common.white,
    borderRadius: 10,
    padding: 10,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    padding: theme.spacing(4), // add padding
    maxWidth: 400,
    width: '100%',
  },
}));
export default useStyles;