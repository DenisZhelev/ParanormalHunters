import { useEffect, useState } from "react";
import Posts from "./Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";
// import * from "./";
import axios from "axios";
import { useLocation } from "react-router";

export default function Catalog() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <div className="home">
        <Posts posts={posts} />
        {/* <Sidebar /> */}
      </div>
    </>
  );
}

