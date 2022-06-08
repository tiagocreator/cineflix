const Header = () => {
  return (
    <header className="w-full flex items-center justify-between py-[6px] px-[16px] md:px-[32px] z-[100]">
      <h1 className="text-red-600 text-[2.4rem] font-bold cursor-pointer bg-[#000]">
        CINEFLIX
      </h1>
      <nav className="text-[1rem]">
        <button className="border border-[#d4d4d4] text-[#fff] py-[7px] px-[18px]">Sign In</button>
        <button className="bg-red-600 py-[7px] px-[18px] cursor-pointer font-bold text-[white] ml-[25px]">
          Join Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
