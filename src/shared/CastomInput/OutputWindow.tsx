import React from 'react';
import styles from './outputWindow.module.css';
import classNames from 'classnames';

interface ICastomInputProps extends React.ComponentPropsWithoutRef<'div'> {
  name?: string;
  value?: string | number | null;
}

export function OutputWindow({ className, name, value }: ICastomInputProps) {
  return value && value !== '' ? (
    <div className={classNames(styles.label, className)}>
      {name && <p className={styles.labelText}>{name}:</p>}
      <p className={styles.content}>{value}</p>
    </div>
  ) : null;
}
