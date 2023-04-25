import Footer from '../../widgets/Footer';
import Header from '../../widgets/Header';
import styles from './general.module.css';
import { FC, HTMLAttributes } from 'react';

export const General: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div className={styles.general}>
      {/* <Header /> */}
      <main className={styles.main}>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
