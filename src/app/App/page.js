"use client";
import Button from "../../../components/Button/Button";
import Header from "../Header/Header";
import { MoreVertical } from "feather-icons-react";
import UnitElemDisplay from "../../../components/UnitElemDisplay/page";
import { useState } from "react";
import AddNewTask from "../Task/AddTask";

export default function AppHeader() {
  const [addTaskDialog, setAddTaskDialog] = useState(true);

  function addNewTask() {
    setAddTaskDialog(!addTaskDialog);
  }

  return (
    <div className="flex w-full">
      <Header>
        <UnitElemDisplay styles={"flex w-full h-full"}>
          <div className="text-heading-xl h-full flex justify-center items-center">
            Platform Launch
          </div>
          <div className="flex ml-auto gap-4">
            <Button
              onClickFun={() => {
                addNewTask()
              }}
              className="px-4"
            >
              + Add new Task
            </Button>
            <AddNewTask open={addTaskDialog} onChange={setAddTaskDialog} />
            <button>
              <MoreVertical className="h-full w-8 text-medium-grey mx-2" />
            </button>
          </div>
        </UnitElemDisplay>
      </Header>
      {/* {addTaskDialog?<AddNewTask/>:<></>} */}
    </div>
  );
}
