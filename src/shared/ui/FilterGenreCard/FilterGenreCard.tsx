import styles from './filtergenrecard.module.css';
import classNames from 'classnames';
interface IFilterGenreCard {
  caption: string;
  genre: string;
  className?: string;
  iconClassName?: string;
  containerClassName?: string;
}
export function FilterGenreCard({
  caption,
  genre,
  className,
  iconClassName,
  containerClassName,
}: IFilterGenreCard) {
  return (
    <div className={classNames(styles.container, containerClassName)}>
      <div className={classNames(styles.containerInner, className)}>
        <div className={classNames(styles.icon, `icon-genre_${genre}_24__0`, iconClassName)} />
        <span className={styles.caption}>{caption}</span>
      </div>
    </div>
  );
}
