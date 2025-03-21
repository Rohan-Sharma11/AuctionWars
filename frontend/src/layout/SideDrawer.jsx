// import { useState } from "react";
// import { RiAuctionFill } from "react-icons/ri";
// import { MdLeaderboard, MdDashboard } from "react-icons/md";
// import { SiGooglesearchconsole } from "react-icons/si";
// import { BsFillInfoSquareFill } from "react-icons/bs";
// import { FaFacebook } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";
// import { FaFileInvoiceDollar } from "react-icons/fa6";
// import { FaEye } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@/store/slices/userSlice";
// import { Link } from "react-router-dom";

// const SideDrawer = () => {
//   const [show, setShow] = useState(false);

//   const { isAuthenticated, user } = useSelector((state) => state.user);

//   const dispatch = useDispatch();
//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <>
//       <div
//         onClick={() => setShow(!show)}
//         className="fixed right-5 top-5 bg-[#D6482B] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden"
//       >
//         <GiHamburgerMenu />
//       </div>
//       <div
//         className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${show ? "left-0" : "left-[-100%]"
//           } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}
//       >
//         <div className="relative">
//           <Link to={"/"}>
//             <h4 className="text-2xl font-semibold mb-4">
//               Auction<span className="text-[#D6482b]">Wars</span>
//             </h4>
//           </Link>
//           <ul className="flex flex-col gap-3">
//             <li>
//               <Link
//                 to={"/auctions"}
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//               >
//                 <RiAuctionFill /> Auctions
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"/leaderboard"}
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//               >
//                 <MdLeaderboard /> Leaderboard
//               </Link>
//             </li>
//             {isAuthenticated && user && user.role === "Auctioneer" && (
//               <>
//                 <li>
//                   <Link
//                     to={"/submit-commission"}
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                   >
//                     <FaFileInvoiceDollar /> Submit Commission
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to={"/create-auction"}
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                   >
//                     <IoIosCreate /> Create Auction
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to={"/view-my-auctions"}
//                     className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                   >
//                     <FaEye /> View My Auctions
//                   </Link>
//                 </li>
//               </>
//             )}
//             {isAuthenticated && user && user.role === "Super Admin" && (
//               <li>
//                 <Link
//                   to={"/dashboard"}
//                   className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                 >
//                   <MdDashboard /> Dashboard
//                 </Link>
//               </li>
//             )}
//           </ul>
//           {!isAuthenticated ? (
//             <>
//               <div className="my-4 flex gap-2">
//                 <Link
//                   to={"/sign-up"}
//                   className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   to={"/login"}
//                   className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
//                 <button className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">
//                   Logout
//                 </button>
//               </div>
//             </>
//           )}
//           <hr className="mb-4 border-t-[#d6482b]" />
//           <ul className="flex flex-col gap-3">
//             {isAuthenticated && (
//               <li>
//                 <Link
//                   to={"/me"}
//                   className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//                 >
//                   <FaUserCircle /> Profile
//                 </Link>
//               </li>
//             )}
//             <li>
//               <Link
//                 to={"/how-it-works-info"}
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//               >
//                 <SiGooglesearchconsole /> How it works
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"/about"}
//                 className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
//               >
//                 <BsFillInfoSquareFill /> About Us
//               </Link>
//             </li>
//           </ul>
//           <IoMdCloseCircleOutline
//             onClick={() => setShow(!show)}
//             className="absolute top-0 right-4 text-[28px] sm:hidden"
//           />
//         </div>

//         <div>
//           <div className="flex gap-2 items-center mb-2">
//             <Link
//               to="/"
//               className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700"
//             >
//               <FaFacebook />
//             </Link>
//             <Link
//               to="/"
//               className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500"
//             >
//               <RiInstagramFill />
//             </Link>
//           </div>
//           <Link
//             to={"/contact"}
//             className="text-stone-500 font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
//           >
//             Contact Us
//           </Link>
//           <p className="text-stone-500">&copy; AuctionWars, LLC.</p>
//           <p className="text-stone-500">
//             Degined By{" "}
//             <Link
//               to={"/"}
//               className="font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
//             >
//               Rohan Sharma
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideDrawer;




import { useState, useEffect } from "react";
import { RiAuctionFill, RiInstagramFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaFacebook, FaUserCircle, FaFileInvoiceDollar, FaEye } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ to, icon: Icon, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`group relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300 overflow-hidden
        ${isActive
          ? 'text-white bg-gradient-to-r from-[#D6482B] to-[#b8381e]'
          : 'text-gray-700 hover:bg-gray-100'
        }`}
    >
      <div className="flex items-center gap-3 relative z-10">
        <Icon className={`text-xl transition-transform duration-300 group-hover:scale-110 
          ${isActive ? 'text-white' : 'text-[#D6482B]'}`}
        />
        <span className="font-medium">{children}</span>
      </div>
      {!isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6482B] to-[#b8381e] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      )}
    </Link>
  );
};

const SideDrawer = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // Close drawer on route change
  const location = useLocation();
  useEffect(() => {
    setShow(false);
  }, [location]);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="fixed right-5 top-5 z-50 bg-gradient-to-r from-[#D6482B] to-[#b8381e] text-white p-3 rounded-xl hover:shadow-lg hover:scale-105 lg:hidden transition-all duration-300"
      >
        <GiHamburgerMenu className="text-2xl" />
      </button>

      <div className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        style={{ opacity: show ? 1 : 0, visibility: show ? 'visible' : 'hidden' }}
        onClick={() => setShow(false)}
      />

      <aside
        className={`w-full sm:w-[300px] bg-white/95 backdrop-blur-md h-full fixed top-0 z-50
          ${show ? "left-0" : "left-[-100%]"}
          transition-all duration-500 lg:left-0 border-r border-gray-200`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 relative">
            <Link to="/" className="group inline-block">
              <h4 className="text-3xl font-black">
                Auction
                <span className="bg-gradient-to-r from-[#D6482B] to-[#b8381e] bg-clip-text text-transparent group-hover:scale-105 inline-block transition-transform duration-300">
                  Wars
                </span>
              </h4>
            </Link>
            <button
              onClick={() => setShow(false)}
              className="absolute top-6 right-4 text-gray-500 hover:text-[#D6482B] hover:rotate-90 transition-all duration-300 sm:hidden"
            >
              <IoMdCloseCircleOutline className="text-3xl" />
            </button>
          </div>

          {/* Main Navigation */}
          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <nav className="space-y-2">
              <NavItem to="/auctions" icon={RiAuctionFill}>Auctions</NavItem>
              <NavItem to="/leaderboard" icon={MdLeaderboard}>Leaderboard</NavItem>

              {isAuthenticated && user?.role === "Auctioneer" && (
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                  <NavItem to="/submit-commission" icon={FaFileInvoiceDollar}>Submit Commission</NavItem>
                  <NavItem to="/create-auction" icon={IoIosCreate}>Create Auction</NavItem>
                  <NavItem to="/view-my-auctions" icon={FaEye}>View My Auctions</NavItem>
                </div>
              )}

              {isAuthenticated && user?.role === "Super Admin" && (
                <NavItem to="/dashboard" icon={MdDashboard}>Dashboard</NavItem>
              )}
            </nav>

            {/* Auth Section */}
            <div className="mt-8 px-1">
              {!isAuthenticated ? (
                <div className="flex gap-3">
                  <Link
                    to="/sign-up"
                    className="flex-1 bg-gradient-to-r from-[#D6482B] to-[#b8381e] text-white py-3 px-4 rounded-xl font-semibold text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="flex-1 border-2 border-[#DECCBE] text-gray-700 py-3 px-4 rounded-xl font-semibold text-center hover:border-[#D6482B] hover:text-[#D6482B] transition-all duration-300"
                  >
                    Login
                  </Link>
                </div>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full bg-gradient-to-r from-[#D6482B] to-[#b8381e] text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Logout
                </button>
              )}
            </div>

            {/* Secondary Nav */}
            <nav className="mt-8 space-y-2">
              {isAuthenticated && (
                <NavItem to="/me" icon={FaUserCircle}>Profile</NavItem>
              )}
              <NavItem to="/how-it-works-info" icon={SiGooglesearchconsole}>How it works</NavItem>
              <NavItem to="/about" icon={BsFillInfoSquareFill}>About Us</NavItem>
            </nav>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50/50">
            <div className="flex gap-3 mb-4">
              <Link
                to="/"
                className="p-3 text-xl bg-white rounded-xl text-[#D6482B] hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <FaFacebook />
              </Link>
              <Link
                to="/"
                className="p-3 text-xl bg-white rounded-xl text-[#D6482B] hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <RiInstagramFill />
              </Link>
            </div>
            <div className="space-y-2 text-sm">
              <Link
                to="/contact"
                className="block text-gray-600 font-medium hover:text-[#D6482B] transition-colors duration-300"
              >
                Contact Us
              </Link>
              <p className="text-gray-500">&copy; AuctionWars, LLC.</p>
              <p className="text-gray-500">
                Designed By{" "}
                <Link
                  to="/"
                  className="font-medium text-[#D6482B] hover:underline"
                >
                  Rohan Sharma
                </Link>
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideDrawer;