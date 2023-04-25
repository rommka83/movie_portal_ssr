import Footer from '../../widgets/Footer';
import Header from '../../widgets/Header';
import styles from './general.module.css';
import { FC, HTMLAttributes } from 'react';

export const General: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div className={styles.general}>
      {/* <Header /> */}
      <h1>Heder</h1>
      <main className={styles.main}>{children}</main>
      <h1>Footer</h1>

      {/* <Footer /> */}
    </div>
  );
};
