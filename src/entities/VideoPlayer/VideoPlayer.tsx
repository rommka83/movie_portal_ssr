import React from 'react';
import styles from './videoplayer.module.css';
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { ControlsVideoContent } from 'features/ControlsVideoContent';

interface IProps {
  trailer: string;
  age: number;
}
type props = HTMLAttributes<HTMLDivElement> & IProps;

export function VideoPlayer({ trailer, age, className }: props) {
  return (
    <div className={classNames(styles.root, className)}>
      <iframe src={trailer} className={styles.video} allowFullScreen frameBorder='0' />
      <ControlsVideoContent trailer={trailer} age={age} className={styles.list} />
    </div>
  );
}
