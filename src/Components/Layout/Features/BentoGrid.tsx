
import upgradeSvg from '../../../Images/undraw_transfer_money_re_6o1h.svg'
import twoFifty from '../../../Images/$250K.svg'
import treasure from '../../../Images/undraw_treasure_of-9-i.svg'
import avatars from '../../../Images/avatars.svg'
import mobilepay from '../../../Images/undraw_mobile_pay_re_sjb8.svg'
import savings from '../../../Images/undraw_vault_re_s4my.svg'
import crypto from '../../../Images/undraw_bitcoin_p2p_re_1xqa.svg'


const BentoGrid = () => {
  return (
    <div>
       <div className="grid grid-rows-[192px] gap-4 md:grid-cols-[repeat(3,310px)]  pt-10 pb-10">
        {/* first div */}
        <div className="bento-grids">
          <img src={upgradeSvg} alt="" className='w-20' />
          <h3>Upgrade and Expand</h3>
          <p className='text-sm '>Explore strategies to make the most of your money.</p>
        </div>

        {/* second div */}
        <div className="bento-grids">
          <img src={twoFifty} alt="" />
          <p>FCDIC insurance saving</p>

        </div>

        {/* third div */}
        <div className="bento-grids">
          <img src={treasure} alt=""  className='w-20'/>
          <h3>Find Rare Decorations</h3>
          <p className='text-sm'>Discover rare decorations that you won’t want to let go of</p>
        </div>

        {/* third spanning div */}
        <div className="bento-grids md:col-span-2">
          <img src={avatars} alt="" className='w-60' />
          <h3>Peer-to-Peer Payments</h3>
          <p>Easily transfer money to friends and family.</p>

        </div>

        {/* fourth normal div */}
        <div className="bento-grids">
          <img src={mobilepay} alt="" className='w-20' />
          <h3>Mobile Wallet Integration</h3>
          <p className='text-sm'>Seamlessly integrate popular mobile wallets like Apple Pay, Google Pay, Samsung Pay, and others</p>
        </div>

        {/* fifth div */}
        <div className="bento-grids">
          <img src={savings} alt="" className='w-20' />
          <h3>Start Saving Today</h3>
          <p className='text-sm'>Begin your journey to financial security and Learn how to save more effectively.</p>
        </div>


        {/* sixth span div */}
        <div className="bento-grids md:col-span-2">
          <img src={crypto} alt=""   className='w-28'/>
          <h3>Digital Currency Revolution</h3>
          <p className="text-sm">
            Join the revolution in the world of finance.Discover the power of blockchain behind digital currencies and Store your digital assets securely.
          </p>
        </div>

      </div>
    </div>
  )
}
export default BentoGrid