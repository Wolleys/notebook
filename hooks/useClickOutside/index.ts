import { RefObject, useEffect } from "react";

type RefType = RefObject<HTMLElement>;

/**
 * Custom hook that invokes a callback when a click occurs outside the referenced element.
 * @param ref - Reference to the DOM element to watch for clicks outside.
 * @param callback - Callback function to be invoked when a click occurs outside the referenced element.
 * @returns {void}
 */
const useClickOutside = (ref: RefType, callback: () => void): void => {
  useEffect(() => {
    /**
     * Event handler that checks if the click occurs outside the referenced element
     * and invokes the callback if so.
     * @param event - The mouse event object.
     * @returns {void}
     */
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
