import { Accordion } from '@mantine/core';

const FAQs = () => {
  return (
    <div className="flex flex-col  space-y-10 pt-20">

      {/* first div */}
      <div className="flex flex-col items-center space-y-5">
         
          <div>
            <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-orange-400 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-orange-300 backdrop-blur-3xl'>
            FAQs
          </span>
          </div>
          <h1 className="font-bold text-3xl">Have a Question ?</h1>


    </div>


    {/* second div with the accordian */}
    <div className="md:mx-60">

      <Accordion defaultValue='customization' transitionDuration={1000}>
         <Accordion.Item value='what is'>
            <Accordion.Control>What is Dollar Dash?</Accordion.Control>
            <Accordion.Panel>Dollar Dash is a convenient and secure mobile money platform that allows you to send, receive, and manage your money from your mobile device. It enables you to perform various financial transactions such as payments, transfers, and more, all with just a few taps.</Accordion.Panel>

         </Accordion.Item>
          <Accordion.Item value='sign up'>
            <Accordion.Control>How can I sign up for Dollar Dash?</Accordion.Control>
            <Accordion.Panel>Signing up for Dollar Dash is easy! Simply download our mobile app from the App Store or Google Play Store, follow the registration process, and provide the required information. You'll be up and running in no time.</Accordion.Panel>

         </Accordion.Item>

          <Accordion.Item value='money safe'>
            <Accordion.Control> Is Dollar Dash safe and secure?</Accordion.Control>
            <Accordion.Panel> Yes, your security is our top priority. Dollar Dash employs robust encryption and security measures to protect your personal and financial information. We also regularly monitor transactions to detect and prevent any suspicious activity.</Accordion.Panel>

         </Accordion.Item>

          <Accordion.Item value='use international'>
            <Accordion.Control>Can I use Dollar Dash internationally?</Accordion.Control>
            <Accordion.Panel>Yes, Dollar Dash supports international transactions. You can send money to friends and family abroad or make payments for international purchases. Please check our international fees and exchange rates for details.</Accordion.Panel>

         </Accordion.Item>

          <Accordion.Item value='Link'>
            <Accordion.Control>Can I link my bank account to Dollar Dash?</Accordion.Control>
            <Accordion.Panel> Yes, you can link your bank account to Dollar Dash for easy transfers and withdrawals. Our platform supports a variety of banks, and the linking process is straightforward.</Accordion.Panel>

         </Accordion.Item>

      </Accordion>
    </div>
    </div>
  )
}
export default FAQs