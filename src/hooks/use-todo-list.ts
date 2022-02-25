import {useMemo, useState} from "react";

export type Task = {
  id: number,
  completed: boolean,
  text: string,
  priority: 'medium' | 'high'
}

const INITAL_LIST: Task[] = [
  {id: 1, text: 'Andare a comprare il pane', completed: false, priority: 'medium'},
  {id: 2, text: 'Stendere i panni', completed: false, priority: 'medium'},
  {id: 3, text: 'Task inzialmente conclusa ed alta priorità', completed: true, priority: 'high'},
  {id: 4, text: 'Fare code review per @Ilasw', completed: false, priority: 'medium'},
  {id: 5, text: 'Ascolta il nuovo album di Rkomi', completed: false, priority: 'high'},
]

export const useTodoList = () => {
  const [items, setItems] = useState<Task[]>(INITAL_LIST);

  const sortedList = useMemo(
      () => items.sort((a, b) => {
        if( b.priority === 'high') return 0;
        return a.priority === 'high' ? -1 : 1
      }),
      [items]
  );
  const {todoList = [], doneList = []} = useMemo(() => sortedList.reduce((acc: Record<string, Task[]>, item) => {
    const toUpdateKey = item.completed ? 'doneList' : 'todoList';
    return {...acc, [toUpdateKey]: (acc[toUpdateKey] ?? []).concat([item])}
  }, {}), [sortedList])

  const add = ({text = '', priority = 'medium'}: Partial<Task>) => {
    const newItem = {id: new Date().getTime(), text, completed: false, priority};
    setItems(items => [...items, newItem])
  }

  const remove = (id: Task['id']) => {
    setItems(items => items.filter(item => item.id !== id))
  };

  const toggle = (id: Task['id'], force?: boolean) => {
    setItems(items => items.map(item => ({
      ...item,
      ...(item.id === id && {completed: force ?? !item.completed})
    })))
  }

  return {allItems: sortedList, todoItems: todoList, doneItems: doneList, add, remove, toggle}
}

export default useTodoList;