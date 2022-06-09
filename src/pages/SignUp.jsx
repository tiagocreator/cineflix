import BgImg from '../assets/img/signup.jpg'

const SignUp = () => {
  return (
    <div className="w-full h-screen text-[#fff]">
      <img className="hidden sm:block absolute w-full h-full object-cover" src={BgImg} alt=''/>
    </div>
  )
}

export default SignUp