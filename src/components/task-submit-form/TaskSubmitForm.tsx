import React, {ComponentProps, FC} from "react";
import {Button, Toggle} from "@/atoms";
import {useTodoList, useTaskForm, useMediaBreakpoint} from "@/hooks";
import styles from './TaskSubmitForm.module.scss';

export type TaskSubmitFormProps = ComponentProps<'form'> & {
  onAddTask: ReturnType<typeof useTodoList>['add'],
  onToggleModal: () => void;
}

export const TaskSubmitForm: FC<TaskSubmitFormProps> = ({onAddTask, onToggleModal}) => {

  const {isDesktop} = useMediaBreakpoint();
  const {register, text, onSubmit, handleSubmit} = useTaskForm(onAddTask);

  return <form className={styles.TaskSubmitForm}
               onSubmit={handleSubmit(onSubmit)}>

    <h2 className={"heading"}>New task</h2>

    {isDesktop
        ? (
            <div className={styles.card}>
              <input className={styles.input}
                     type="text"
                     autoFocus={true}
                     {...register('text')}
              />
              <label className={styles.priority}>
                <span className="label-text">High priority</span>
                <Toggle {...register('priority')}/>
              </label>
              <Button disabled={!text?.length}
                      type={'submit'}
              >ADD</Button>
            </div>
        )
        : <button className={styles.add}
                  onClick={() => onToggleModal()}
        >New task +</button>
    }
  </form>;
}

export default TaskSubmitForm;