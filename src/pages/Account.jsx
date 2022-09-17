import BgImg from '../assets/img/signup.jpg';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <section>
      <div className="relative flex w-full h-full">
        <img
          className="absolute w-full h-[150px] sm:h-[250px] md:h-[300px] object-cover"
          src={BgImg}
          alt=""
        />
        <div className="bg-black/60 w-full h-[150px] sm:h-[250px] md:h-[300px] z-10"></div>
        <div className="h-[150px] sm:h-[250px] md:h-[300px] left-[5%] absolute flex justify-center items-center z-20">
          <h1 className="text-3xl md:text-5xl font-bold">My Account</h1>
        </div>
      </div>
      <SavedShows />
    </section>
  );
};

export default Account;
