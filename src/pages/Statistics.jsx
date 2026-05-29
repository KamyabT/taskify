import Sidebar from "../components/layout/Sidebar/Sidebar";

const Statistics = () => {
    return (
    <>
      <Sidebar />
      <section
        style={{ width: "calc(100% - 300px)", left: "300px", position: "relative" }}
      >
        <h3>Coming soon</h3>
      </section>
    </>
  );
};

export default Statistics;
