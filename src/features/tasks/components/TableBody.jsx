import TableHeader from "./TableHeader";
import TaskRow from "./TaskRow";

const TableBody = ({
  tasks,
  handleDelete,
  isLoading,
  setIsDeleteModalOpen,
  isEditing,
  setIsEditing,
}) => {
  return (
    <>
      <TableHeader />
      {isLoading ? (
        <p className="text-center text-card-value-medium py-3">
          Loading tasks please wait...
        </p>
      ) : (
        tasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        ))
      )}
    </>
  );
};

export default TableBody;
