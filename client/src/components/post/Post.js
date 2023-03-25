// import "./post.css";
// import { Link } from "react-router-dom";

// export default function Post({ post }) {
//   const PF = "http://localhost:5000/images/";
//   return (
//     <div className="post">
//       {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
//       <div className="postInfo">
//         <div className="postCats">
//           {post.categories.map((c) => (
//             <span className="postCat">{c.name}</span>
//           ))}
//         </div>
//         <Link to={`/post/${post._id}`} className="link">
//           <span className="postTitle">{post.title}</span>
//         </Link>
//         <hr />
//         <span className="postDate">
//           {new Date(post.createdAt).toDateString()}
//         </span>
//       </div>
//       <p className="postDesc">{post.desc}</p>
//     </div>
//   );
// }
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginBottom: theme.spacing(3),
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  categories: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  category: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0.5, 1),
    borderRadius: '4px',
    backgroundColor: theme.palette.grey[200],
  },
}));

export default function Post({ post }) {
  const classes = useStyles();
  const PF = 'http://localhost:5000/images/';

  return (
    <Card className={classes.root}>
      {post.photo && (
        <CardMedia
          className={classes.media}
          image={PF + post.photo}
          title={post.title}
        />
      )}
      <CardContent>
        <div className={classes.categories}>
          {post.categories.map((category) => (
            <div key={category._id} className={classes.category}>
              <Typography variant="caption">{category.name}</Typography>
            </div>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className={classes.link}>
          <Typography variant="h6" component="h2" gutterBottom>
            {post.title}
          </Typography>
        </Link>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          {new Date(post.createdAt).toDateString()}
        </Typography>
        <Typography variant="body1" component="p">
          {post.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}