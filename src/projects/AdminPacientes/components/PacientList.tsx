import { usePatienteStore } from "../store/store";
import PatientDetail from "./PatientDetail";

const PacientList = () => {
  const patients = usePatienteStore((state) => state.patients);

  // console.log(patients);

  return (
    <>
      <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
        {patients.length ? (
          <>
            <h2 className="text-3xl font-black text-center"></h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {""}
              <span className="text-indigo-600 font-bold">
                Pacientes y citas
              </span>
            </p>
            {patients.map((patient) => (
              <PatientDetail key={patient.id} patient={patient} />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes
            </h2>
            <p className="text-2xl mt-5 mb-10 text-center">
              Comienza Agregando pacientes {""}
            </p>
            <span className="text-indigo-600 font-bold">
              Y apareceran en este lugar
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default PacientList;
