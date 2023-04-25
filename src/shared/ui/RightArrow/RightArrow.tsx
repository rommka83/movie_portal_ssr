import React from 'react';
import styles from './rightarrow.module.css';
import classNames from 'classnames';

interface IProps {
  size: 'big' | 'small';
  color?: 'white' | 'black';
  onClick?: () => void;
  className?: string
}

export function RightArrow({ size = 'big', color = 'white', onClick, className }: IProps) {
  const classes = classNames(styles.RightArrow, className, {
    [styles.big]: size === 'big',
    [styles.small]: size !== 'big',
  });

  return (
    <button className={classes} onClick={onClick} data-testid='RightArrow'>
      <svg
        viewBox='0 0 512 512'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        fill={
          color === 'white' ? 'var(--white)' : 'var(--main-background-color)'
        }
      >
        <polygon points='160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 ' />
      </svg>
    </button>
  );
}
