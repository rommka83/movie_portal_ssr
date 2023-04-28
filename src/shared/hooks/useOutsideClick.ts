import { useEffect, RefObject } from 'react';

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClick = (event: globalThis.MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref, callback]);
};
