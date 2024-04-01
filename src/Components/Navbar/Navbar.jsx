import { logo } from "../Assets"
import { cart_icon } from "../Assets"

const Navbar = () => {
  return (
    <div className=''>
       <div className="nav-logo">
         <img src={logo} alt="logo" />
         <p>SHOPPER</p>
       </div>
        <ul className="">
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div>
            <button>Login</button>
            <img src={cart_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar