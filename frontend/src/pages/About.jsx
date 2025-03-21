import React from "react";
import { Lightbulb, Heart, Users, Headphones, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
      icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
      icon: <Heart className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
      icon: <Users className="w-6 h-6 text-orange-500" />,
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
      icon: <Headphones className="w-6 h-6 text-orange-500" />,
    },
  ];

  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-2xl min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
            <span className="bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text">
              About Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to AuctionWars, the ultimate destination for online auctions
            and bidding excitement. Founded in 2025, we are dedicated to
            providing a dynamic and user-friendly platform for buyers and
            sellers to connect, explore, and transact in a secure and seamless
            environment.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our Mission
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            At AuctionWars, our mission is to revolutionize the way people buy and
            sell items online. We strive to create an engaging and trustworthy
            marketplace that empowers individuals and businesses to discover
            unique products, make informed decisions, and enjoy the thrill of
            competitive bidding.
          </p>
        </div>

        {/* Values Section */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((element) => (
              <div
                key={element.id}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    {element.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {element.title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our Story
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded by Rohan Sharma, AuctionWars was born out of a passion for
            connecting people with unique and valuable items. With years of
            experience in the auction industry, our team is committed to
            creating a platform that offers an unparalleled auction experience
            for users worldwide.
          </p>
        </div>

        {/* Join Us Section */}
        <div className="bg-gray-900 text-white p-8 rounded-2xl space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">
            Join Us
          </h3>
          <p className="text-xl leading-relaxed opacity-90">
            Whether you're looking to buy, sell, or simply explore, AuctionWars
            invites you to join our growing community of auction enthusiasts.
            Discover new opportunities, uncover hidden gems, and experience the
            thrill of winning your next great find.
          </p>
          <button className="flex items-center gap-2 mt-4 px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-300">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thank You Section */}
        <div className="text-center pb-8">
          <p className="text-xl font-bold text-orange-500">
            Thank you for choosing AuctionWars. We look forward to being a part of
            your auction journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;