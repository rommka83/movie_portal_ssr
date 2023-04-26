import React from 'react';
import styles from './actorscreatorsmodal.module.css';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { Back } from 'shared/ui/Back/Back';
import { openClose } from 'app/store/ActorsCreatorsModalSlice';

export function ActorsCreatorsModal() {
  const isOpen = useAppSelector(
    (store) => store.ActorsCreatorsModal.data.isOpen
  );
  const dispatch = useAppDispatch();

  return isOpen ? (
    <div className={styles.root}>
      <Back
        className={styles.back}
        f={() => {
          dispatch(openClose());
        }}
      >
        Назад
      </Back>
      <div className={styles.wrapper}>
        <h2>jhgjhgjhgjhg</h2>
      </div>
    </div>
  ) : null;
}
