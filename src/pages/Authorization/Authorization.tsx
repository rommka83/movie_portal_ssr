import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { login } from 'app/store/user';
import React, { useEffect, useMemo, useState } from 'react';
import Back from 'shared/ui/Back';
import ButtonOrLink from 'shared/ui/ButtonOrLink';
import styles from './authorization.module.css';

export default function Authorization() {
  const [email, setEmail] = useState('example11@gmail.com');
  const [password, setPassword] = useState('pass12345');
  const [name, setName] = useState('Иван1');
  const [surname, setSurname] = useState('Иванов1');
  const [phoneNumber, setphoneNumber] = useState('+79991234567');
  const [selfDescription, setSelfDescription] = useState('ss');

  const dispach = useAppDispatch();
  const { status, profileId } = useAppSelector((state) => state.userResponce);

  const newUser = useMemo(() => {
    return {
      email,
      password,
      name,
      surname,
      phoneNumber,
      selfDescription,
    };
  }, [email, name, password, phoneNumber, selfDescription, surname]);

  return (
    <main className='container'>
      <Back>Назад</Back>
      <div className={styles.wrapper}>
        <div className={styles.messege}>
          <h4 className={styles.messegeTitle}>Войдите или зарегестрируйтесь</h4>
          <p className={styles.messegeText}>что бы пользоваться сервисом на любом устройстве</p>
        </div>
        <p>{`status - ${status}`}</p>
        <p>{`profileId - ${profileId}`}</p>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            dispach(login(newUser));
          }}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='text'
            className={styles.inp}
            placeholder='введите Email'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            className={styles.inp}
            placeholder='введите пароль'
          />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
            className={styles.inp}
            placeholder='введите имя'
          />
          <input
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            type='text'
            className={styles.inp}
            placeholder='введите фамилию'
          />
          <input
            onChange={(e) => setphoneNumber(e.target.value)}
            value={phoneNumber}
            type='text'
            className={styles.inp}
            placeholder='введите телефон'
          />
          <input
            onChange={(e) => setSelfDescription(e.target.value)}
            value={selfDescription}
            type='text'
            className={styles.inp}
            placeholder='коротко опишите себя'
          />

          <ButtonOrLink className={styles.btn}>Продолжить</ButtonOrLink>
        </form>
      </div>
    </main>
  );
}
