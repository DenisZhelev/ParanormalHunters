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

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 385,
    margin: "0px 25px 40px 25px",
    maxHeight: "515"
  },
  media: {
    height: 280,
    borderRadius: 7,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
  },
  postCat: {
    fontFamily: "Varela Round, sans-serif",
    fontSize: 11,
    color: "#be9656",
    lineHeight: "20px",
    marginTop: 15,
    marginRight: 10,
    cursor: "pointer",
  },
  postTitle: {
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: 24,
    fontWeight: 700,
    marginTop: 15,
    cursor: "pointer",
  },
  postDate: {
    fontFamily: "Lora, serif",
    fontStyle: "italic",
    fontSize: 13,
    color: "#999",
    marginTop: 15,
  },
  postDesc: {
    fontFamily: "Varela Round, sans-serif",
    fontSize: 14,
    color: "#444",
    lineHeight: "24px",
    marginTop: 15,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
  },
}));

export default function Post({ post }) {
  const classes = useStyles();
  const PF = "http://localhost:5000/images/";

  return (
    <Card className={classes.root}>
      {post.photo && (
        <CardMedia
          className={classes.media}
          image={PF + post.photo}
          title={post.title}
        />
      )}
      <CardContent className={classes.postInfo}>
        <div>
          {post.categories.map((c) => (
            <span key={c.id} className={classes.postCat}>
              {c.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className={classes.link}>
          <Typography variant="h5" className={classes.postTitle}>
            {post.title}
          </Typography>
        </Link>
        <Typography variant="body2" className={classes.postDate}>
          {new Date(post.createdAt).toDateString()}
        </Typography>
        <Typography variant="body1" className={classes.postDesc}>
          {post.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
