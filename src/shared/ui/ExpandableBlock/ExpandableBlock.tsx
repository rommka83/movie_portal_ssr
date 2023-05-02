import React, { useState } from 'react';
import styles from './expandableblock.module.css';
import { useTranslation } from 'i18n';
import classNames from 'classnames';

interface IExpandableBlock {
  text: string;
}

export const ExpandableBlock = ({ text }: IExpandableBlock) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const onExpand = () => {
    setExpanded((prev) => !prev);
  };
  const buttonText = expanded ? t('CatalogPageHeader.Collapse') : t('CatalogPageHeader.Expand');
  return (
    <div className={styles.container}>
      <p
        className={classNames(styles.text, {
          [styles.expanded]: expanded,
        })}
        dangerouslySetInnerHTML={{ __html: text }}
      />

      <button className={styles.expandButton} onClick={onExpand}>
        {buttonText}
      </button>
    </div>
  );
};
