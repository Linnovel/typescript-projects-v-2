import { Activity } from "../types";
import { categories } from "../datadb/categories";
import { useMemo, Dispatch } from "react";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ActivityActions } from "../../reducers/activityReducer";

type ActivityListProps = {
  activities: Activity[];
  dispatch: Dispatch<ActivityActions>;
};

const ActivityList = ({ activities, dispatch }: ActivityListProps) => {
  const categoryName = useMemo(
    () => (category: Activity["category"]) =>
      categories.map((cat) => (cat.id === category ? cat.name : "")),
    [activities]
  );
  //   console.log(activities);

  const isEmptyActivity = useMemo(() => activities.length === 0, [activities]);
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y Actividades
      </h2>
      {isEmptyActivity ? (
        <p className="text-center my-5">No hay Actividades aun..</p>
      ) : (
        activities.map((activity) => (
          <div
            key={activity.id}
            className="px-5 py-10 bg-white mt-5 flex gap-2 justify-between"
          >
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${
                  activity.calories === 1 ? "bg-lime-500" : "bg-orange-500"
                }`}
              >
                {categoryName(+activity.category)}
              </p>
              <p className="text-2xl font-bold pt-5">{activity.name}</p>
              <p className="font-black text-4xl text-lime-500 ">
                {activity.calories} {""}
                <span>Calorias</span>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <button>
                <PencilSquareIcon
                  onClick={() =>
                    dispatch({
                      type: "set-activdeId",
                      payload: { id: activity.id },
                    })
                  }
                  className="h-8 w-8 text-gray-800"
                />
              </button>
              <button>
                <XCircleIcon
                  onClick={() =>
                    dispatch({
                      type: "delete-activity",
                      payload: { id: activity.id },
                    })
                  }
                  className="h-8 w-8 text-red-500"
                />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ActivityList;
