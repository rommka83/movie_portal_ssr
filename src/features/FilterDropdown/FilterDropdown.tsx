import React, { PropsWithChildren, useCallback, useRef, useState } from 'react';
import styles from './filterdropdown.module.css';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import classNames from 'classnames';
import { useTranslation } from '../../i18n';
import { useOutsideClick } from 'shared/hooks/useOutsideClick';

export type FilterType = 'Genres' | 'Countries' | 'Rating' | 'Estimated' | 'Director' | 'Actor';
interface IFilterDropdown {
  title: string;
  type: FilterType;
  position: 'right' | 'left';
  className?: string;
}

export const FilterDropdown = React.memo(
  ({ title, type, position, children, className }: PropsWithChildren<IFilterDropdown>) => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const [hide, setHide] = useState(false);
    const containerRef = useRef(null);
    const iconClass = expanded && !hide ? 'icon-arrowUpSquare_16__0' : 'icon-arrowDownSquare_16__0';

    const onClose = useCallback(() => {
      setHide(true);
      setTimeout(() => {
        setExpanded(false);
      }, 250);
    }, []);

    useOutsideClick(containerRef, onClose);

    const onToggleClick = useCallback(() => {
      if (!expanded) {
        setExpanded(true);
        setHide(false);
      } else {
        onClose();
      }
    }, [expanded, onClose]);

    return (
      <div ref={containerRef} className={classNames(styles.filterDropdownContainer, className)}>
        <ButtonOrLink className={styles.filterButton} variant="third" large onClick={onToggleClick}>
          <div className={styles.textWrapper}>
            <span className={styles.textTop}>{t(`${title}.${type}`)}</span>
            <span className={styles.textUnder}>Выбранный жанр</span>
          </div>

          <span className={iconClass} />
        </ButtonOrLink>
        {expanded && (
          <div
            className={classNames(styles.dropdown, {
              [styles.show]: expanded,
              [styles.hide]: hide,
              [styles.right]: position === 'right',
              [styles.left]: position === 'left',
            })}
          >
            <div className={styles.filterDropdownContent}>{children}</div>
          </div>
        )}
      </div>
    );
  },
);
