import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center my-4 border-b-2 border-gray-200 '>
       <h1 className='text-4xl font-bold py-4'>Knowledge Cafe</h1>
       <img src={profile} alt="" />
    </div>
  );
};

export default Header;