import { useState, ChangeEvent, useEffect } from 'react';
import styles from './inputsearch.module.css';
import classNames from 'classnames';

interface IInputSearch {
  placeholderText: string;
  className?: string;
  onChange: (value: string) => void;
  searchValue: string;
  onSearchClick: () => void;
}
export function InputSearch({
  placeholderText,
  className,
  onChange,
  searchValue,
  onSearchClick,
}: IInputSearch) {
  const [value, setValue] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setValue(value);
    onChange(value);
  };
  useEffect(() => {
    if (searchValue) {
      setValue(searchValue);
    }
  }, [searchValue]);
  return (
    <div>
      <label className={styles.inputContainer}>
        <input
          className={classNames({ className }, styles.inputSearch)}
          type='text'
          onChange={onChangeHandler}
          value={value}
          placeholder=' '
        />
        <button
          className={classNames('icon-search_20__0', styles.searchButton, {
            [styles.activeIcon]: searchValue,
          })}
          disabled={!searchValue}
          onClick={onSearchClick}
        />
        <span className={styles.textPlaceholder}>{placeholderText}</span>
      </label>
    </div>
  );
}
