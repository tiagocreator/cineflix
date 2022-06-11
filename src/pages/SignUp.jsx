import BgImg from '../assets/img/signup.jpg';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen text-[#fff]">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src={BgImg}
        alt=""
      />
      <div className="bg-black/60 w-full h-full z-10"></div>
      <div className="absolute w-full z-20">
        <div className="max-w-[450px] h-auto mx-auto bg-black/80 text-[#fff] ">
          <div className="max-w-[320px] mx-auto py-[45px]">
            <h1 className="text-[1.8rem] font-bold">Sign Up</h1>
            <form className="w-full flex flex-col py-[16px]">
              <input
                className="p-[12px] my-[8px] bg-gray-800 rounded outline-none"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                className="p-[12px] my-[8px] bg-gray-800 rounded outline-none"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <input
                className="p-[12px] my-[8px] bg-gray-800 rounded outline-none"
                type="password"
                placeholder="Repeat Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-[12px] my-[25px] rounded font-bold">
                Sign Up
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
