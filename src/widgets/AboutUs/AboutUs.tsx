import React, { useState } from 'react';
import styles from './aboutus.module.css';
import classNames from 'classnames';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';

interface IProps extends React.ComponentPropsWithoutRef<'div'> {}

export function AboutUs({ className }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={classNames(styles.root, className)}>
      <SectionTitle>
        <p className={styles.title}>
          Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие
        </p>
      </SectionTitle>
      <p className={classNames(styles.content, !isOpen && styles.contentMini)}>
        Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из
        них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет
        буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу
        телепередач – у посетителей нашего ресурса гораздо больше возможностей.
        <br />
        Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч
        отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты
        с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount,
        MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.
      </p>
      {isOpen ? (
        <p className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
          Свернуть
        </p>
      ) : (
        <p className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
          Развернуть
        </p>
      )}
    </section>
  );
}
