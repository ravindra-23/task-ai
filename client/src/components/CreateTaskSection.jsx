import CreateTask from "./CreateTask"

const CreateTaskSection = ({ setCreated, setCreatedTask }) => {
  return (
    <div className="w-full p-4 py-8 my-8 flex flex-col gap-4 items-center rounded-lg backdrop-blur-xl relative overflow-hidden">
        <h1 className="text-xlarge font-poppins font-bold text-center leading-[50px]">
            Create New AI Task
        </h1>

        <CreateTask 
          styles="md:w-[450px]"
          setCreated={setCreated}
          setCreatedTask={setCreatedTask}
        />
    </div>
  )
}

export default CreateTaskSection