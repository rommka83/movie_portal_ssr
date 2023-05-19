import { PropsWithChildren, useCallback, useState } from 'react';
import styles from './accordion.module.css';
import classNames from 'classnames';
import { AccordionDropdownProvider } from './AccordionContext';

interface IAccordion {
  textButton: string | null;
  selectedItem?: string | number | null;
  buttonIconClass?: string;
}
export function Accordion({
  textButton,
  children,
  selectedItem,
  buttonIconClass,
}: PropsWithChildren<IAccordion>) {
  const [expanded, setExpanded] = useState(false);
  const iconClass = expanded ? 'icon-arrowUpSquare_16__0' : 'icon-arrowDownSquare_16__0';

  const onClose = useCallback(() => {
    setExpanded(false);
  }, []);

  const onToggleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button className={styles.accordionButton} onClick={onToggleClick}>
        <div className={styles.buttonInnerContainer}>
          <span className={buttonIconClass} />
          <span className={styles.textButton}>{textButton}</span>
          <span className={classNames(styles.icon, iconClass)} />
        </div>

        {!expanded && selectedItem && <span className={styles.textUnder}>{selectedItem}</span>}
      </button>
      {expanded && (
        <div className={styles.content}>
          <AccordionDropdownProvider value={onClose}>{children}</AccordionDropdownProvider>
        </div>
      )}
    </div>
  );
}
