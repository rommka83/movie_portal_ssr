import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { removeTip, tipsSelector } from 'app/store/tipsSlice';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Tip } from 'shared/ui/Tip';
import styles from './tips.module.css';

export const Tips = React.memo(() => {
  const [mounted, setMounted] = useState(false);
  const tips = useAppSelector(tipsSelector);
  const dispatch = useAppDispatch();
  const onTipClose = useCallback(
    (id: string) => {
      dispatch(removeTip(id));
    },
    [dispatch],
  );
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return mounted
    ? ReactDOM.createPortal(
        <div className={styles.container}>
          {tips.map((tip) => (
            <Tip
              key={tip.id}
              id={tip.id}
              type={tip.type}
              title={tip.title}
              text={tip.text}
              onClose={onTipClose}
            />
          ))}
        </div>,
        document.body,
      )
    : null;
});
