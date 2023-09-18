import DownloadIcon from '../../Images/ICONS/Down arrow.svg'
import setupIcon from '../../Images/ICONS/Setting.svg'
import DespositIcon from '../../Images/ICONS/Wallet.svg'
import stashIcon from '../../Images/ICONS/Diamond.svg'
import ProgressIcon from '../../Images/ICONS/Progress.svg'
import rewardIcon from '../../Images/ICONS/Reward.svg'

const Process = () => {


 type mappingArrayTypes = {
   id:number,
   img: string,
   h1:string,
   text:string
 } []

   const MappingArray:mappingArrayTypes = [
      {
         id:1,
         img:DownloadIcon,
         h1:'Download',
         text:'Download Dollar Dash from the App Store or Google Play Store.'
      },
      {
         id:2,
         img: setupIcon,
         h1:'Setup',
         text:'Create your dollar dash by creating an account, verifying your identity.'
      },
         {
         id:3,
         img: DespositIcon,
         h1:'Deposit',
         text:'Deposit money into your Dollar Dash vault. Your vault is FDIC insured up to $250,000.'
      },
      {
         id:4,
         img: stashIcon,
         h1:'Stash',
         text:'Hit the shop, open your crate, and start stashin’ to decorate your life.'
      },
       {
         id:5,
         img: ProgressIcon,
         h1:'Progress',
         text:'Start your journey toward financial growth, prosperity and advancing your account'
      },
         {
         id:6,
         img: rewardIcon,
         h1:'Rewards',
         text:'Collect rewards by keeping up your daily streak and sharing money with friends.'
      },


   ]

  
    
   

   
  return (
    <div className="flex flex-col space-y-5 items-center  text-center pt-10">
      {/* first div */}

      <div className="flex flex-col space-y-5">
          <div>
            <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-orange-400 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-orange-300 backdrop-blur-3xl'>
            How it works
          </span>

         </div>

         <h2 className="font-bold text-2xl">
            Getting started with Dollar Dash is easy.
         </h2>
      </div>


      {/* second flexings divs  */}

      <div className="pb-10 grid gap-12 grid-rows-[192px] md:grid-cols-[repeat(3,320px)] md:pt-16  ">

         {MappingArray.map((divs)=>(
            <div key={divs.id} className='flex flex-col space-y-5 items-center'>
               <img src={divs.img} alt=""  className='w-10'/>
               <h3>{divs.h1}</h3>
               <p>{divs.text}</p>


            </div>

         ))}
      </div>

    </div>
  )
}
export default Process