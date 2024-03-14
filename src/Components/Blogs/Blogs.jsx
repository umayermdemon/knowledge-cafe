import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs]=useState([]);
  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
  return (
    <div className="md:w-2/3  ">
      <div className="blog-container">
      {
        blogs.map(blog=> <Blog key={blog.id} 
        handleBookmark={handleBookmark} 
        blog={blog}
        handleMarkAsRead={handleMarkAsRead}
        ></Blog>)
      }
      </div>
  
    </div>
  );
};

Blogs.propTypes={
  handleBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
}
export default Blogs;