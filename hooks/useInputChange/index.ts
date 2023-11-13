import { useState, ChangeEvent } from "react";

interface InputChangeOptions {
  initialValues: Record<string, string>;
}

const useInputChange = ({ initialValues }: InputChangeOptions) => {
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
