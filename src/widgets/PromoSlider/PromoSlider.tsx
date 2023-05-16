import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './promoSlider.module.css';
import { PromoSlide } from 'entities/PromoSlide';
import { UseMedia } from 'shared/hooks/useMedia';
import DB from '../../../static/promo_DB.json';
import classNames from 'classnames';

export const PromoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tablet = UseMedia('(max-width:800px)');
  const container = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrolRight] = useState(false);

  const { prevImgIndex, nextImgIndex, lastImgIndex } = useMemo(() => {
    let prevImgIndex;
    let nextImgIndex;
    let lastImgIndex;

    prevImgIndex = activeIndex ? activeIndex - 1 : DB.length - 1;
    nextImgIndex = activeIndex === DB.length - 1 ? 0 : activeIndex + 1;

    if (activeIndex === DB.length - 1) {
      lastImgIndex = 1;
    } else if (activeIndex === DB.length - 2) {
      lastImgIndex = 0;
    } else lastImgIndex = activeIndex + 2;

    return { prevImgIndex, nextImgIndex, lastImgIndex };
  }, [activeIndex]);

  const hendleScrollLeft = function () {
    setActiveIndex((current) => {
      const res = current === DB.length - 1 ? 0 : current + 1;
      return res;
    });
  };
  const hendleScrollRight = function () {
    setActiveIndex((current) => {
      const res = current ? current - 1 : DB.length - 1;
      return res;
    });
  };

  const sliderHight = useMemo(() => {
    return tablet ? cardWidth * 1.45 : cardWidth * 0.45;
  }, [tablet, cardWidth]);

  useEffect(() => {
    if (container.current === null) return;
    const widthContainer = container.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width !== cardWidth) {
          setCardWidth(entry.contentRect.width);
        }
      }
    });
    resizeObserver.observe(container.current);

    let interval = setInterval(() => {
      setScrollLeft(false);
      hendleScrollLeft();
    }, 8000);

    if (scrollLeft) {
      clearInterval(interval);
      setScrollLeft(false);
      hendleScrollRight();
      interval = setInterval(() => {
        hendleScrollLeft();
      }, 8000);
    }

    if (scrollRight) {
      clearInterval(interval);
      setScrolRight(false);
      hendleScrollLeft();
      interval = setInterval(() => {
        hendleScrollLeft();
      }, 8000);
    }

    return () => {
      widthContainer && resizeObserver.unobserve(widthContainer);
      clearInterval(interval);
    };
  }, [cardWidth, scrollLeft, scrollRight]);

  return (
    <section className={styles.root}>
      <div className={classNames(styles.slider, 'container')} style={{ height: `${sliderHight}px` }} ref={container}>
        <div key={prevImgIndex} className={classNames(styles.sliderImg, styles.sliderImgPrev)}>
          <PromoSlide
            title={DB[prevImgIndex].title}
            picture={tablet ? DB[prevImgIndex].pictureMobile : DB[prevImgIndex].picture}
            description={DB[prevImgIndex].description}
            width={cardWidth}
          />
        </div>
        <div key={activeIndex} className={classNames(styles.sliderImg, styles.currentSlideImg)}>
          <PromoSlide
            title={DB[activeIndex].title}
            picture={tablet ? DB[activeIndex].pictureMobile : DB[activeIndex].picture}
            description={DB[activeIndex].description}
            width={cardWidth}
          />
        </div>
        <div key={nextImgIndex} className={classNames(styles.sliderImg, styles.sliderImgNext)}>
          <PromoSlide
            title={DB[nextImgIndex].title}
            picture={tablet ? DB[nextImgIndex].pictureMobile : DB[nextImgIndex].picture}
            description={DB[nextImgIndex].description}
            width={cardWidth}
          />
        </div>
        <div key={lastImgIndex} className={classNames(styles.sliderImg, styles.sliderImgLast)}>
          <PromoSlide
            title={DB[lastImgIndex].title}
            picture={tablet ? DB[lastImgIndex].pictureMobile : DB[lastImgIndex].picture}
            description={DB[lastImgIndex].description}
            width={cardWidth}
          />
        </div>
        <div
          className={classNames(styles.btnControls, styles.btnControlsLeft, 'icon-arrowLeft_12x32__0')}
          onClick={() => setScrollLeft(true)}
        ></div>
        <div
          className={classNames(styles.btnControls, styles.btnControlsRight, 'icon-arrowRight_12x32__0')}
          onClick={() => setScrolRight(true)}
        ></div>
      </div>
    </section>
  );
};
