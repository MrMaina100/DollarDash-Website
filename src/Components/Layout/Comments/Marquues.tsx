import avatar1 from '../../../Images/avatars/avatar-1.svg'
import avatar2 from '../../../Images/avatars/avatar-2.svg'
import avatar3 from '../../../Images/avatars/avatar-3.svg'
import avatar4 from '../../../Images/avatars/avatar-4.svg'
import avatar5 from '../../../Images/avatars/avatar-5.svg'
import avatar6 from '../../../Images/avatars/avatar-6.svg'
import Marquee from 'react-fast-marquee'
import {useState, useEffect } from 'react'

type DataType = {
   id:number,
   name:String,
   comments: String,
   age: Number,
   img: string

} []


const data1:DataType = [
  {  
    id:1,
    name: 'Collins',
    comments:'Dollar Dash has been a game-changer for me! Managing my finances has never been easier. The instant transfer feature is a lifesaver, and I love the sleek design. Highly recommended!"',
    age: 24,
    img:avatar1
  },
   {
    id:2,
    name: 'Fifi',
    comments:"I've tried a bunch of money apps, but Dollar Dash is hands down my favorite. It's so intuitive, and the security features make me feel safe. Plus, their customer support is top-notch!",
    age: 26,
    img:avatar2
  },
   {
    id:3,
    name: 'Jeff',
    comments: "Dollar Dash is perfect for splitting bills with friends. No more awkward IOUs! The group payment feature is genius, and it's saved me so much hassle.",
    age: 29,
    img:avatar3
  },
 

]

const data2:DataType = [
  { id:1,
    name:'Choge',
    comments:"I've been using Dollar Dash for months, and I've seen my savings grow. The automatic savings feature is fantastic, and it's helped me build a rainy day fund effortlessly.",
    age:34,
    img:avatar4
  },
  {
    id:2,
    name:'Mark',
    comments: "I've recommended Dollar Dash to all my friends. It's the easiest way to send money to family abroad. The low transfer fees are a huge plus. Dollar Dash is a winner!",
    age:24,
    img:avatar5
  },
  {
    id:3,
    name:'William',
    comments:"As a freelancer, Dollar Dash is a lifesaver for keeping track of my income and expenses. The categorization tools are a godsend for tax season. Thanks, Dollar Dash!",
    age:25,
    img:avatar6
  },
]
   

const Marquues = () => {
  
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to update isMobileScreen state when the window is resized
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='flex flex-col space-y-4'>

      {isMobileScreen ? (
        <div className='grid gap-4 grid-cols-1'>
          {data1.map((data) => (
            <div
              key={data.id}
              className='marquee-items'
            >
              <p>{data.comments}</p>
              <div className="flex flex-row space-x-2">
                <img src={data.img} alt="" className='w-10 h-10 rounded-full' />
                <div className="flex flex-col space-y-2">
                  {data.name}
                  <p>{data.age.toString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Show the first marquee with rolling effect on larger screens */
        <div>
          <Marquee  speed={30}> 
            <div className='grid gap-4  md:grid-cols-[repeat(3,400px)]'>
                {data1.map((data, index) => (
               <div
                key={data.id}
                className={`marquee-items ${index === data1.length - 1 ? 'last-item' : ''}`}
                >
                <p>{data.comments}</p>
                <div className="flex flex-row space-x-2">
                  <img src={data.img} alt="" className='w-10 h-10 rounded-full' />
                  <div className="flex flex-col space-y-2">
                    {data.name}
                    <p>{data.age.toString()}</p>
                  </div>
                </div>
              </div>
            ))}

            </div>
          
          </Marquee>
        </div>
      )}

      {/* Show the second marquee only on larger screens */}
      {!isMobileScreen && (
        <div>
          <Marquee direction='right' speed={30}>
            <div  className='grid gap-4  md:grid-cols-[repeat(3,400px)] '>
              {data2.map((data, index) => (
              <div
                key={data.id}
                className={`marquee-items ${index === data1.length - 1 ? 'last-item' : ''}`}
              >
                <p>{data.comments}</p>
                <div className="flex flex-row space-x-2">
                  <img src={data.img} alt="" className='w-10 h-10 rounded-full' />
                  <div className="flex flex-col space-y-2">
                    {data.name}
                    <p>{data.age.toString()}</p>
                  </div>
                </div>
              </div>
            ))}

            </div>
            
          </Marquee>
        </div>
      )}
    </div>
  );
};

export default Marquues;