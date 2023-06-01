import { MutableRefObject, useEffect, useRef } from 'react';

export function useCombinedRefs<T>(
  ...refs: Array<((instance: T | null) => void) | MutableRefObject<T | null> | null>
) {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
