import {useMemo, useState} from "react";

type ListItem = {
  id: number,
  completed: boolean,
  text: string,
  priority: 'medium' | 'high'
}

const INITAL_LIST: ListItem[] = [
  {id: 1, text: 'Task media', completed: false, priority: 'medium'},
  {id: 2, text: 'Task media 2', completed: false, priority: 'medium'},
  {id: 3, text: 'Task alta', completed: false, priority: 'high'},
  {id: 4, text: 'Task media 3', completed: false, priority: 'medium'},
  {id: 5, text: 'Task alta 2', completed: false, priority: 'high'},
]

export const useTodoList = () => {
  const [items, setItems] = useState<ListItem[]>(INITAL_LIST);

  const sortedList = useMemo(
      () => items.sort((_, b) => b.priority === 'high' ? 1 : -1),
      [items]
  );

  const add = ({text = '', priority = 'medium'}: Partial<ListItem>) => {
    const newItem = {id: new Date().getTime(), text, completed: false, priority};
    setItems(items => [...items, newItem])
  }

  const remove = (id: ListItem['id']) => {
    setItems(items => items.filter(item => item.id !== id))
  };

  const complete = (id: ListItem['id']) => {
    setItems(items => items.map(item => ({
      ...item,
      ...(item.id === id && {completed: true})
    })))
  }

  return {list: sortedList, add, remove, complete}
}

export default useTodoList;