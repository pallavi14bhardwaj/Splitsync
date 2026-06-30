// Dashboard groups
import { Link } from "react-router-dom";
import groups from "../../Data/groups";

function GroupCard() {
  return (
    <div className="mt-8">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-3xl font-bold">
          My Groups
        </h2>

        <Link
          to="/groups"
          className="text-emerald-500 font-semibold hover:underline"
        >
          View All →
        </Link>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {groups.map((group) => (

          <Link
            key={group.id}
            to={`/group/${group.id}`}
            className="
              bg-white
              rounded-3xl
              shadow
              p-6
              block
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            <div className="text-4xl">
              {group.icon}
            </div>

            <h3 className="text-2xl font-bold mt-4">
              {group.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {group.members.join(", ")} ({group.members.length} Members)
            </p>

            <h4
              className={`text-3xl font-bold mt-5 ${
                group.balance.includes("-")
                  ? "text-red-500"
                  : "text-emerald-500"
              }`}
            >
              {group.balance}
            </h4>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default GroupCard;