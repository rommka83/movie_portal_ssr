import { PropsWithChildren } from 'react';
import styles from './inputsearch.module.css';
import classNames from 'classnames';

interface IInputSearch {
  placeholderText: string;
  className?: string;
}
export function InputSearch({ placeholderText, className }: IInputSearch) {
  return (
    <label className={styles.inputContainer}>
      <input className={classNames({ className }, styles.inputSearch)} type="text" />
      <span className={classNames('icon-search_20__0', styles.icon)} />
      <span className={styles.textPlaceholder}>{placeholderText}</span>
    </label>
  );
}
