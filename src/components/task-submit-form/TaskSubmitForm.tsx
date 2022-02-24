import React, {ComponentProps, FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, Toggle} from "@/atoms";
import {useTodoList} from "@/hooks";
import styles from './TaskSubmitForm.module.scss';

export type TaskSubmitFormProps = ComponentProps<'form'> & {
  onAddTask: ReturnType<typeof useTodoList>['add']
}

type FormFields = { text: string, priority: boolean };

export const TaskSubmitForm: FC<TaskSubmitFormProps> = ({onAddTask}) => {
  const {register, handleSubmit, watch, setValue} = useForm<FormFields>({shouldUseNativeValidation: true});
  const {text} = watch();

  const onSubmit: SubmitHandler<FormFields> = async ({text, priority}) => {
    if (text?.length) {
      onAddTask({text, priority: priority ? 'high' : 'medium'});
    }

    setValue('text', '');
  };

  return <form className={styles.TaskSubmitForm}
               onSubmit={handleSubmit(onSubmit)}>
    <h2 className={"heading"}>New task</h2>
    <div className={styles.card}>
      <input className={styles.input}
             type="text"
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
  </form>;
}

export default TaskSubmitForm;