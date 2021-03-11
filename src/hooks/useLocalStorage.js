import { useState } from 'react';


// Build a function called useLocalStorage. Now, to set something to localStorage, we need a key (must be a string) and a value (can be anything). To retrieve something from localStorage, we need the key. To update something in localStorage, you use the same method as adding something new, and it will just replace the old key/value pair in localStorage. Knowing this, let's add key and initialValue as parameters to the hook.
const useLocalStorage = (key, initialValue) => {
  // To retrieve an item from localStorage, call localStorage.getItem('itemName')
  // If that item doesn't exist, it will return undefined
  const [storedValue, setStoredValue] = useState(() => {
     // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  }); 
  
  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}

export default useLocalStorage;