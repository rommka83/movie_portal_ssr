import React, { useCallback, useState } from 'react';
import styles from './catalogpage.module.css';
import classNames from 'classnames';
import { CatalogPageHeader } from 'widgets/CatalogPageHeader';
import { Accordion } from 'shared/ui/Accordion';
import { SortDropdown } from 'features/SortDropdown';
import { FilterPanelDesktop } from 'widgets/FilterPanel';
import { useTranslation } from 'i18n';

export function CatalogPage() {
  const { t } = useTranslation();
  const [closed, setClosed] = useState(false);
  const onCloseSortDropdown = useCallback(() => {
    setClosed(true);
  }, []);
  const onClose = useCallback(() => {
    setClosed(false);
  }, []);
  return (
    <div className={styles.container}>
      <CatalogPageHeader titleText={t(`CatalogPageHeader.MoviesWatchOnline`)} />

      <div className="container">
        <Accordion
          onClose={onClose}
          closed={closed}
          textButton={t('CatalogPageHeader.Sort')}
          buttonIconClass={classNames(styles.buttonIcon, 'icon-sort_16__0')}
        >
          <SortDropdown onCloseSortDropdown={onCloseSortDropdown} />
        </Accordion>
        <FilterPanelDesktop />
      </div>
    </div>
  );
}
