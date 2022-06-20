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
        <img className="h-[40px] md:h-[53px]" src={Logo} alt="cineflix logo" />
      </Link>
      {user?.email ? (
        <nav className="text-[1rem]">
          <Link to="/account">
            <button className="border hover:bg-[#2D2D2D] active:bg-[#2D2D2D] border-[#d4d4d4] text-[#fff] py-[3px] md:py-[7px]  px-[10px] md:px-[18px]">
              Account
            </button>
          </Link>
          <button
            onClick={handleLogOut}
            className="bg-red-600 active:bg-red-700 py-[4px] md:py-[8px] px-[10px] md:px-[18px] cursor-pointer font-bold text-[#fff] ml-[11px] md:ml-[25px]"
          >
            Sign Out
          </button>
        </nav>
      ) : (
        <nav className="text-[1rem]">
          <Link to="/login">
            <button className="border hover:bg-[#2D2D2D] active:bg-[#2D2D2D] border-[#d4d4d4] text-[#fff] py-[3px] md:py-[7px]  px-[10px] md:px-[18px]">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 active:bg-red-700 py-[4px] md:py-[8px] px-[10px] md:px-[18px] cursor-pointer font-bold text-[white] ml-[11px] md:ml-[25px]">
              Join Now
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
