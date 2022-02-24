import React, {FC} from "react";
import {Button, IconName} from "@/atoms";
import {useMediaBreakpoint} from "@/hooks";
import styles from './Aside.module.scss';

export const Aside: FC<{ taskCounter: string }> = props => {
  const {taskCounter} = props;
  const menuItems: IconName[] = ['calendar', 'teams', 'charts', 'settings'];
  const {isMobile} = useMediaBreakpoint();

  return <aside className={styles.Aside}>
    <h1 className={styles.title}>MyTrack</h1>

    <nav className={styles.nav}>
      <ul className={styles["nav-menu"]}>
        <li className={styles["nav-menu-item"]}>
          <Button icon={'dashboard'}
                  className={'d-flex w-100 --active'}
                  variant={'ghost'}
                  {...!isMobile && {counter: taskCounter}}
          >Dashboard</Button>
        </li>

        {menuItems.map(name => (
            <li className={styles["nav-menu-item"]}>
              <Button icon={name}
                      className={'d-flex w-100 --text-capitalize'}
                      variant={'ghost'}
              >{name}</Button>
            </li>
        ))}
      </ul>
    </nav>
  </aside>;
}

export default Aside;