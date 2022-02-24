import {ComponentProps, FC, forwardRef} from "react";
import styles from './Toggle.module.scss';

export const Toggle = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, ref) => {

  return <label className={styles.Toggle}>
    <input className={styles.input}
           type="checkbox"
           {...props}
           ref={ref}
    />
    <span className={styles.switch}/>
  </label>;
})

export default Toggle;