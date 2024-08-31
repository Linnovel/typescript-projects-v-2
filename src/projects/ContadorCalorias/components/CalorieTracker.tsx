import { useMemo } from "react";
import { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

type ActivitiesProps = {
  activities: Activity[];
};

const CalorieTracker = ({ activities }: ActivitiesProps) => {
  //Contadores
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurn = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const netCalories = useMemo(
    () => caloriesConsumed - caloriesBurn,
    [activities]
  );

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resume Calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 nt-10">
        <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
        <CalorieDisplay text="Caloria Ejercicios" calories={caloriesBurn} />

        <CalorieDisplay text="Calorias quemadas" calories={netCalories} />
      </div>
    </>
  );
};

export default CalorieTracker;
