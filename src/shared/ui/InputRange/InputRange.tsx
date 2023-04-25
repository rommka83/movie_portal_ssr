import { useState, ChangeEvent } from 'react';
import styles from './inputrange.module.css';

interface IInputRange {
  startValue: string | number;
  maxValue: string | number;
  minValue: string | number;
  formatter?: (value: string | number) => string | number;
  className?: string;
}
export function InputRange({
  startValue,
  maxValue,
  minValue,
  formatter,
  className,
}: IInputRange) {
  const [value, setValue] = useState(startValue);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const currentValue = formatter ? formatter(value) : value;
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.rangeCount}> от {currentValue} </span>
        <input
          className={className}
          type='range'
          min={minValue}
          max={maxValue}
          step='1'
          value={value}
          default-value={startValue}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
