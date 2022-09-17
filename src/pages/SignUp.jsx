import BgImg from '../assets/img/signup.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Auth';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, SignUp } = UserAuth();
  const navigate = useNavigate();

  const inputStyle = 'p-3 my-2 rounded outline-none text-theme-black';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SignUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src={BgImg}
        alt=""
      />
      <div className="bg-theme-background-60 w-full h-full z-10"></div>
      <div className="absolute w-full z-20">
        <div className="max-w-[450px] h-auto mx-auto bg-theme-background-80">
          <div className="max-w-[320px] mx-auto py-11">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={inputStyle}
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={inputStyle}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
              <button className="bg-theme-red hover:bg-theme-darkred focus:bg-theme-darkred py-3 my-6 rounded font-bold">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-theme-lightgray">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember Me?
                </p>
                <a className="cursor-pointer" href="/signup">
                  Need Help?
                </a>
              </div>
              <div>
                <p className="mt-4">
                  <span className="text-theme-lightgray mr-2">
                    Already subscribed to Cineflix?
                  </span>{' '}
                  <Link to="/login">Sign In</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
