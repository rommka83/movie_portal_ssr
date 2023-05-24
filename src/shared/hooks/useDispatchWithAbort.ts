import { AsyncThunkAction } from '@reduxjs/toolkit';
import { useAppDispatch } from 'app/store/hooks';
import { useCallback, useEffect, useRef } from 'react';
export const useDispatchWithAbort = () => {
  const dispatch = useAppDispatch();
  const abortRef = useRef<((reason?: string) => void) | null>(null);
  const dispatchWithAbort = useCallback(
    <T, Args>(asyncThunkAction: AsyncThunkAction<T, Args, Object>) => {
      if (abortRef.current) {
        abortRef.current();
      }
      const promise = dispatch(asyncThunkAction);
      abortRef.current = promise.abort;
      return promise;
    },
    [dispatch, abortRef],
  );

  useEffect(() => {
    return () => {
      if (abortRef.current) {
        abortRef.current();
      }
    };
  }, [abortRef]);

  return dispatchWithAbort;
};
