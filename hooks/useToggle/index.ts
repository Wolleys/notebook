import { useState } from "react";

type UseToggleReturnType = {
  value: boolean;
  toggle: () => void;
};

/**
 * Hook for toggling a boolean value.
 * @param initialValue - The initial value of the toggle.
 * @returns - An object containing the current value and a function to toggle it.
 */
const useToggle = (initialValue: boolean): UseToggleReturnType => {
  const [value, setValue] = useState<boolean>(initialValue);

  /**
   * Toggle the boolean value.
   */
  const toggle = (): void => {
    setValue((prevValue) => !prevValue);
  };

  return { value, toggle };
};

export default useToggle;
