import { useSelector } from "react-redux";
import Spinner from "@/custom-components/Spinner";
import { Trophy, Medal } from "lucide-react";

const Leaderboard = () => {
  const { loading, leaderboard } = useSelector((state) => state.user);

  const getRankStyle = (index) => {
    const baseStyle = "font-bold text-lg";
    switch (index) {
      case 0:
        return `${baseStyle} text-yellow-500`;
      case 1:
        return `${baseStyle} text-gray-400`;
      case 2:
        return `${baseStyle} text-amber-600`;
      default:
        return "text-gray-500";
    }
  };

  return (
    <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
      {loading ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 md:w-12 md:h-12 text-orange-500" />
              <h1 className="text-2xl min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text">
                Bidders Leaderboard
              </h1>
            </div>
            <p className="text-gray-600 text-lg">Ranking our most successful bidders</p>
          </div>

          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-6 text-left text-gray-600 font-semibold">Rank</th>
                  <th className="py-4 px-6 text-left text-gray-600 font-semibold">Bidder</th>
                  <th className="py-4 px-6 text-left text-gray-600 font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Total Spent</span>
                      <Medal className="w-4 h-4 text-gray-400" />
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left text-gray-600 font-semibold">
                    <div className="flex items-center gap-2">
                      <span>Wins</span>
                      <Trophy className="w-4 h-4 text-gray-400" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leaderboard.slice(0, 100).map((element, index) => (
                  <tr
                    key={element._id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">
                      <span className={`${getRankStyle(index)} inline-block min-w-[2rem]`}>
                        {index + 1}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={element.profileImage?.url}
                            alt={element.username}
                            className="h-12 w-12 object-cover rounded-full ring-2 ring-gray-100"
                          />
                          {index < 3 && (
                            <div className={`absolute -top-1 -right-1 p-1 rounded-full ${index === 0 ? "bg-yellow-500" :
                              index === 1 ? "bg-gray-400" :
                                "bg-amber-600"
                              }`}>
                              <Trophy className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{element.userName}</p>
                          <p className="text-sm text-gray-500">Active Bidder</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-gray-900">
                        Rs.{Number(element.moneySpent).toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">
                          {element.auctionsWon}
                        </span>
                        <Trophy className="w-4 h-4 text-orange-500 opacity-75" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
};

export default Leaderboard;