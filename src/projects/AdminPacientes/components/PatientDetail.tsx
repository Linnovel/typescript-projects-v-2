import { usePatienteStore } from "../store/store";
import { Patients } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailProps = {
  patient: Patients;
};

const PatientDetail = ({ patient }: PatientDetailProps) => {
  const deletePatiente = usePatienteStore((state) => state.deletePatiente);
  const getPatienteById = usePatienteStore((state) => state.getPatienteById);

  return (
    <>
      <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID" data={patient.id} />
        <PatientDetailItem label="Nombre" data={patient.name} />
        <PatientDetailItem label="Propietario" data={patient.caretaker} />
        <PatientDetailItem label="Email" data={patient.email} />
        <PatientDetailItem label="Fetcha Alta" data={patient.date.toString()} />
        <PatientDetailItem label="Sintomas" data={patient.symptoms} />
      </div>
      <div className="flex justify-between  mt-10">
        <button
          type="button"
          onClick={() => getPatienteById(patient.id)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >
          - Editar
        </button>
        <button
          type="button"
          onClick={() => deletePatiente(patient.id)}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
          X - Elminar
        </button>
      </div>
    </>
  );
};

export default PatientDetail;
