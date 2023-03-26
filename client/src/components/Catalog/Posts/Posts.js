// import Post from "../Post/Post";
// import "./posts.css";

// export default function Posts({ posts }) {
//   return (
//     <div className="posts">
//       {posts.map((p) => (
//         <Post post={p} />
//       ))}
//     </div>
//   );
// }

import Post from "./Post/Post";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  posts: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "30px",
  },
}));

export default function Posts({ posts }) {
  const classes = useStyles();

  return (
    <div className={classes.posts}>
      {posts.map((p) => (
        <div key={p.id}>
          <Post post={p} />
        </div>
      ))}
    </div>
  );
}

// import { Grid } from "@material-ui/core";
// import Post from "../Post/Post";
// import "./posts.css";

// export default function Posts({ posts }) {
//   return (
//     <div className="posts">
//       <Grid container spacing={3}>
//         {posts.map((p) => (
//           <Grid item xs={12} sm={6} md={4} key={p._id}>
//             <Post post={p} />
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }