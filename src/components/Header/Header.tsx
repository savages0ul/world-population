import clsx from 'clsx';
import { useContext } from 'react';

import logo from '../../assets/icons/logo.svg';
import { ReactComponent as Logo } from '../../assets/icons/heart.svg';
import { ActiveGridContext } from '../../App';

import styles from './Header.module.scss';

const Header = () => {
  const { activeGrid, setActiveGrid } = useContext(ActiveGridContext);

  return (
    <div className={styles.root}>
      <img
        src={logo}
        className={styles.logo}
      />
      <div className={styles.iconsWrapper}>
        <div
          className={clsx(styles.wrapper, {
            [styles.activeWrapper]: activeGrid === 0,
          })}
          onClick={() => setActiveGrid(0)}
        >
          <Logo
            className={clsx({
              [styles.activeIcon]: activeGrid === 0,
            })}
          />
          <div>1 X 3</div>
        </div>
        <div
          className={clsx(styles.wrapper, {
            [styles.activeWrapper]: activeGrid === 1,
          })}
          onClick={() => setActiveGrid(1)}
        >
          <Logo
            className={clsx({
              [styles.activeIcon]: activeGrid === 1,
            })}
          />
          <div>2 X 3</div>
        </div>
        <div
          className={clsx(styles.wrapper, styles.wrapperSmart, {
            [styles.activeWrapper]: activeGrid === 2,
          })}
          onClick={() => setActiveGrid(2)}
        >
          <Logo
            className={clsx({
              [styles.activeIcon]: activeGrid === 2,
            })}
          />
          <div>SMART</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
