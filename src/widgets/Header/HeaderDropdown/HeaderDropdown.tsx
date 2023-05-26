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
  const [hide, setHide] = useState(false);

  const onDropdownClose = useCallback(() => {
    setHide(true);
    setTimeout(() => {
      setDropShow(false);
    }, 250);
  }, []);

  const onMouseEnter = () => {
    setHide(false);
    setDropShow(true);
  };

  const onMouseLeave = () => {
    onDropdownClose();
  };

  useEffect(() => {
    if (!opened && !dropShow) {
      onDropdownClose();
      onClose();
    }
  }, [opened, dropShow, onDropdownClose, onClose]);

  return (
    <div
      className={classNames(styles.headerDropdownBody, {
        [styles.show]: opened || dropShow,
        [styles.hide]: !opened && hide,
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <HeaderDropdownProvider value={onDropdownClose}>{children}</HeaderDropdownProvider>
    </div>
  );
}
