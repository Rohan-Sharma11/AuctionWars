// import Spinner from "@/custom-components/Spinner";
// import { getAuctionDetail } from "@/store/slices/auctionSlice";
// import { placeBid } from "@/store/slices/bidSlice";
// import React, { useEffect, useState } from "react";
// import { FaGreaterThan } from "react-icons/fa";
// import { RiAuctionFill } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const AuctionItem = () => {
//   const { id } = useParams();
//   const { loading, auctionDetail, auctionBidders } = useSelector(
//     (state) => state.auction
//   );
//   const { isAuthenticated } = useSelector((state) => state.user);

//   const navigateTo = useNavigate();
//   const dispatch = useDispatch();

//   const [amount, setAmount] = useState(0);
//   const handleBid = () => {
//     const formData = new FormData();
//     formData.append("amount", amount);
//     dispatch(placeBid(id, formData));
//     dispatch(getAuctionDetail(id));
//   };

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigateTo("/");
//     }
//     if (id) {
//       dispatch(getAuctionDetail(id));
//     }
//   }, [isAuthenticated]);
//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
//         <div className="text-[16px] flex flex-wrap gap-2 items-center">
//           <Link
//             to="/"
//             className="font-semibold transition-all duration-300 hover:text-[#D6482B]"
//           >
//             Home
//           </Link>
//           <FaGreaterThan className="text-stone-400" />
//           <Link
//             to={"/auctions"}
//             className="font-semibold transition-all duration-300 hover:text-[#D6482B]"
//           >
//             Auctions
//           </Link>
//           <FaGreaterThan className="text-stone-400" />
//           <p className="text-stone-600">{auctionDetail.title}</p>
//         </div>
//         {loading ? (
//           <Spinner />
//         ) : (
//           <div className="flex gap-4 flex-col lg:flex-row">
//             <div className="flex-1 flex flex-col gap-3">
//               <div className="flex gap-4 flex-col lg:flex-row">
//                 <div className="bg-white w-[100%] lg:w-40 lg:h-40 flex justify-center items-center p-5">
//                   <img
//                     src={auctionDetail.image?.url}
//                     alt={auctionDetail.title}
//                   />
//                 </div>
//                 <div className="flex flex-col justify-around pb-4">
//                   <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
//                     {auctionDetail.title}
//                   </h3>
//                   <p className="text-xl font-semibold">
//                     Condition:{" "}
//                     <span className="text-[#D6482B]">
//                       {auctionDetail.condition}
//                     </span>
//                   </p>
//                   <p className="text-xl font-semibold">
//                     Minimum Bid:{" "}
//                     <span className="text-[#D6482B]">
//                       Rs.{auctionDetail.startingBid}
//                     </span>
//                   </p>
//                 </div>
//               </div>
//               <p className="text-xl w-fit font-bold">
//                 Auction Item Description
//               </p>
//               <hr className="my-2 border-t-[1px] border-t-stone-700" />
//               {auctionDetail.description &&
//                 auctionDetail.description.split(". ").map((element, index) => {
//                   return (
//                     <li key={index} className="text-[18px] my-2">
//                       {element}
//                     </li>
//                   );
//                 })}
//             </div>
//             <div className="flex-1">
//               <header className="bg-stone-200 py-4 text-[24px] font-semibold px-4">
//                 BIDS
//               </header>
//               <div className="bg-white px-4 min-h-fit lg:min-h-[650px]">
//                 {auctionBidders &&
//                   new Date(auctionDetail.startTime) < Date.now() &&
//                   new Date(auctionDetail.endTime) > Date.now() ? (
//                   auctionBidders.length > 0 ? (
//                     auctionBidders.map((element, index) => {
//                       return (
//                         <div
//                           key={index}
//                           className="py-2 flex items-center justify-between"
//                         >
//                           <div className="flex items-center gap-4">
//                             <img
//                               src={element.profileImage}
//                               alt={element.userName}
//                               className="w-12 h-12 rounded-full my-2 hidden md:block"
//                             />
//                             <p className="text-[18px] font-semibold">
//                               {element.userName}
//                             </p>
//                           </div>
//                           {index === 0 ? (
//                             <p className="text-[20px] font-semibold text-green-600">
//                               1st
//                             </p>
//                           ) : index === 1 ? (
//                             <p className="text-[20px] font-semibold text-blue-600">
//                               2nd
//                             </p>
//                           ) : index === 2 ? (
//                             <p className="text-[20px] font-semibold text-yellow-600">
//                               3rd
//                             </p>
//                           ) : (
//                             <p className="text-[20px] font-semibold text-gray-600">
//                               {index + 1}th
//                             </p>
//                           )}
//                         </div>
//                       );
//                     })
//                   ) : (
//                     <p className="text-center text-gray-500 py-4">
//                       No bids for this auction
//                     </p>
//                   )
//                 ) : Date.now() < new Date(auctionDetail.startTime) ? (
//                   <img
//                     src="/notStarted.png"
//                     alt="not-started"
//                     className="w-full max-h-[650px]"
//                   />
//                 ) : (
//                   <img
//                     src="/auctionEnded.png"
//                     alt="ended"
//                     className="w-full max-h-[650px]"
//                   />
//                 )}
//               </div>

//               <div className="bg-[#D6482B] py-4 text-[16px] md:text-[24px] font-semibold px-4 flex items-center justify-between">
//                 {Date.now() >= new Date(auctionDetail.startTime) &&
//                   Date.now() <= new Date(auctionDetail.endTime) ? (
//                   <>
//                     <div className="flex gap-3 flex-col sm:flex-row sm:items-center">
//                       <p className="text-white">Place Bid</p>
//                       <input
//                         type="number"
//                         className="w-32 focus:outline-none md:text-[20px] p-1"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                       />
//                     </div>
//                     <button
//                       className="p-4 text-white bg-black rounded-full transition-all duration-300 hover:bg-[#222]"
//                       onClick={handleBid}
//                     >
//                       <RiAuctionFill />
//                     </button>
//                   </>
//                 ) : new Date(auctionDetail.startTime) > Date.now() ? (
//                   <p className="text-white font-semibold text-xl">
//                     Auction has not started yet!
//                   </p>
//                 ) : (
//                   <p className="text-white font-semibold text-xl">
//                     Auction has ended!
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default AuctionItem;




import Spinner from "@/custom-components/Spinner";
import { getAuctionDetail } from "@/store/slices/auctionSlice";
import { placeBid } from "@/store/slices/bidSlice";
import { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { RiAuctionFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const AuctionItem = () => {
  const { id } = useParams();
  const { loading, auctionDetail, auctionBidders } = useSelector(
    (state) => state.auction
  );
  const { isAuthenticated } = useSelector((state) => state.user);
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleBid = () => {
    if (amount < auctionDetail.startingBid) {
      setError(`Bid must be at least Rs.${auctionDetail.startingBid}`);
      return;
    }
    const formData = new FormData();
    formData.append("amount", amount);
    dispatch(placeBid(id, formData));
    dispatch(getAuctionDetail(id));
    setError("");
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
    if (id) {
      dispatch(getAuctionDetail(id));
    }
  }, [isAuthenticated]);

  const StatusBadge = ({ index }) => {
    const badges = {
      0: "bg-green-100 text-green-800 border-green-200",
      1: "bg-blue-100 text-blue-800 border-blue-200",
      2: "bg-yellow-100 text-yellow-800 border-yellow-200"
    };

    return (
      <div className={`px-4 py-1 rounded-full border ${badges[index] || "bg-gray-100 text-gray-800 border-gray-200"}`}>
        {index === 0 ? "1st" : index === 1 ? "2nd" : index === 2 ? "3rd" : `${index + 1}th`}
      </div>
    );
  };

  return (
    <section className="w-full min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 pt-20 lg:pl-[320px]">
      {/* Breadcrumb */}
      <nav className="flex items-center flex-wrap gap-2 text-sm mb-8 bg-white p-4 rounded-lg shadow-sm">
        <Link to="/" className="font-medium hover:text-[#D6482B] transition-colors">
          Home
        </Link>
        <FaGreaterThan className="text-gray-400 w-3 h-3" />
        <Link to="/auctions" className="font-medium hover:text-[#D6482B] transition-colors">
          Auctions
        </Link>
        <FaGreaterThan className="text-gray-400 w-3 h-3" />
        <span className="text-gray-600 truncate max-w-[200px]">{auctionDetail.title}</span>
      </nav>

      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Item Details Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={auctionDetail.image?.url}
                      alt={auctionDetail.title}
                      className="max-w-[300px] h-auto object-contain"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 hover:text-[#D6482B] transition-colors">
                      {auctionDetail.title}
                    </h1>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700">Condition:</span>
                        <span className="text-[#D6482B] font-medium">{auctionDetail.condition}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-700">Starting Bid:</span>
                        <span className="text-[#D6482B] font-medium">Rs.{auctionDetail.startingBid}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="border-t border-gray-100">
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-gray-900">Description</h2>
                  <div className="space-y-3">
                    {auctionDetail.description?.split(". ").map((element, index) => (
                      <div key={index} className="flex items-start gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <span className="text-[#D6482B] mt-1">•</span>
                        <p>{element}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Bids Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-gray-100 to-white px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Current Bids</h2>
              </div>

              <div className="p-4 space-y-3">
                {auctionBidders &&
                  new Date(auctionDetail.startTime) < Date.now() &&
                  new Date(auctionDetail.endTime) > Date.now() ? (
                  auctionBidders.length > 0 ? (
                    auctionBidders.map((element, index) => (
                      <div
                        key={index}
                        className="group bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={element.profileImage}
                              alt={element.userName}
                              className="w-12 h-12 rounded-full object-cover border-2 border-white group-hover:border-[#D6482B] transition-colors"
                            />
                            <div>
                              <p className="font-semibold group-hover:text-[#D6482B] transition-colors">
                                {element.userName}
                              </p>
                              <p className="text-sm text-gray-500">
                                Bid: Rs.{element.amount}
                              </p>
                            </div>
                          </div>
                          <StatusBadge index={index} />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No bids for this auction yet
                    </div>
                  )
                ) : (
                  <div className="flex justify-center">
                    {Date.now() < new Date(auctionDetail.startTime) ? (
                      <img src="/notStarted.png" alt="not-started" className="max-w-full h-auto rounded-lg" />
                    ) : (
                      <img src="/auctionEnded.png" alt="ended" className="max-w-full h-auto rounded-lg" />
                    )}
                  </div>
                )}
              </div>

              {/* Bid Input Section */}
              <div className="bg-gradient-to-r from-[#D6482B] to-[#b8381e] p-6">
                {Date.now() >= new Date(auctionDetail.startTime) &&
                  Date.now() <= new Date(auctionDetail.endTime) ? (
                  <div className="space-y-4">
                    {error && (
                      <div className="bg-red-100 text-red-800 p-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="flex-1 min-w-[200px]">
                        <input
                          type="number"
                          className="w-full px-4 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#D6482B] transition-all"
                          placeholder="Enter bid amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                      <button
                        onClick={handleBid}
                        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all transform hover:scale-105"
                      >
                        <RiAuctionFill className="text-xl" />
                        <span className="font-medium">Place Bid</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-white text-center text-xl font-medium">
                    {new Date(auctionDetail.startTime) > Date.now()
                      ? "Auction has not started yet!"
                      : "Auction has ended!"}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AuctionItem;