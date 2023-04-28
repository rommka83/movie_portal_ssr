import React, { useState } from 'react';
import styles from './filterinputrange.module.css';
import { InputRange } from 'shared/ui/InputRange';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'app/store/hooks';
import { addInputRangeFilter } from 'app/store/filterSlice';
import { useDropdownContext } from 'features/FilterDropdown/FilterDropdownContext';

interface IFilterInputRange {
  formatter: (value: string | number) => string | number;
  className: string;
  startValue: string;
  maxValue: string;
  minValue: string;
  type: 'rating' | 'votes';
}
export const FilterInputRange = React.memo(
  ({
    formatter,
    className,
    startValue,
    maxValue,
    minValue,
    type,
  }: IFilterInputRange) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');
    const dropdownClose = useDropdownContext();
    const onChange = (value: string) => {
      setValue(value);
    };

    const onClick = () => {
      const formattedValue = type === 'rating' ? +value / 10 : +value * 1000;
      dispatch(addInputRangeFilter({ type, value: formattedValue }));
      setValue('');
      dropdownClose && dropdownClose();
    };

    return (
      <div className={styles.container}>
        <InputRange
          startValue={startValue}
          maxValue={maxValue}
          minValue={minValue}
          formatter={formatter}
          className={className}
          onChange={onChange}
        />
        <button
          className={classNames(styles.confirmButton, {
            [styles.active]: value,
          })}
          onClick={onClick}
        >
          {t('FilterPanel.Apply')}
          <span
            className={classNames('icon-check_16__0', styles.icon, {
              [styles.active]: value,
            })}
          />
        </button>
      </div>
    );
  }
);
