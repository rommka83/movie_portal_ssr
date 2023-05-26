/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useState, useCallback, useEffect } from 'react';
import styles from './headerdropdown.module.css';
import classNames from 'classnames';
import { HeaderDropdownProvider } from './HeaderDropdownContext';

interface IHeaderDropdown {
  opened: boolean;
  onClose: () => void;
}
export function HeaderDropdown({ children, opened, onClose }: PropsWithChildren<IHeaderDropdown>) {
  const [dropShow, setDropShow] = useState(opened);

  const onMouseEnter = useCallback(() => {
    setDropShow(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setTimeout(() => {
      setDropShow(false);
    }, 250);
  }, []);

  const onCloseHandler = useCallback(() => {
    onMouseLeave();
  }, [onMouseLeave]);

  useEffect(() => {
    if (!opened && !dropShow) {
      onClose();
    }
  }, [opened, dropShow]);

  return (
    <div
      className={classNames(styles.headerDropdownBody, {
        [styles.show]: opened || dropShow,
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <HeaderDropdownProvider value={onCloseHandler}>{children}</HeaderDropdownProvider>
    </div>
  );
}
