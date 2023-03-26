import { Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontSize: 24,
    marginBottom: theme.spacing(4),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Paranormal Hunters
      </Typography>
      <Typography variant="h4" className={classes.subtitle}>
        We have all the spooky stuff on the internet.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Latest Articles</Typography>
          <ul>
            <li>
              <Link to="/articles/ghost-sightings">Ghost Sightings</Link>
            </li>
            <li>
              <Link to="/articles/haunted-houses">Haunted Houses</Link>
            </li>
            <li>
              <Link to="/articles/demonic-possession">
                Demonic Possession: Fact or Fiction?
              </Link>
            </li>
          </ul>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={Link}
            to="/articles"
          >
            View All Articles
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Popular Videos</Typography>
          <ul>
            <li>
              <Link to="/videos/ghost-hunters">Ghost Hunters</Link>
            </li>
            <li>
              <Link to="/videos/paranormal-investigations">
                Paranormal Investigations: The Real Story
              </Link>
            </li>
            <li>
              <Link to="/videos/haunted-places">Haunted Places</Link>
            </li>
          </ul>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={Link}
            to="/videos"
          >
            View All Videos
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}