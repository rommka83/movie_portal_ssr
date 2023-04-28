import { PropsWithChildren, useState } from 'react';
import styles from './accordion.module.css';
import classNames from 'classnames';
import { useAppSelector } from 'app/store/hooks';
import { getSelectedFilterSelector } from 'app/store/filterSlice';

interface IAccordion {
  textButton: string | null;
  selectedItem?: string;
}
export function Accordion({
  textButton,
  children,
  selectedItem,
}: PropsWithChildren<IAccordion>) {
  const [expanded, setExpanded] = useState(false);
  const iconClass = expanded
    ? 'icon-arrowUpSquare_16__0'
    : 'icon-arrowDownSquare_16__0';

  const onToggleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button className={styles.accordionButton} onClick={onToggleClick}>
        <span className={styles.textButton}>{textButton}</span>
        <span className={classNames(styles.icon, iconClass)} />
        <span className={styles.textUnder}>{selectedItem}</span>
      </button>
      {expanded && <div className={styles.content}>{children}</div>}
    </div>
  );
}
