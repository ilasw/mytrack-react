import {ComponentProps, FC} from "react";
import styles from './Checkbox.module.scss';

export const Checkbox: FC<ComponentProps<'input'>> = props => {

  const {className, ...attrs} = props;

  return <label className={styles.CheckBox}>
    <input className={`${styles.input} ${className}`}
           type="checkbox"
           {...attrs}
    />
    <span className={styles.square}/>
  </label>;
}

export default Checkbox;