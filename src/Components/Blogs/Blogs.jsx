import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Bookmarks from "../Bookmarks/Bookmarks";


const Blogs = () => {
  const [blogs, setBlogs]=useState([]);
  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
  return (
    <div className="md:flex max-w-7xl ">
      <div className="blog-container">
      {
        blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
      }
      </div>
      <Bookmarks></Bookmarks>
    </div>
  );
};

export default Blogs;