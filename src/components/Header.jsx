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
    <header className="w-full flex items-center justify-between py-1.5 px-4 md:px-8 z-[100] h-16">
      <Link to="/">
        <img className="h-10 md:h-11" src={Logo} alt="cineflix logo" />
      </Link>
      {user?.email ? (
        <nav className="text-base">
          <Link to="/account">
            <button className="border hover:bg-theme-darkgray focus:bg-theme-darkgray border-theme-lightgray py-1 md:py-1.5 px-2.5 md:px-5">
              Account
            </button>
          </Link>
          <button
            onClick={handleLogOut}
            className="bg-theme-red hover:bg-theme-darkred focus:bg-theme-darkred py-1 md:py-1.5 px-2.5 md:px-4 font-bold ml-2.5 md:ml-6 border border-theme-red hover:border-theme-darkred focus:border-theme-darkred"
          >
            Sign Out
          </button>
        </nav>
      ) : (
        <nav className="text-base">
          <Link to="/login">
            <button className="border hover:bg-theme-darkgray focus:bg-theme-darkgray border-theme-lightgray py-1 md:py-1.5 px-2.5 md:px-5">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-theme-red hover:bg-theme-darkred focus:bg-theme-darkred py-1 md:py-1.5 px-2.5 md:px-4 font-bold ml-2.5 md:ml-6 border border-theme-red hover:border-theme-darkred focus:border-theme-darkred">
              Join Now
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
