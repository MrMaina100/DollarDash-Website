import BentoGrid from "./BentoGrid"
const Features = () => {
  return (
    <div id="features" className="flex flex-col space-y-5 items-center justify-center text-center md:pt-20">
      {/* first div */}
      <div className="flex flex-col space-y-5">
         <div>
            <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-orange-400 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-orange-300 backdrop-blur-3xl'>
           Features
          </span>

         </div>
         

          <h2 className="font-bold text-4xl">More Than just a Finance App</h2>
      </div>

      {/* bento grids */}
      <BentoGrid/>
     

      

    </div>
  )
}
export default Features
