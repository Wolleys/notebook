import { useState, ChangeEvent } from "react";
import { UseInputChangeProps } from "./useInputChangeprops";

/**
 * Hook that manages form input changes and values.
 * @param options - Options object containing initial form values.
 * @param options.initialValues - Initial values for form inputs.
 * @returns - Object containing current form values and input change handler.
 */
const useInputChange = ({ initialValues }: UseInputChangeProps) => {
  const [values, setValues] = useState(initialValues);

  /**
   * Handler function for input change events.
   * @param - The change event object.
   * @returns {void}
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setValues((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return { values, handleInputChange };
};

export default useInputChange;
