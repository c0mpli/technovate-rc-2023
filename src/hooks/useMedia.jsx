import {useEffect} from 'react';

export const UseMedia = (query, val, setMediaQuery) => {
  const queryStr = `(${query}: ${val}px)`;

  useEffect(() => {
    const mediaWatcher = window.matchMedia(queryStr);
    mediaWatcher.matches ? setMediaQuery(true) : setMediaQuery(false);

    function updateMediaWatcher(e) {
      e.matches ? setMediaQuery(true) : setMediaQuery(false);
    }
    mediaWatcher.addEventListener('change', updateMediaWatcher);

    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateMediaWatcher);
    };
  });
};
