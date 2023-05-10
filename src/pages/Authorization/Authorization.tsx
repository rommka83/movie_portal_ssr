import React from 'react';
import styles from './authorization.module.css';
import { useForm } from 'react-hook-form';

export function Authorization() {

  const { register, handleSubmit, setError, reset, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      surname: '',
      phone: '',
      selDescription: '',

    },
    mode: 'onChange'
  })

  const onSubmit = async (values: any) => {
    // const data = await dispatch(fetchRegister(values))
    // if (!data.payload) {
    // alert('Не удалось зарегистрироваться')
    // }

    // if ('token' in data.payload) {
    // window.localStorage.setItem('token', data.payload.token)
    // }
    console.log(values);
    reset()
  }

  // if (isAuth) {
  // return <Navigate to='/' />
  // }


  return <div className={styles.body}>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <input
        className={styles.input}
        type="text"
        placeholder='Введите email'
        {...register('email', { required: 'Укажите почту' })}
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      <input
        className={styles.input}
        type="password"
        placeholder='Введите пароль'
        {...register('password', { required: 'Введите пароль' })}
      />
      {errors.password && <p className={styles.error}>{errors.password.message}</p>}
      <input
        className={styles.input}
        type="text"
        placeholder='Введите Имя'
        {...register('name', { required: 'Введите Имя' })}
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      <input
        className={styles.input}
        type="text"
        placeholder='Введите Фамилию'
        {...register('surname', { required: 'Введите Фамилию' })}
      />
      {errors.surname && <p className={styles.error}>{errors.surname.message}</p>}
      <input
        className={styles.input}
        type="number"
        placeholder='Введите телефон'
        {...register('phone')}
      />
      <input
        className={styles.input}
        type="text"
        placeholder='О себе'
        {...register('selDescription')}
      />
      <button className={styles.btn}>Войти</button>
    </form>
  </div>;
}
