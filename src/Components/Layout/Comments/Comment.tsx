import Marquues from "./Marquues"
const Comment = () => {
  return (
    <div className="flex flex-col space-y-5 text-center pt-10 ">
      {/* first div */}
      <div className="flex flex-col space-y-5 md:pb-10 ">
          <div>
            <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-orange-400 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-orange-300 backdrop-blur-3xl'>
            Wall of love
          </span>
         </div>

          <h1 className="font-bold text-4xl">What people are saying</h1>

      </div>

      {/* second div where a marquee goes*/}
      <Marquues/>

    </div>
  )
}
export default Comment