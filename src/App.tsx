import React, {useMemo, useState} from 'react';
import {Task, useTodoList} from "@/hooks";
import {Aside, TaskList, TaskSubmitForm} from "@/components";

import './styles/main.scss';
import {TaskModal} from "./components/task-modal";

function App() {
  const {allItems, todoItems, doneItems, add, remove, toggle} = useTodoList();
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onSelectedTask = (task: Task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  }

  const taskCounter = useMemo(
      () => `${doneItems.length}/${allItems.length}`,
      [allItems.length, doneItems.length]
  );

  return (
      <div className="App">
        <Aside taskCounter={taskCounter}/>
        <main className="Main">
          <TaskModal isOpen={isModalOpen}
                     onAdd={add}
                     onClose={() => setIsModalOpen(false)}
                     onRemove={remove}
                     onToggle={toggle}
                     task={currentTask}
          />

          <TaskSubmitForm onAddTask={add}
                          onToggleModal={() => {
                            setCurrentTask(null)
                            setIsModalOpen(true)
                          }}
          />

          {!!todoItems?.length && (
              <TaskList heading="In progress"
                        items={todoItems}
                        onRemove={remove}
                        onSelected={onSelectedTask}
                        onToggle={toggle}
              />
          )}

          {!!doneItems?.length && (
              <TaskList heading=" Done"
                        items={doneItems}
                        onRemove={remove}
                        onSelected={onSelectedTask}
                        onToggle={toggle}
              />
          )}
        </main>
      </div>
  );
}

export default App;
