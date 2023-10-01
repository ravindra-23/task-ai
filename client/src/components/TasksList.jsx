import { useEffect, useState } from "react"
import axios from 'axios'
import Loader from "./Loader";
import TaskItem from "./TaskItem";
import EditTaskCard from "./EditTaskCard";

const TasksList = ({ reFetching, setRefetching }) => {
  const [viewEditModel, setViewEditModel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [taskId, setTaskId] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
		if (viewEditModel) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [viewEditModel]);

  const fetchTasks = () => {
    setLoading(true);
    axios
        .get("http://localhost:5000/tasks")
        .then((res) => {
            setTasks(res.data.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log("Error fetching data: ", err.message);
            setLoading(false);
        });
  };

  useEffect(() => {
    fetchTasks();
  }, [reFetching])

  const renderContent = () => {
    if(loading)
      return (
        <div className="flex flex-col items-center gap-4">
          <div className="scale-150">
            <Loader />
          </div>
          <p className="text-medium text-text">Loading...</p>
        </div>
      )

    if(!tasks.length)
        return (
          <p className="text-medium text-text">
            No Tasks Yet. Create New AI Task.
          </p>
        )

    return (
      <div className="grid grid-cols-1 gap-2 mn:grid-cols-2 dm:grid-cols-3">
				{tasks.map((task) => (
					<TaskItem
						key={task._id}
						task={task}
						setRefetching={setRefetching}
						setViewEditModel={setViewEditModel}
						setTaskId={setTaskId}
					/>
				))}
			</div>
    )
  }
  return (
    <div className="mb-4">
      <h1 className="text-large mb-4">Task List</h1>
			{renderContent()}
      
      {viewEditModel && (
				<EditTaskCard
					_id={taskId}
					setViewEditModel={setViewEditModel}
					setRefetching={setRefetching}
				/>
			)}
    </div>
  )
}

export default TasksList