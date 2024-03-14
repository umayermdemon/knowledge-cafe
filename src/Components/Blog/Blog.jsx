import PropTypes from 'prop-types';
import bookmarksIcon from '../../assets/images/bookmarks-icon.svg'
const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
  const {id, title, author_img, author_name, cover_img, posted_date,read_time, hashtags}=blog;
  return (
    <div className=" mb-8">
      <img className='rounded-xl w-full' src={cover_img} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center my-4">
          <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="text-xl font-bold">{author_name}</h3>
            <p className="text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div className='flex gap-1 items-center'>
            <p className='text-[#11111199] font-bold text-base'>{read_time} min read</p>
            <button onClick={()=>handleBookmark(blog)}><img src={bookmarksIcon} alt="" /> </button>
        </div>
      </div>
      <h1 className="text-5xl font-bold my-2">{title}</h1>
      <div className='flex flex-row gap-4 '>
      {
          hashtags.map((hashtag, idx)=><h3 key={idx}>
            #{hashtag}
          </h3>)
        }
      </div>

      <button onClick={()=>handleMarkAsRead(id, read_time)} className='underline text-sm text-[#6047EC] my-2'>Mark As Read</button>
      
      <hr />
    </div>
  );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blog;