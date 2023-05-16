import React from 'react';
import styles from './authorization.module.css';
import { useForm } from 'react-hook-form';
import { fetchRegister } from 'app/store/authReducer/authCreators';
import { useDispatch } from 'react-redux';
import { UserType } from 'app/store/authReducer/authSlice';

// 1.Сделать красивие
// 2.Разбить на компоненты
// 3.Сделать авторизацию
// 4.чтобы при регистрации проиходил редирект и авторизация
// 5.Сделать лайблы к инпута
// 
// 




export function Authorization() {

  const dispatch = useDispatch()


  const { register, handleSubmit, setError, reset, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      surname: '',
      phoneNumber: '',
      selfDescription: '',

    },
    mode: 'onBlur'
  })

  const onSubmit = async (values: UserType) => {
    // @ts-ignore
    const data = await dispatch(fetchRegister(values))
    if (!data.payload) {
      alert('Не удалось зарегистрироваться')
    }

    // if ('token' in data.payload) {
    // window.localStorage.setItem('token', data.payload.token)
    // }
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
        {...register('password', { required: 'Введите пароль', minLength: { value: 8, message: 'Слишком короткий пароль' } })}
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
        {...register('phoneNumber')}
      />
      <input
        className={styles.input}
        type="text"
        placeholder='О себе'
        {...register('selfDescription')}
      />
      <button className={styles.btn}>Войти</button>
    </form>
  </div>;
}
