import React, {ComponentProps, FC} from "react";
import {Task, useTaskForm, useTodoList} from "@/hooks";
import {Button, Toggle} from "@/atoms";
import styles from './TaskModal.module.scss';

export type TaskModalProps = ComponentProps<'li'> & {
  task: Task | null,
  isOpen: boolean,
  onClose: () => void,
  onAdd: ReturnType<typeof useTodoList>['add'],
  onRemove: ReturnType<typeof useTodoList>['remove'],
  onToggle: ReturnType<typeof useTodoList>['toggle'],
}

export const TaskModal: FC<TaskModalProps> = props => {
  const {onRemove, onToggle, task, onAdd, onClose, isOpen} = props;
  const {register, text, onSubmit, handleSubmit} = useTaskForm(onAdd, onClose);

  const toggleAndClose = () => {
    if (!task) return;

    onToggle(task.id);
    onClose();
  }

  if (!isOpen) return null;

  return <div className={styles.TaskModal}
              tabIndex={isOpen ? 0 : -1}
              aria-hidden={!isOpen}
  >
    <div className={styles.overlay}
         tabIndex={0}
         onClick={() => onClose()}
    />
    <div className={styles.modal}>
      <form className={styles.TaskModal}
            onSubmit={handleSubmit(onSubmit)}>

        <header className={styles.header}>
          <h2 className={"heading"}>{!!task
              ? <><span className={`priority-dot ${styles['--priority-' + task.priority]}`}/> <span>Task</span></>
              : 'New task'
          }</h2>
          <button className="close"
                  onClick={() => onClose()}
          >X
          </button>
        </header>

        <div className={styles.body}>
          {task?.text?.length
              ? <div className={styles.input}>{task?.text}</div>
              : (
                  <textarea className={styles.input}
                            autoFocus={true}
                            placeholder={'Insert task name...'}
                            rows={3}
                            {...register('text')}
                  />
              )}
        </div>

        <footer className={styles.actions}>
          {!task && (
              <>
                <label className={styles.priority}>
                  <span className="label-text">High priority</span>
                  <Toggle {...register('priority')}/>
                </label>
                <Button disabled={!text?.length}
                        type={'submit'}
                >ADD</Button>
              </>
          )}
          {!!task && (
              <>
                <button className={styles.trash}
                        title={`remove task #${task.id}`}
                        type={'button'}
                        onClick={() => {
                          onClose();
                          onRemove(task.id)
                        }}
                ><img src="/icons/icon-trash.svg" alt="Remove"/></button>
                <Button onClick={() => toggleAndClose()}
                        type={'button'}
                        variant={'success'}
                >Complete</Button>
              </>
          )}
        </footer>
      </form>
    </div>
  </div>;
}

export default TaskModal;