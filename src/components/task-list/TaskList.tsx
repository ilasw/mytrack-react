import React, {ComponentProps, FC} from "react";
import {useTodoList, Task} from "@/hooks";
import {Counter} from "@/atoms";
import {TaskListItem} from "@/components";
import styles from './TaskList.module.scss';

export type TaskListProps = ComponentProps<'div'> & {
  heading: string,
  items: Task[],
  onRemove: ReturnType<typeof useTodoList>['remove'],
  onToggle: ReturnType<typeof useTodoList>['toggle'],
}

export const TaskList: FC<TaskListProps> = props => {
  const {items, heading = '', onRemove, onToggle} = props;

  return <div className={styles.TaskList}>
    <h2 className={"heading"}>{heading} <Counter>{items.length}</Counter></h2>
    <ul className={styles.list}>
      {items.map(item => (
          <TaskListItem key={item.id}
                        task={item}
                        {...{onRemove, onToggle}}
          />
      ))}
    </ul>
  </div>;
}

export default TaskList;