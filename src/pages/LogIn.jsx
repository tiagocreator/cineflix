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

  return (
    <div className="flex justify-center items-center w-full h-screen text-[#fff]">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src={BgImg}
        alt=""
      />
      <div className="bg-black/60 w-full h-full z-10"></div>
      <div className="absolute w-full z-20">
        <div className="max-w-[450px] h-[450px] mx-auto bg-black/80 text-[#fff] ">
          <div className="max-w-[320px] mx-auto py-[45px]">
            <h1 className="text-[1.8rem] font-bold">Sign In</h1>
            {error ? (
              <p className="bg-red-400 py-[8px] px-[10px] rounded">
                {error.split('Firebase: ')}
              </p>
            ) : null}
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col py-[16px]"
            >
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="p-[12px] my-[8px] bg-gray-800 rounded outline-none"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="p-[12px] my-[8px] bg-gray-800 rounded outline-none"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-[12px] my-[25px] rounded font-bold">
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
