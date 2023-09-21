import {AiFillApple} from 'react-icons/ai'
import {BiLogoPlayStore} from 'react-icons/bi'
import CTAImage from '../../Images/undraw_investor_update_re_qnuu.svg'

const CTA = () => {

  return (
    <div className="flex justify-center pt-20 pb-20 ">

      <div className='w-[100%] rounded-2xl border border-orange-300  p-10'>
        <div className="flex flex-col items-center justify-between p-2 space-y-5 md:flex-row md:space-y-0 md:space-x-5">

          {/* first div  */}
          <div className="flex flex-col items-center  space-y-5 md:items-start ">
             <div>
             <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-orange-400 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-orange-300 backdrop-blur-3xl'>
            Join Us Now
            </span>
            </div>

            <h2 className="font-bold text-2xl md:max-w-lg">Secure your future and develop a savings habit with Dollar Dash</h2>
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


          </div>

          {/* second div with the image  */}

          <img src={CTAImage} alt="" className='w-48' />

        </div>
      
     </div>

    </div>
  )
}
export default CTA