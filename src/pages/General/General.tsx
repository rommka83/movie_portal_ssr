import Header from 'widgets/Header';
import Footer from '../../widgets/Footer';
import styles from './general.module.css';
import { FC, HTMLAttributes } from 'react';
import Head from 'next/head';

const General: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div className={styles.general}>
      <Head>
        <title>Movie portal ssr</title>
        <link rel='icon' type='image/svg+xml' href='/static/favicon.svg' />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default General;
