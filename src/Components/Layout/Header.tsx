import ToggleSwitch from "../ToogleSwitch"
const Header = () => {
  return (
    <div className="flex justify-between py-4 items-center" >
      <h3>DOLLAR DASH</h3>
      <div className="hidden md:flex md:flex-row  md:space-x-16">
        <a href="#Proccess">Process</a>
        <a href="#Features">Features</a>
        <a href="#Customers">Customers</a>
        <a href="#FAQs">FAQs</a>

      </div>
      <ToggleSwitch/>


    </div>
  )
}
export default Header