import PropTypes from 'prop-types';
import bookmarksIcon from '../../assets/images/bookmarks-icon.svg'
const Blog = ({blog}) => {
  const {title, author_img, author_name, cover_img, posted_date,read_time}=blog;
  return (
    <div className="md:w-2/3 mb-4 border ml-6">
      <img className='rounded-xl' src={cover_img} alt="" />
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
            <button><img src={bookmarksIcon} alt="" /> </button>
        </div>
      </div>
      <h1 className="text-5xl font-bold my-4">{title}</h1>

      <hr />
    </div>
  );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
}
export default Blog;