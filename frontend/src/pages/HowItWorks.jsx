import React from "react";
import {
  FaUser,
  FaGavel,
  FaEnvelope,
  FaDollarSign,
  FaFileInvoice,
  FaRedo,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUser />,
      title: "User Registration",
      description:
        "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
    },
    {
      icon: <FaGavel />,
      title: "Role Selection",
      description:
        'Users can register as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
    },
    {
      icon: <FaEnvelope />,
      title: "Winning Bid Notification",
      description:
        "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, Easypaisa, and PayPal.",
    },
    {
      icon: <FaDollarSign />,
      title: "Commission Payment",
      description:
        "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Proof of Payment",
      description:
        "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
    },
    {
      icon: <FaRedo />,
      title: "Reposting Items",
      description:
        "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
    },
  ];

  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-2xl min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text leading-tight">
            Discover How AuctionWars Operates
          </h1>
          <p className="text-gray-600 text-xl mt-4">
            Follow these simple steps to start your auction journey
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-300 hidden lg:block"></div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((element, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-xl p-6 lg:pl-24 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Step Number and Icon */}
                  <div className="absolute left-0 top-6 hidden lg:flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {element.icon}
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="lg:hidden mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white text-xl">
                      {element.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                      {index + 1}. {element.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {element.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-8 top-10 w-1 h-1 bg-orange-500 rounded-full hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center p-6 bg-gray-50 rounded-xl">
          <p className="text-gray-600 text-lg">
            Ready to start? Register now and join our vibrant auction community!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;