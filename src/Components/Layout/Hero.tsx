import {AiFillApple} from 'react-icons/ai'
import {BiLogoPlayStore} from 'react-icons/bi'
import undrawImage from '../../Images/undraw_savings_re_eq4w.svg'
import avatarCommunity from '../../Images/avatars.svg'

function Hero() {
  return (
    <div className=" pt-16 pb-40  flex flex-col items-center justify-between space-y-5  md:flex-row  md:space-y-0 md:space-x-10">
      {/* firts content div */}
      <div className="flex flex-col space-y-5 items-center md:items-start">
        <div>
           <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-orange-400 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-orange-300 backdrop-blur-3xl'>
           Finance for the next generation
          </span>
        </div>
       
       <h1 className="font-bold max-w-xl md:text-5xl">The money app that isn't boring.</h1>

       <p className="font-meduim ">Glamify your bank account with Dollar Dash and start saving the fun way.</p>

       {/* the button divs */}
       <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3 items-center">

        <div>
          <button className="bg-black text-white p-5 rounded-xl flex flex-row space-x-2 border border-gray-700 ">
            <AiFillApple/>
            <p> Get it on App Store </p>

          </button>
        </div>

        <div >
          <button className="bg-white text-black p-5 rounded-xl flex flex-row space-x-2 border shadow-lg">
            <BiLogoPlayStore/>
            <p>Get it on Play Store</p>
          </button>
        </div>
       </div>

       {/* the emojis */}
       <div className="flex flex-row space-x-3 items-center ">
        <img src={avatarCommunity} alt="" className='w-20' />
        <p className='text-xs'> Over 1k Happy users</p>
       </div>

      </div>


        <img src={undrawImage} alt="" className='w-[80%] md:w-[40%] h-1/2' />
      

      

     

    </div>
  )
}
export default Hero