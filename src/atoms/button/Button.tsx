import {ComponentProps, FC} from "react";
import styles from './Button.module.scss';
import Counter from "../counter/Counter";

export type IconName = 'calendar' | 'charts' | 'dashboard' | 'settings' | 'teams' | 'trash';
export type ButtonProps = ComponentProps<'button'> & {
  counter?: string,
  icon?: IconName,
  variant?: 'success' | 'submit' | 'ghost',
}

export const Button: FC<ButtonProps> = props => {
  const {
    children,
    className = '',
    counter,
    icon,
    variant = 'submit',
    ...attrs
  } = props;

  return <button className={`${styles.Button} ${styles['--variant-' + variant] ?? ''} ${className}`}
                 {...attrs}
  >{!!icon?.length && (
      <img src={`/icons/icon-${icon}.svg`} alt={icon}/>
  )}<span className={styles.text}>{children}</span>{!!counter?.length && (
      <Counter className={'--background-color-white'}>{counter}</Counter>
  )}</button>;
}

export default Button;