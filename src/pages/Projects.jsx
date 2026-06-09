import Sidebar from "../components/layout/Sidebar/Sidebar";
import Header from "../components/layout/Header/Header";
import Modal from "../components/ui/Modal/Modal";
import AddTaskForm from "../features/tasks/components/AddTaskForm";
import { useTasks } from "../context/TasksContext";

const Projects = () => {
  const {
    handleTaskCreated,
    isModalOpen,
    setIsModalOpen,
  } = useTasks();

  return (
    <main>
      <Sidebar />
      <section
        className="d-flex flex-column px-4 py-3"
        style={{ width: "calc(100% - 250px)", left: "250px", position: "relative" }}
      >
        {isModalOpen && (
          <Modal>
            <AddTaskForm
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              onSuccess={handleTaskCreated}
            />
          </Modal>
        )}
        <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={"Projects"}/>
      </section>
    </main>
  );
};

export default Projects;
