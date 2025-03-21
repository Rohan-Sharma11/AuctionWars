// import  from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Trophy, Crown } from "lucide-react";

const Leaderboard = () => {
  const { leaderboard } = useSelector((state) => state.user);

  const getMedalColor = (index) => {
    switch (index) {
      case 0:
        return "text-yellow-400";
      case 1:
        return "text-gray-400";
      case 2:
        return "text-amber-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <section className="my-8 max-w-6xl mx-auto p-4 bg-white rounded-2xl shadow-lg">
      <div className="flex items-center gap-4 mb-8">
        <Trophy className="w-8 h-8 text-orange-500" />
        <div>
          <h3 className="text-3xl font-bold text-gray-800">
            Top 10{" "}
            <span className="text-orange-500">Bidders Leaderboard</span>
          </h3>
          <p className="text-gray-500 mt-1">Our most active and successful bidders</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Rank</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Bidder</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Total Spent</th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-600">Wins</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {leaderboard.slice(0, 10).map((element, index) => (
              <tr
                key={element._id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    {index < 3 ? (
                      <Crown className={`w-6 h-6 ${getMedalColor(index)}`} />
                    ) : (
                      <span className="text-gray-500 font-semibold w-6">
                        {index + 1}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={element.profileImage?.url}
                      alt={element.username}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{element.userName}</p>
                      <p className="text-sm text-gray-500">Member</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-semibold text-gray-900">
                    ${Number(element.moneySpent).toLocaleString()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-orange-500" />
                    <span className="font-semibold text-gray-900">
                      {element.auctionsWon}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link
        to="/leaderboard"
        className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        View Full Leaderboard
      </Link>
    </section>
  );
};

export default Leaderboard;