const Header = () => {
  return (
    <header className="w-full flex items-center justify-between py-[8px] px-[16px] md:px-[32px] z-[100] absolute">
      <h1 className="text-red-600 text-[2.6rem] font-bold cursor-pointer">
        CINEFLIX
      </h1>
      <nav className="text-[1.1rem]">
        <button className="text-[#fff] ">Sign In</button>
        <button className="bg-red-600 px-[24px] py-[8px] cursor-pointer font-bold text-[white] ml-[25px]">
          Sign Out
        </button>
      </nav>
    </header>
  );
};

export default Header;
