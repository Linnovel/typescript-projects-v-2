import { useAppStore } from "../store/useAppStore";

const IndexPage = () => {
  useAppStore((state) => state.categories);

  return (
    <>
      <h1>Inicio</h1>
    </>
  );
};

export default IndexPage;
