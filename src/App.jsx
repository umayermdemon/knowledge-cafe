
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
const [bookmarks, setBookmarks]=useState([]);
const [readingTime, setReadingTime]=useState(0);

const handleBookmark=blog=>{
  const isExist=bookmarks.find(bookmark=>bookmark.id===blog.id);
  if(!isExist){
    const newBookmarks=[...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  else{
    alert("Already Exist")
  }
}

const handleMarkAsRead= (id, time)=>{
  setReadingTime(readingTime+time);
  const newBookmarks=bookmarks.filter(bookmark =>bookmark.id!==id);
  setBookmarks(newBookmarks)
}
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex gap-4 max-w-7xl  '>
         <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
         <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </div>
     
     
   
  )
}

export default App
