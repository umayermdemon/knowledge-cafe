import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
  console.log(bookmarks)
  return (
    <div className="md:w-1/3 text-left">
      <div className="bg-[#6047EC1A] border border-[#6047EC] rounded-xl">
          <h2 className="text-xl font-bold text-center text-[#6047EC] py-4 px-12">Spent time on read : <span>{readingTime}</span>min</h2>
      </div>
      <div className="bg-[#1111110D] mt-6 px-6 py-10 rounded-xl">
        <h2 className="text-xl font-bold ">Bookmarked Blogs : {bookmarks.length}</h2>
        <div>
        {
          bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
      </div>
      </div>
      
    </div>
  );
};

Bookmarks.propTypes={
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number
}
export default Bookmarks;