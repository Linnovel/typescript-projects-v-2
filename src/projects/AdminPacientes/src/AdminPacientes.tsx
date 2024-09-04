import PacientForm from "../components/PacientForm";
import PacientList from "../components/PacientList";

const AdminPacientes = () => {
  return (
    <>
      <div className="container mx-auto mt-20 ">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de pacientes
        </h1>
        <span className="text-indigo-700"></span>
        <div className="mt-12 md:flex">
          <PacientForm />
          <PacientList />
        </div>
      </div>
    </>
  );
};

export default AdminPacientes;
