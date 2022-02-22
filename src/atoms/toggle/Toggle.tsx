import {FC} from "react";
import styles from './Toggle.module.scss';

const Toggle: FC = props => {

  return <label className={styles.Toggle}>
    <input className={styles.input}
           type="checkbox" name="toggle"/>
    <span className={styles.switch}/>
  </label>;
}

export default Toggle;