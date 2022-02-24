import {ComponentProps, FC} from "react";
import styles from './Counter.module.scss';

export const Counter: FC<ComponentProps<'span'>> = ({children, className = ''}) => {
  return <span className={`${styles.counter} ${className}`}>{children}</span>;
}

export default Counter;