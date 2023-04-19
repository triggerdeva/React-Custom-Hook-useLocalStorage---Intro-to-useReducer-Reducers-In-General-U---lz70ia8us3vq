import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    localStorage.setItem(stateVar, newValue);
  }, [stateVar, newValue]);

  const updateValue = (val) => {
    setNewValue(val);
  };

  return [newValue, updateValue];
};

export default useLocalStorage;
