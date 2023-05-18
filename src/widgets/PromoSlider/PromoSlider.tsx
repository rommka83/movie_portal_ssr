import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './promoSlider.module.css';
import { PromoSlide } from 'entities/PromoSlide';
import { UseMedia } from 'shared/hooks/useMedia';
import DB from '../../../static/promo_DB.json';
import classNames from 'classnames';

const CARD_HEIGHT_COEFFICIENT_TABLET = 1.45;
const CARD_HEIGHT_COEFFICIENT_DESKTOP = 0.45;

export const PromoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tablet = UseMedia('(max-width:800px)');
  const container = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrolRight] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState<-1 | 0 | 1>(0);

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
    return tablet ? cardWidth * CARD_HEIGHT_COEFFICIENT_TABLET : cardWidth * CARD_HEIGHT_COEFFICIENT_DESKTOP;
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

    if (touchEnd === 1) {
      clearInterval(interval);

      hendleScrollLeft();
      interval = setInterval(() => {
        hendleScrollLeft();
      }, 8000);
      setTouchStart(0);
      setTouchEnd(0);
    }

    if (touchEnd === -1) {
      clearInterval(interval);

      hendleScrollRight();
      interval = setInterval(() => {
        hendleScrollLeft();
      }, 8000);
      setTouchStart(0);
      setTouchEnd(0);
    }

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
  }, [cardWidth, scrollLeft, scrollRight, tablet, touchEnd]);

  return (
    <section className={styles.root}>
      <div
        className={classNames(styles.slider, 'container')}
        style={{ height: `${sliderHight}px` }}
        ref={container}
      >
        <div key={prevImgIndex} className={classNames(styles.sliderImg, styles.sliderImgPrev)}>
          <PromoSlide
            title={DB[prevImgIndex].title}
            picture={!tablet ? DB[prevImgIndex].picture : DB[prevImgIndex].pictureMobile}
            description={DB[prevImgIndex].description}
            width={cardWidth}
          />
        </div>
        <div
          key={activeIndex}
          className={classNames(styles.sliderImg, styles.currentSlideImg)}
          onTouchStart={(e) => setTouchStart(e.changedTouches[0].clientX)}
          onTouchEnd={(e) => {
            touchStart > e.changedTouches[0].clientX ? setTouchEnd(1) : setTouchEnd(-1);
          }}
        >
          <PromoSlide
            title={DB[activeIndex].title}
            picture={!tablet ? DB[activeIndex].picture : DB[activeIndex].pictureMobile}
            description={DB[activeIndex].description}
            width={cardWidth}
          />
        </div>
        <div key={nextImgIndex} className={classNames(styles.sliderImg, styles.sliderImgNext)}>
          <PromoSlide
            title={DB[nextImgIndex].title}
            picture={!tablet ? DB[nextImgIndex].picture : DB[nextImgIndex].pictureMobile}
            description={DB[nextImgIndex].description}
            width={cardWidth}
          />
        </div>
        <div key={lastImgIndex} className={classNames(styles.sliderImg, styles.sliderImgLast)}>
          <PromoSlide
            title={DB[lastImgIndex].title}
            picture={tablet ? DB[lastImgIndex].picture : DB[lastImgIndex].pictureMobile}
            description={DB[lastImgIndex].description}
            width={cardWidth}
          />
        </div>
        <button
          className={classNames(styles.btnControls, styles.btnControlsLeft, 'icon-arrowLeft_12x32__0')}
          onClick={() => setScrollLeft(true)}
        ></button>
        <button
          className={classNames(styles.btnControls, styles.btnControlsRight, 'icon-arrowRight_12x32__0')}
          onClick={() => setScrolRight(true)}
        ></button>
      </div>
    </section>
  );
};
