import Sidebar from "../components/layout/Sidebar/Sidebar";
import Header from "../components/layout/Header/Header";
import { useTasks } from "../context/TasksContext";

const Projects = () => {

  const {isModalOpen , setIsModalOpen} = useTasks()


  return (
    <main>
      <Sidebar />
      <section
        className="d-flex flex-column px-4 py-3"
        style={{ width: "calc(100% - 250px)", left: "250px", position: "relative" }}
      >
        <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </section>
    </main>
  );
};

export default Projects;
