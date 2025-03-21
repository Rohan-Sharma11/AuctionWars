// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Card = ({ imgSrc, title, startingBid, startTime, endTime, id }) => {
//   const calculateTimeLeft = () => {
//     const now = new Date();
//     const startDifference = new Date(startTime) - now;
//     const endDifference = new Date(endTime) - now;
//     let timeLeft = {};

//     if (startDifference > 0) {
//       timeLeft = {
//         type: "Starts In:",
//         days: Math.floor(startDifference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((startDifference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((startDifference / 1000 / 60) % 60),
//         seconds: Math.floor((startDifference / 1000) % 60),
//       };
//     } else if (endDifference > 0) {
//       timeLeft = {
//         type: "Ends In:",
//         days: Math.floor(endDifference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((endDifference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((endDifference / 1000 / 60) % 60),
//         seconds: Math.floor((endDifference / 1000) % 60),
//       };
//     }
//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     });
//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   const formatTimeLeft = ({ days, hours, minutes, seconds }) => {
//     const pad = (num) => String(num).padStart(2, "0");
//     return `(${days} Days) ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
//   };

//   return (
//     <>
//       <Link
//         to={`/auction/item/${id}`}
//         className="flex-grow basis-full bg-white rounded-md group sm:basis-56 lg:basis-60 2xl:basis-80"
//       >
//         <img
//           src={imgSrc}
//           alt={title}
//           className="w-full aspect-[4/3] m-auto md:p-12"
//         />
//         <div className="px-2 pt-4 pb-2">
//           <h5 className="font-semibold text-[18px] group-hover:text-[#d6482b] mb-2">
//             {title}
//           </h5>
//           {startingBid && (
//             <p className="text-stone-600 font-light">
//               Starting Bid:{" "}
//               <span className="text-[#fdba88] font-bold ml-1">
//                 {startingBid}
//               </span>
//             </p>
//           )}
//           <p className="text-stone-600 font-light">
//             {timeLeft.type}
//             {Object.keys(timeLeft).length > 1 ? (
//               <span className="text-[#fdba88] font-bold ml-1">
//                 {formatTimeLeft(timeLeft)}
//               </span>
//             ) : (
//               <span className="text-[#fdba88] font-bold ml-1">Time's up!</span>
//             )}
//           </p>
//         </div>
//       </Link>
//     </>
//   );
// };

// export default Card;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, title, startingBid, startTime, endTime, id }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const startDifference = new Date(startTime) - now;
    const endDifference = new Date(endTime) - now;
    let timeLeft = {};

    if (startDifference > 0) {
      timeLeft = {
        type: "Starts In:",
        days: Math.floor(startDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((startDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((startDifference / 1000 / 60) % 60),
        seconds: Math.floor((startDifference / 1000) % 60),
      };
    } else if (endDifference > 0) {
      timeLeft = {
        type: "Ends In:",
        days: Math.floor(endDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((endDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((endDifference / 1000 / 60) % 60),
        seconds: Math.floor((endDifference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    });
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-sm sm:text-base lg:text-lg font-bold text-[#D6482B]">{value}</span>
      <span className="text-[10px] sm:text-xs text-gray-500">{label}</span>
    </div>
  );

  return (
    <Link
      to={`/auction/item/${id}`}
      className="group w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.75rem)] xl:w-[calc(25%-0.75rem)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <img
            src={imgSrc}
            alt={title}
            className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          {/* Price Tag */}
          {startingBid && (
            <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
              <span className="text-[#D6482B] text-sm sm:text-base font-bold">Rs.{startingBid}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          <h5 className="font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 text-gray-800 group-hover:text-[#D6482B] transition-colors duration-300 line-clamp-2">
            {title}
          </h5>

          {/* Timer Section */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm font-medium text-gray-600">
              {timeLeft.type}
            </p>
            {Object.keys(timeLeft).length > 1 ? (
              <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                <div className="flex justify-between">
                  <TimeUnit value={timeLeft.days} label="Days" />
                  <TimeUnit value={String(timeLeft.hours).padStart(2, '0')} label="Hours" />
                  <TimeUnit value={String(timeLeft.minutes).padStart(2, '0')} label="Mins" />
                  <TimeUnit value={String(timeLeft.seconds).padStart(2, '0')} label="Secs" />
                </div>
              </div>
            ) : (
              <div className="bg-red-50 text-red-600 rounded-lg p-2 sm:p-3 text-center text-sm sm:text-base font-bold">
                Time's up!
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className={`p-3 sm:p-4 pt-0 transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button className="w-full bg-gradient-to-r from-[#D6482B] to-[#b8381e] text-white py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium hover:shadow-lg transition-shadow duration-300">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;