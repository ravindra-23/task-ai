import { CreateTaskSection, CreatedTaskCard, TasksList } from "../../components"
import { useState, useEffect } from "react";


const Tasks = () => {
  const [createdTask, setCreatedTask] = useState(null);
  const [created, setCreated] = useState(false);
  const [reFetching, setRefetching] = useState(false);

  useEffect(() => {
		if (created) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [created]);

  return (
    <div className="w-[calc(100%-2rem)] max-w-[1300px] flex-1 min-h-[300px]">
        <CreateTaskSection 
          setCreated={setCreated} setCreatedTask={setCreatedTask}
        />
        <TasksList reFetching={reFetching} setRefetching={setRefetching} />

        {created && (
          <CreatedTaskCard
            task={createdTask}
            setCreated={setCreated}
            setRefetching={setRefetching}
          />
			)}
    </div>
  )
}

export default Tasks