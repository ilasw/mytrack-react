import React, {useMemo} from 'react';
import {useTodoList} from "@/hooks";
import {Aside, TaskList, TaskSubmitForm} from "@/components";

import './styles/main.scss';

function App() {
  const {allItems, todoItems, doneItems, add, remove, toggle} = useTodoList();
  const taskCounter = useMemo(() => `${doneItems.length}/${allItems.length}`, [allItems.length, doneItems.length])

  return (
      <div className="App">

        <Aside taskCounter={taskCounter}/>

        <main className="Main">

          <TaskSubmitForm onAddTask={add}/>

          {!!todoItems?.length && (
              <TaskList heading="In progress"
                        items={todoItems}
                        onRemove={remove}
                        onToggle={toggle}
              />
          )}

          {!!doneItems?.length && (
              <TaskList heading=" Done"
                        items={doneItems}
                        onRemove={remove}
                        onToggle={toggle}
              />
          )}
        </main>
      </div>
  );
}

export default App;
