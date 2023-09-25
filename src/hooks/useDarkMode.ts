import { useEffect } from 'react';
import useLocalStorage from '~/hooks/useLocalStorage';



const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme', false);
  const isEnabled = enabled === 'true';

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
}

export default useDarkMode