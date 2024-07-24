import { Link }  from "react-router-dom";


const Navbar = () => {




    return (
      <>
 
  <div className="navbar bg-black w-full ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Home</a></li>
          <li>
            <a>Courses</a>
            <ul className="p-2">
              <li><a>Online</a></li>
              <li><a>Offline</a></li>
            </ul>
          </li>
          <li><a>About Us</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl text-[#ffffff]">JACOB & Co. </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/" className="text-[#ffffff]">Home</Link></li>
        <li><Link to="/about" className="text-[#ffffff]">About Us</Link></li>
        <li><Link to="/offerings" className="text-[#ffffff]">Offerings</Link></li>
      </ul>
    </div>
    <div className="navbar-end ">
    <Link to="/ViewCart" className="btn btn-ghost text-[#ffffff]">Cart</Link>
      <Link to="/Registration" className="btn btn-ghost text-[#ffffff]">Sign Up</Link>
      <Link to="/login" className="btn btn-ghost text-[#ffffff]">Login</Link>
    </div>
  </div>
  
      </>
    )
  }
  
  export default Navbar