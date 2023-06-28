import { useEffect } from 'react';

const useInterval = (callback: Function, delay?: number) => {
  useEffect(() => {
    const interval = window.setInterval(() =>
      callback()
      , delay || 0);
    return () => clearInterval(interval);
  }, [callback, delay]);
}

export default useInterval;
