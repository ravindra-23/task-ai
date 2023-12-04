import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import Loader from "./Loader";

const TaskItem = ({ task, setRefetching, setViewEditModel, setTaskId }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [viewMenu, setViewMenu] = useState(false);
  const { _id } = task;

  const handleDeleteTask = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`https://task-ai.onrender.com/tasks/${_id}`);
      setIsDeleting(false);
      setRefetching((ref) => !ref);
    } catch (err) {
      setIsDeleting(false);
      console.log(err);
    }
  };
  return (
    <div
      className={`rounded-lg backdrop-blur-xl border border-brand p-4 relative flex flex-col ${
        isDeleting && "opacity-50"
      }`}
      onPointerLeave={() => setViewMenu(false)}
    >
      <div className="flex gap-2 items-center justify-between mb-2 relative">
        <div className="flex gap-2">
          {task?.tags.map((tag) => (
            <span
              key={tag}
              className="bg-hovery rounded-[100px] border border-custom_01 px-2 text-tiny"
            >
              {tag}
            </span>
          ))}
        </div>

        <button onClick={() => setViewMenu(!viewMenu)}>
          <BiDotsVerticalRounded size={24} />
        </button>

        {viewMenu && (
          <div className="absolute z-50 right-0 top-0 rounded-sm p-[1px] flex flex-col gap-0 bg-[rgba(35,31,31,0.8)] border border-hovery w-28">
            <button
              className="opacity-80 hover:opacity-100 hover:bg-hovery transition-all py-[6px] rounded-sm flex gap-2 items-center justify-center hover:text-red"
              onClick={handleDeleteTask}
            >
              <MdOutlineDelete size={22} className="text-red" />
              Delete
            </button>
            <button
              className="opacity-80 hover:opacity-100 hover:bg-hovery transition-all py-[6px] rounded-sm flex gap-2 items-center justify-center hover:text-brand"
              onClick={() => {
                setViewEditModel(true);
                setTaskId(task._id);
              }}
            >
              <FiEdit size={18} className="text-brand" />
              Edit
            </button>
          </div>
        )}
      </div>

      <p className="flex items-center gap-1 text-tiny text-tertiary mb-4">
        <AiOutlineSave size={20} />
        {new Date(task.updatedAt).getDate() < 10
          ? `0${new Date(task.updatedAt).getDate()}`
          : new Date(task.updatedAt).getDate()}
        /
        {new Date(task.updatedAt).getMonth() < 9
          ? `0${new Date(task.updatedAt).getMonth() + 1}`
          : new Date(task.updatedAt).getMonth() + 1}
        /{new Date(task.updatedAt).getFullYear()}
      </p>

      <h1 className="text-large font-[400] font-poppins pb-1 border-b border-custom_01 capitalize">
        {task.title}
      </h1>

      <div className="flex gap-2 items-center justify-between mt-4">
        <span
          className={`text-tiny uppercase 
                ${
                  task.priority.toUpperCase() === "LOW"
                    ? "text-orange"
                    : task.priority.toUpperCase() === "MEDIUM"
                    ? "text-green"
                    : "text-red"
                } `}
        >
          {task.priority}
        </span>
        <BsFillInfoCircleFill
          size={19}
          fill={`${
            task.priority.toUpperCase() === "LOW"
              ? "var(--orange)"
              : task.priority.toUpperCase() === "MEDIUM"
              ? "var(--green)"
              : "var(--red)"
          }`}
        />
      </div>

      {isDeleting && (
        <div className="absolute z-[60] top-0 left-0 bg-hovery rounded-lg w-full h-full flex items-center justify-center gap-2">
          <Loader /> Deleting...
        </div>
      )}
    </div>
  );
};

export default TaskItem;
