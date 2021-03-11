import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);
  
  return [darkMode, setDarkMode];
}

export default useDarkMode;