import { PropsWithChildren, useEffect, useState } from 'react';
import styles from './accordion.module.css';
import classNames from 'classnames';

interface IAccordion {
  textButton: string | null;
  selectedItem?: string;
  buttonIconClass?: string;
  closed?: boolean;
  onClose?: () => void;
}
export function Accordion({
  textButton,
  children,
  selectedItem,
  buttonIconClass,
  onClose,
  closed,
}: PropsWithChildren<IAccordion>) {
  const [expanded, setExpanded] = useState(false);
  const iconClass = expanded ? 'icon-arrowUpSquare_16__0' : 'icon-arrowDownSquare_16__0';

  const onToggleClick = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (closed && expanded) {
      setExpanded(false);
    }
    if (!expanded) {
      onClose && onClose();
    }
  }, [closed, expanded, onClose]);

  return (
    <div className={styles.container}>
      <button className={styles.accordionButton} onClick={onToggleClick}>
        <span className={buttonIconClass}></span>
        <span className={styles.textButton}>{textButton}</span>
        <span className={classNames(styles.icon, iconClass)} />
        <span className={styles.textUnder}>{selectedItem}</span>
      </button>
      {expanded && <div className={styles.content}>{children}</div>}
    </div>
  );
}
