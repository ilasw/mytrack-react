import {ComponentProps, FC} from "react";
import {Task, useTodoList} from "@/hooks";
import {Checkbox} from "@/atoms";
import styles from './TaskListItem.module.scss';

export type TaskListItemProps = ComponentProps<'li'> & {
  task: Task;
  onRemove: ReturnType<typeof useTodoList>['remove'],
  onToggle: ReturnType<typeof useTodoList>['toggle'],
}

export const TaskListItem: FC<TaskListItemProps> = props => {
  const {onRemove, onToggle, task} = props;

  return <li className={`${styles.TaskListItem} ${task?.completed ? styles['--state-completed'] : ''}`}>
    <Checkbox name="complete"
              id={`complete-${task.id}`}
              checked={task.completed}
              onChange={() => onToggle(task.id)}
    />
    <span className={`${styles.priority} ${styles['--priority-' + task.priority]}`}/>
    <label className={styles.text}
           htmlFor={`complete-${task.id}`}
    >{task.text}</label>
    <button className={styles.trash}
            title={`remove task #${task.id}`}
            onClick={() => onRemove(task.id)}
    ><img src="/icons/icon-trash.svg" alt="Remove"/></button>
  </li>;
}

export default TaskListItem;