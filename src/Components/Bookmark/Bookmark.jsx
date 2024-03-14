
import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
  const {title}=bookmark
  return (
    <div className="bg-white rounded-xl p-4 my-4">
    <p>{title}</p>
  </div>
);
};

Bookmark.propTypes={
bookmark:PropTypes.array.isRequired
}
export default Bookmark;
