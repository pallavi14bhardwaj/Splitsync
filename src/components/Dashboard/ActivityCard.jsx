// Recent activities

import activity from "../../Data/activity";

function ActivityCard() {
  return (
    <div className="mt-8">

      <h2 className="text-3xl font-bold mb-5">
        Recent Activity
      </h2>

      <div className="bg-white rounded-3xl shadow p-6">

        {activity.map((item, index) => (

          <p
            key={index}
            className="border-b py-4"
          >
            {item}
          </p>

        ))}

      </div>

    </div>
  );
}

export default ActivityCard;