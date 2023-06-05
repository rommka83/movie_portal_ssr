import React, { PropsWithChildren, useEffect, useRef, useState, MouseEvent } from 'react';
import styles from './carousel.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { useCombinedRefs } from 'shared/hooks/useCombinedRefs.';

interface ICarousel {
  title?: string | null;
  carouselChildrenClassName?: string;
  carouselContainerClassName?: string;
  scrollMultipleItems?: boolean;
  withButton?: boolean;
  withArrow?: boolean;
  href?: string;
}

const LAST_ITEM_COUNT = 1;
const CORRECT_COEFFICIENT = 5;
export const Carousel = React.forwardRef<HTMLDivElement, PropsWithChildren<ICarousel>>(
  (
    {
      title,
      carouselChildrenClassName,
      carouselContainerClassName,
      scrollMultipleItems,
      withButton,
      children,
      withArrow,
      href,
    },
    ref,
  ) => {
    const carouselContentRef = useRef<HTMLDivElement | null>(null);
    const combinedRefs = useCombinedRefs(ref, carouselContentRef);
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
      <div className={classNames(styles.carouselContainer, carouselContainerClassName)} data-cy='carusel'>
        {title && href && (
          <Link href={href} className={styles.titleLink}>
            <h2 className={styles.title}>
              {title}
              {withArrow && <span className={classNames('icon-arrowRight_6x16__0', styles.iconStyle)} />}
            </h2>
          </Link>
        )}
        {title && !href && (
          <h2 className={styles.title}>
            {title}
            {withArrow && <span className={classNames('icon-arrowRight_6x16__0', styles.iconStyle)} />}
          </h2>
        )}
        <div className={styles.wrapper}>
          {withButton && showPrevButton && (
            <button
              className={classNames(styles.prevButton, 'icon-arrowLeft_8x20__0')}
              onClick={onPrevCLick}
            />
          )}
          <div
            ref={combinedRefs}
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
  },
);
