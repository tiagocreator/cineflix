import BgImg from '../assets/img/signup.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/Auth';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, LogIn } = UserAuth();
  const navigate = useNavigate();

  const inputClass = 'p-3 my-2 rounded outline-none text-theme-black'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await LogIn(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleError = () => {
    return error ? (
      <p className="bg-red-400 py-1.5 px-2.5 rounded">
        {
          error.includes('too-many-requests') ? 'Access to this account has been temporarily disabled due to many failed login attempts. You can try again later'
          : error.includes('user-not-found') ? 'User not found'
          : error.includes('invalid-email') ? 'Incorrect email adress' 
          : error.includes('wrong-password') ? 'Incorrect password' 
          : 'Invalid email adress or password'
        }
      </p>
    ) : null
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src={BgImg}
        alt=""
      />
      <div className="bg-black/60 w-full h-full z-10"></div>
      <div className="absolute w-full z-20">
        <div className="max-w-[450px] h-[450px] mx-auto bg-black/80">
          <div className="max-w-[320px] mx-auto py-11">
            <h1 className="text-3xl font-bold">Sign In</h1>
              {handleError()}
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col py-4"
            >
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={inputClass}
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={inputClass}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-theme-darkred hover:bg-theme-red focus:bg-theme-red py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-[0.9rem] text-gray-500">
                <p>
                  <input className="mr-[8px]" type="checkbox" />
                  Remember Me?
                </p>
                <p className="cursor-pointer">Need Help?</p>
              </div>
              <div>
                <p className="mt-[16px]">
                  <span className="text-gray-500 mr-[8px]">
                    New to Cineflix?
                  </span>{' '}
                  <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
