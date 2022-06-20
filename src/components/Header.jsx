import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Auth';
import Logo from '../assets/img/cineflix-logo.jpg';

const Header = () => {
  const { user, LogOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await LogOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-full flex items-center justify-between py-[5px] px-[16px] md:px-[32px] z-[100] h-[70px]">
      <Link to="/">
        <img className="h-[45px] md:h-[55px]" src={Logo} alt="cineflix logo" />
      </Link>
      {user?.email ? (
        <nav className="text-[1rem]">
          <Link to="/account">
            <button className="border border-[#d4d4d4] text-[#fff] py-[7px] px-[18px]">
              Account
            </button>
          </Link>
          <button
            onClick={handleLogOut}
            className="bg-red-600 py-[7px] px-[18px] cursor-pointer font-bold text-[white] ml-[25px]"
          >
            Sign Out
          </button>
        </nav>
      ) : (
        <nav className="text-[1rem]">
          <Link to="/login">
            <button className="border border-[#d4d4d4] text-[#fff] py-[7px] px-[18px]">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 py-[7px] px-[18px] cursor-pointer font-bold text-[white] ml-[25px]">
              Join Now
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
