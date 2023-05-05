import React, { HTMLAttributes, PropsWithChildren, useState } from 'react';
import styles from './castomselect.module.css';
import classNames from 'classnames';
import { nanoid } from '@reduxjs/toolkit';

interface ICastomSelectProps {
  placeholder: string;
  list: string[];
  func: (val: string) => void;
}

export function CastomSelect({
  list,
  placeholder,
  func,
  className,
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement> & ICastomSelectProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(placeholder);

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.head} onClick={() => setIsOpen(!isOpen)}>
        <input type="text" className={classNames(styles.inp)} readOnly value={value} />
        <span
          className={classNames(
            styles.arrow,
            isOpen ? 'icon-arrowUpSquare_16__0' : 'icon-arrowDownSquare_16__0',
          )}
        ></span>
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {list.map((el) => {
            return (
              <li
                className={styles.dropdownItem}
                onClick={() => {
                  setIsOpen(false);
                  setValue(el);
                  func(el);
                }}
                key={nanoid()}
              >
                {el}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
