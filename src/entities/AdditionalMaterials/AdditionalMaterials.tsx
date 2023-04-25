import React, { HTMLAttributes, useMemo, useRef } from 'react';
import styles from './additionalmaterials.module.css';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import classNames from 'classnames';
import video from '../../temp/test-video.mp4';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from 'app/store/hooks';
import { changeTrailerPlayer } from 'app/store/trailerPlayerSlice';

interface IProps {}
type props = HTMLAttributes<HTMLDivElement> & IProps;

const obj = {
  url: video,
  name: 'трейлер',
};
const arr = Array(10).fill(obj);

export function AdditionalMaterials({ className }: props) {
  const list = useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();

  const itemWidth = useMemo(() => {
    if (list.current === null) return;
    console.log(list.current.getBoundingClientRect().width);

    console.log((list.current.getBoundingClientRect().width - 30) / 4);
    return (list.current.getBoundingClientRect().width - 30) / 4;
  }, [list]);

  const hendleClick = function (e: { url: any }) {
    dispatch(changeTrailerPlayer({ isOpen: true, age: 0, trailer: e.url }));
  };

  return (
    <div className={classNames(styles.root, className)}>
      <SectionTitle
        children={'Трейлеры и доп.материалы'}
        className={styles.title}
      />
      <ul className={styles.list} ref={list}>
        {arr.slice(0, 4).map((el) => {
          return (
            <li
              className={styles.item}
              key={nanoid()}
              style={{ width: `${itemWidth}px` }}
              onClick={() => hendleClick(el)}
            >
              <video src={video} className={styles.video}></video>
              <p className={styles.itemName}>{el.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// {
//   trailers: {
//     url: string;
//     name: string;
//     site?: string;
//     type?: string;
//     size?: number;
//   }[];
//   teasers: {
//     url: string;
//     name: string;
//     site?: string;
//     type?: string;
//     size?: number;
//   }[];
// }
