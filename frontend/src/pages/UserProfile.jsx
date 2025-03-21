// import Spinner from "@/custom-components/Spinner";
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const UserProfile = () => {
//   const { user, isAuthenticated, loading } = useSelector((state) => state.user);
//   const navigateTo = useNavigate();
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [isAuthenticated]);
//   return (
//     <>
//       <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start">
//         {loading ? (
//           <Spinner />
//         ) : (
//           <>
//             <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
//               <img
//                 src={user.profileImage?.url}
//                 alt="/imageHolder.jpg"
//                 className="w-36 h-36 rounded-full"
//               />

//               <div className="mb-6 w-full">
//                 <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Username
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.userName}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Email
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.email}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Phone
//                     </label>
//                     <input
//                       type="number"
//                       defaultValue={user.phone}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Address
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.address}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Role
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.role}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Joined On
//                     </label>
//                     <input
//                       type="text"
//                       defaultValue={user.createdAt?.substring(0, 10)}
//                       className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                       disabled
//                     />
//                   </div>
//                 </div>
//               </div>

//               {user.role === "Auctioneer" && (
//                 <div className="mb-6 w-full">
//                   <h3 className="text-xl font-semibold mb-4">
//                     Payment Details
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Bank Name
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={user.paymentMethods.bankTransfer.bankName}
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Bank Account (IBAN)
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={
//                           user.paymentMethods.bankTransfer.bankAccountNumber
//                         }
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         User Name On Bank Account
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={
//                           user.paymentMethods.bankTransfer.bankAccountName
//                         }
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Easypaisa Account Number
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={
//                           user.paymentMethods.easypaisa.easypaisaAccountNumber
//                         }
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">
//                         Paypal Email
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={user.paymentMethods.paypal.paypalEmail}
//                         className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                         disabled
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="mb-6 w-full">
//                 <h3 className="text-xl font-semibold mb-4">
//                   Other User Details
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {user.role === "Auctioneer" && (
//                     <>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Unpaid Commissions
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.unpaidCommission}
//                           className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                     </>
//                   )}
//                   {user.role === "Bidder" && (
//                     <>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Auctions Won
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.auctionsWon}
//                           className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Money Spent
//                         </label>
//                         <input
//                           type="text"
//                           defaultValue={user.moneySpent}
//                           className="w-ful mt-1 p-2 border-gray-300 rounded-md focus:outline-none"
//                           disabled
//                         />
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </section>
//     </>
//   );
// };

// export default UserProfile;
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "@/custom-components/Spinner";
import { User, Wallet, Clock, MapPin, Phone, Mail, BadgeCheck } from "lucide-react";

const UserProfile = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  const InfoField = ({ label, value, icon: Icon }) => (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-blue-600" />
        <label className="text-sm font-medium text-gray-600">{label}</label>
      </div>



      <input
        type="text"
        defaultValue={value}
        className="w-full bg-white px-3 py-2 rounded-md border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        disabled
      />
    </div>
  );

  if (loading) return <Spinner />;

  return (
    <section className="w-full min-h-screen p-6 lg:pl-[320px] bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <img
                src={user.profileImage?.url}
                alt={user.userName}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              {user.role === "Auctioneer" && (
                <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Auctioneer
                </div>
              )}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-900">{user.userName}</h1>
              <p className="text-gray-500">Member since {user.createdAt?.substring(0, 10)}</p>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-blue-600" />
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField label="Username" value={user.userName} icon={User} />
              <InfoField label="Email" value={user.email} icon={Mail} />
              <InfoField label="Phone" value={user.phone} icon={Phone} />
              <InfoField label="Address" value={user.address} icon={MapPin} />
              <InfoField label="Role" value={user.role} icon={BadgeCheck} />
              <InfoField label="Joined On" value={user.createdAt?.substring(0, 10)} icon={Clock} />
            </div>
          </div>
        </div>

        {/* Payment Details for Auctioneers */}
        {user.role === "Auctioneer" && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <Wallet className="w-5 h-5 text-blue-600" />
                Payment Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoField
                  label="Bank Name"
                  value={user.paymentMethods.bankTransfer.bankName}
                  icon={Wallet}
                />
                <InfoField
                  label="Bank Account (IBAN)"
                  value={user.paymentMethods.bankTransfer.bankAccountNumber}
                  icon={Wallet}
                />
                <InfoField
                  label="Account Name"
                  value={user.paymentMethods.bankTransfer.bankAccountName}
                  icon={User}
                />
                <InfoField
                  label="Easypaisa Account"
                  value={user.paymentMethods.easypaisa.easypaisaAccountNumber}
                  icon={Wallet}
                />
                <InfoField
                  label="Paypal Email"
                  value={user.paymentMethods.paypal.paypalEmail}
                  icon={Mail}
                />
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <BadgeCheck className="w-5 h-5 text-blue-600" />
              Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.role === "Auctioneer" && (
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-medium mb-2">Unpaid Commissions</h3>
                  <p className="text-3xl font-bold">Rs.{user.unpaidCommission}</p>
                </div>
              )}
              {user.role === "Bidder" && (
                <>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
                    <h3 className="text-lg font-medium mb-2">Auctions Won</h3>
                    <p className="text-3xl font-bold">{user.auctionsWon}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
                    <h3 className="text-lg font-medium mb-2">Money Spent</h3>
                    <p className="text-3xl font-bold">Rs.{user.moneySpent}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;