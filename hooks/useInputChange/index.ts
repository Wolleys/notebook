import { useState, ChangeEvent } from "react";
import { UseInputChangeProps } from "./useInputChangeprops";

const useInputChange = ({ initialValues }: UseInputChangeProps) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return { values, handleInputChange };
};

export default useInputChange;
