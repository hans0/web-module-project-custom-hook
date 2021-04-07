import useLocalStorage from './useLocalStorage';

const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);

  return [darkMode, setDarkMode];
}

export default useDarkMode;