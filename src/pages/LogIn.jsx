import BgImg from '../assets/img/signup.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/Auth';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, LogIn } = UserAuth();

  const inputStyle = 'p-3 my-2 rounded outline-none text-theme-black';

  const handleSubmit = async (e) => {
    e.preventDefault();
    await LogIn(email, password);
  };

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src={BgImg} alt='' />
      <div className='bg-theme-background-60 w-full h-full z-10'></div>
      <div className='absolute w-full z-20'>
        <div className='max-w-[450px] h-[450px] mx-auto bg-theme-background-80'>
          <div className='max-w-[320px] mx-auto py-11'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            <form action='' onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={inputStyle}
                type='email'
                placeholder='Email'
                autoComplete='email'
                autoFocus
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={inputStyle}
                type='password'
                placeholder='Password'
                autoComplete='current-password'
              />
              <button className='bg-theme-red hover:bg-theme-darkred focus:bg-theme-darkred py-3 my-6 rounded font-bold'>
                Sign In
              </button>
              <div className='flex justify-between items-center text-sm text-theme-lightgray'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Remember Me?
                </p>
                <p className='cursor-pointer'>Need Help?</p>
              </div>
              <div>
                <p className='mt-4'>
                  <span className='text-theme-lightgray mr-2'>New to Cineflix?</span>{' '}
                  <Link to='/signup'>Sign Up</Link>
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
