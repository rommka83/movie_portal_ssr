import React from 'react';
import Back from 'shared/ui/Back';
import ButtonOrLink from 'shared/ui/ButtonOrLink';
import styles from './authorization.module.css';

export default function Authorization() {
  return (
    <main className='container'>
      <Back>Назад</Back>
      <div className={styles.wrapper}>
        <div className={styles.messege}>
          <h4 className={styles.messegeTitle}>Войдите или зарегестрируйтесь</h4>
          <p className={styles.messegeText}>что бы пользоваться сервисом на любом устройстве</p>
        </div>
        <form className={styles.form}>
          <input type='text' className={styles.inp} />
          <ButtonOrLink className={styles.btn}>Продолжить</ButtonOrLink>
        </form>
      </div>
    </main>
  );
}
