import {SubmitHandler, useForm} from "react-hook-form";
import {useTodoList} from "./use-todo-list";

type FormFields = { text: string, priority: boolean };

export const useTaskForm = (onAddTask: ReturnType<typeof useTodoList>['add'], successFn?: () => void) => {
  const {register, handleSubmit, watch, setValue} = useForm<FormFields>({shouldUseNativeValidation: true});
  const {text} = watch();

  const onSubmit: SubmitHandler<FormFields> = async ({text, priority}) => {
    if (text?.length) {
      onAddTask({text, priority: priority ? 'high' : 'medium'});
      successFn?.();
    }

    setValue('text', '');
  };

  return {register, text, onSubmit, handleSubmit}
}