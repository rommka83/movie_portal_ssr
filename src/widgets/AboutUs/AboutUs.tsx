import React from 'react';
import styles from './aboutus.module.css';
import classNames from 'classnames';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { ExpandableBlock } from 'shared/ui/ExpandableBlock';
import { useTranslation } from 'react-i18next';

interface IProps extends React.ComponentPropsWithoutRef<'div'> {}

export function AboutUs({ className }: IProps) {
  const { t } = useTranslation();

  return (
    <section className={classNames(styles.root, className)}>
      <SectionTitle>
        <p className={styles.title}>{t('AboutUs.title')}</p>
      </SectionTitle>
      <ExpandableBlock text={t('AboutUs.text')} />
    </section>
  );
}
