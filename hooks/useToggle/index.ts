import { useState } from "react";

type UseToggleReturnType = {
  value: boolean;
  toggle: () => void;
};

const useToggle = (initialValue: boolean): UseToggleReturnType => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = (): void => {
    setValue((prevValue) => !prevValue);
  };

  return { value, toggle };
};

export default useToggle;
