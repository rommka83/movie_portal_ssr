import { useState, ChangeEvent } from 'react';
import styles from './inputrange.module.css';
import { useTranslation } from 'react-i18next';

interface IInputRange {
  startValue: string | number;
  maxValue: string | number;
  minValue: string | number;
  formatter?: (value: string | number) => string | number;
  className?: string;
  onChange: (value: string) => void;
}
export function InputRange({ startValue, maxValue, minValue, formatter, className, onChange }: IInputRange) {
  const { t } = useTranslation();
  const [value, setValue] = useState(startValue);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setValue(value);
    onChange(value);
  };

  const currentValue = formatter ? formatter(value) : value;

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.rangeCount}>
          {t('FilterPanel.from')} {currentValue}
        </span>
        <input
          className={className}
          type='range'
          min={minValue}
          max={maxValue}
          step='1'
          value={value}
          default-value={startValue}
          onChange={onChangeHandler}
        />
      </label>
    </div>
  );
}
