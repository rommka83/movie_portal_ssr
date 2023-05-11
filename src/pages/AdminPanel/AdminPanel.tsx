import React, { useState } from 'react';
import styles from './adminpanel.module.css';
import classNames from 'classnames';
import MovieChange from './MovieChange/MovieChange';
import GenreChange from './GenreChange/GenreChange';

function AdminPanel() {
  const [activ, setActiv] = useState<'Movie' | 'Genre'>('Movie');

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.blockTab}>
          <div
            className={classNames(styles.tab, activ === 'Movie' && styles.tabActive)}
            onClick={() => setActiv('Movie')}
          >
            Фильм
          </div>
          <div
            className={classNames(styles.tab, activ === 'Genre' && styles.tabActive)}
            onClick={() => setActiv('Genre')}
          >
            Жанр
          </div>
          <div className={styles.topBorder}></div>
        </div>
        <div className={styles.body}>
          {activ === 'Movie' && <MovieChange />}
          {activ === 'Genre' && <GenreChange />}
        </div>
      </div>
    </div>
  );
}
export default AdminPanel;
