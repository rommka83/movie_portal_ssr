import { PropsWithChildren, useEffect, useRef, useState, MouseEvent } from 'react';
import styles from './carousel.module.css';
import classNames from 'classnames';

interface ICarousel {
  title?: string | null;
  carouselChildrenClassName?: string;
  carouselContainerClassName?: string;
  scrollMultipleItems?: boolean;
  withButton?: boolean;
  withArrow?: boolean;
  reff?: React.LegacyRef<HTMLDivElement>;
  scrollObserver?: () => void;
}

const LAST_ITEM_COUNT = 1;
const CORRECT_COEFFICIENT = 5;
export function Carousel({
  title,
  carouselChildrenClassName,
  carouselContainerClassName,
  scrollMultipleItems,
  withButton,
  children,
  withArrow,
  reff,
  scrollObserver,
}: PropsWithChildren<ICarousel>) {
  const carouselContentRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const contentWidthRef = useRef(0);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const onNextCLick = () => {
    carouselContentRef.current?.scrollBy({
      left: offsetRef.current,
      behavior: 'smooth',
    });
  };
  const onPrevCLick = () => {
    carouselContentRef.current?.scrollBy({
      left: -offsetRef.current,
      behavior: 'smooth',
    });
  };

  const onContentScroll = (event: MouseEvent<HTMLDivElement>) => {
    event && scrollObserver && scrollObserver();

    const scrollLeft = event.currentTarget.scrollLeft;
    const scrollWidth = event.currentTarget.scrollWidth - contentWidthRef.current;
    if (scrollLeft > 0) {
      setShowPrevButton(true);
    } else {
      setShowPrevButton(false);
    }
    if (scrollLeft + CORRECT_COEFFICIENT > scrollWidth) {
      setShowNextButton(false);
    } else {
      setShowNextButton(true);
    }
  };

  useEffect(() => {
    const carouselContent = carouselContentRef.current;
    let carouselContentWidth = 0;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const carouselContentEntry of entries) {
        if (carouselContentEntry.borderBoxSize) {
          carouselContentWidth = carouselContentEntry.borderBoxSize[0].inlineSize;
          contentWidthRef.current = carouselContentWidth;
          const carouselItemWidth = carouselContentEntry.target.children[0].getBoundingClientRect().width;
          const visibleItemsCount = Math.floor(carouselContentWidth / carouselItemWidth);
          const scrollItemsCount = scrollMultipleItems ? visibleItemsCount - LAST_ITEM_COUNT : 1;
          offsetRef.current = carouselItemWidth * scrollItemsCount;
          if (withButton) {
            const scrollWidth = carouselContentEntry.target.scrollWidth;
            const scrollLeft = carouselContentEntry.target.scrollLeft;

            if (Math.ceil(carouselContentWidth) >= scrollWidth) {
              setShowNextButton(false);
            } else if (scrollLeft + CORRECT_COEFFICIENT < scrollWidth - carouselContentWidth) {
              setShowNextButton(true);
            }
          }
        }
      }
    });
    if (carouselContent) {
      resizeObserver.observe(carouselContent);
    }
    return () => {
      carouselContent && resizeObserver.unobserve(carouselContent);
    };
  }, [carouselContentRef, offsetRef, scrollMultipleItems, withButton]);

  return (
    <div className={classNames(styles.carouselContainer, carouselContainerClassName)} ref={reff}>
      {title && (
        <h2 className={styles.title}>
          {title}
          {withArrow && <span className={classNames('icon-arrowRight_6x16__0', styles.iconStyle)} />}
        </h2>
      )}
      <div className={styles.wrapper}>
        {withButton && showPrevButton && (
          <button className={classNames(styles.prevButton, 'icon-arrowLeft_8x20__0')} onClick={onPrevCLick} />
        )}
        <div
          ref={carouselContentRef}
          onScroll={onContentScroll}
          className={classNames(styles.carouselContent, carouselChildrenClassName)}
        >
          {children}
        </div>
        {withButton && showNextButton && (
          <button
            className={classNames(styles.nextButton, 'icon-arrowRight_8x20__0')}
            onClick={onNextCLick}
          />
        )}
      </div>
    </div>
  );
}
