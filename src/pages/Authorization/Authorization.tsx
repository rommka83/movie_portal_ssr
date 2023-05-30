import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { registration } from 'app/store/user';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import Back from 'shared/ui/Back';
import ButtonOrLink from 'shared/ui/ButtonOrLink';
import styles from './authorization.module.css';

const mail_pattern = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
const name_pattern = /[a-zа-я]{2,30}/i;
const password_pattern = /.{8,30}/i;

export default function Authorization() {
  const [email, setEmail] = useState('example11@gmail.com');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('Иванов1');
  const [phoneNumber, setphoneNumber] = useState('+79991234567');
  const [selfDescription, setSelfDescription] = useState('ss');
  const [autorisation, setAutorisation] = useState(true);
  const [mailPattern, setMailPattern] = useState(true);
  const [namePattern, setNamePattern] = useState(true);
  const [surNamePattern, setSurNamePattern] = useState(true);
  const [passwordPattern, setPasswordPattern] = useState(true);

  const dispach = useAppDispatch();
  const { status, profileId, error } = useAppSelector((state) => state.userResponce);

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

  const hendleSubmit = function (ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    console.log(autorisation);
    if (autorisation) {
      setNamePattern(name_pattern.test(name));
      setPasswordPattern(password_pattern.test(password));
      const _namePattern = name_pattern.test(name);
      const _passwordPattern = password_pattern.test(password);

      if (_namePattern && _passwordPattern) {
        // dispach(login(user));
        setName('');
        setPassword('');
      }
    } else {
      setNamePattern(name_pattern.test(name));
      setSurNamePattern(name_pattern.test(surname));
      setPasswordPattern(password_pattern.test(password));
      setMailPattern(mail_pattern.test(email));
      const _mailPattern = mail_pattern.test(email);
      const _namePattern = name_pattern.test(name);
      const _passwordPattern = password_pattern.test(password);
      const _surNamePattern = name_pattern.test(surname);

      console.log(_mailPattern && _namePattern && _surNamePattern && _passwordPattern);

      if (_mailPattern && _namePattern && _surNamePattern && _passwordPattern) {
        // dispach(registration(newUser));
        setName('');
        setPassword('');
        setEmail('');
        setSurname('');
        setphoneNumber('');
        setSelfDescription('');
      }
    }
  };

  return (
    <main className='container'>
      <Back>Назад</Back>
      <div className={styles.wrapper}>
        <div className={styles.blockBtnActionChoice}>
          <div
            className={classNames(styles.btnActionChoice, autorisation && styles.btnActionChoiceActive)}
            onClick={() => setAutorisation(true)}
          >
            Вход
          </div>
          <div
            className={classNames(styles.btnActionChoice, !autorisation && styles.btnActionChoiceActive)}
            onClick={() => setAutorisation(false)}
          >
            Регистрация
          </div>
        </div>
        <div className={styles.formWrapper}>
          {autorisation ? (
            <form className={styles.form} onSubmit={(e) => hendleSubmit(e)}>
              <p className={styles.validateErr}>
                {!namePattern && 'Имя должно содержать от 2х до 30 русских или латинских букв'}
              </p>
              <input
                onChange={(e) => {
                  setNamePattern(true);
                  setName(e.target.value);
                }}
                value={name}
                type='text'
                className={styles.inp}
                placeholder='введите имя'
              />
              <p className={styles.validateErr}>
                {!passwordPattern && 'Пароль должен содержать от 8х до 30 любых символов'}
              </p>
              <input
                onChange={(e) => {
                  setPasswordPattern(true);
                  setPassword(e.target.value);
                }}
                value={password}
                type='password'
                className={styles.inp}
                placeholder='введите пароль'
              />
              <ButtonOrLink className={styles.btn}>Продолжить</ButtonOrLink>
            </form>
          ) : (
            <form className={styles.form} onSubmit={(e) => hendleSubmit(e)}>
              <p className={styles.validateErr}>
                {!namePattern && 'Имя должно содержать от 2х до 30 русских или латинских букв'}
              </p>
              <input
                onChange={(e) => {
                  setNamePattern(true);
                  setName(e.target.value);
                }}
                value={name}
                type='text'
                className={styles.inp}
                placeholder='введите имя'
              />
              <p className={styles.validateErr}>
                {!surNamePattern && 'Фамилия должна содержать от 2х до 30 русских или латинских букв'}
              </p>
              <input
                onChange={(e) => {
                  setSurNamePattern(true);
                  setSurname(e.target.value);
                }}
                value={surname}
                type='text'
                className={styles.inp}
                placeholder='введите фамилию'
              />
              <p className={styles.validateErr}>{!mailPattern && 'Убедитесь, что почта введена правильно'}</p>
              <input
                onChange={(e) => {
                  setMailPattern(true);
                  setEmail(e.target.value);
                }}
                value={email}
                type='text'
                className={styles.inp}
                placeholder='введите Email'
              />
              <p className={styles.validateErr}>
                {!passwordPattern && 'Пароль должен содержать от 8х до 30 любых символов'}
              </p>
              <input
                onChange={(e) => {
                  setPasswordPattern(true);
                  setPassword(e.target.value);
                }}
                value={password}
                type='password'
                className={styles.inp}
                placeholder='введите пароль'
              />
              <p className={styles.validateErr}></p>
              <input
                onChange={(e) => setphoneNumber(e.target.value)}
                value={phoneNumber}
                type='text'
                className={styles.inp}
                placeholder='введите телефон'
              />{' '}
              <p className={styles.validateErr}></p>
              <input
                onChange={(e) => setSelfDescription(e.target.value)}
                value={selfDescription}
                type='text'
                className={styles.inp}
                placeholder='коротко опишите себя'
              />
              <ButtonOrLink className={styles.btn}>Продолжить</ButtonOrLink>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
