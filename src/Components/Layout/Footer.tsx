import {FaXTwitter} from 'react-icons/fa6'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {SiUpwork} from 'react-icons/si'

const Footer = () => {

   
  return (
   <>
   <div className="flex flex-col space-y-5 items-center  justify-between md:flex-row md:space-x-5 md:space-y-0 md:items-start pt-10">
      {/* first div */}

      <div className="flex flex-col space-y-5 items-center md:items-start">
         <h3 className='border border-orange-300 rounded-full px-4 py-1 '>DOLLAR DASH</h3>
         <p className="text-sm font-light max-w-md">Dollar Dash is a convenient and secure mobile money platform that allows you to send, receive, and manage your money from your mobile device.It enables you to perform various financial transactions such as payments, transfers, and more, all with just a few taps.</p>
      </div>

      {/* second div */}


      <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-x-5 md:space-y-0">
         {/* div a */}
         <div className="flex flex-row justify-between  space-x-10">
            <div className="flex flex-col space-y-2">
                <a href="#Proccess">Process</a>
                <a href="#Features">Features</a>
                <a href="#Customers">Customers</a>
                <a href="#FAQs">FAQs</a>

            </div>

            <div className="flex flex-col space-y-2">
               <p>Contact</p>

               <p>info@dollardash.com</p>
               <p>+254 071 922 632</p>               
            </div>


         </div>

         {/* div b */} 

         <div className="flex flex-row  justify-center space-x-3">
            <FaXTwitter/>
            <AiFillGithub/>
            <AiFillLinkedin/>
            <AiFillFacebook/>
         </div>

         


      </div>

    </div>

     <hr  className='mt-5 mb-5'/>

     <div className='flex flex-col space-y-5 justify-between items-center md:flex-row md:space-y-0'>
      <a 
      href='https://github.com/MrMaina100'
      target="_blank"
      rel="noreferrer noopener"
       title="Open in new tab"
      >
         Designed by Derrick Maina 
      </a>

       <div className="flex flex-row space-x-3">
                 <a href="https://github.com/MrMaina100"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Open in new tab">
                  <AiFillGithub/>
                  </a> 
                  <a href=""> <FaXTwitter/> </a>

                  <a href="https://www.linkedin.com/in/derrick-maina-b20752280/"
                   target="_blank"
                  rel="noreferrer noopener"
                  title="Open in new tab"> <AiFillLinkedin/> </a>
                  <a 
                  href="https://www.upwork.com/freelancers/~01a9097cbc57a005c1"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Open in new tab"
                  >
                     <SiUpwork/>
                  </a>
                </div>

     </div>
   </>
    
  )
}
export default Footer