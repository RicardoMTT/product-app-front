import { useContext, FormEvent, useState, ChangeEvent } from "react";

const useForm = <T extends Object>(initialState: T) => {
  const [formValue, setFormValue] = useState(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // { x : y }
    // [x]:y
    console.log(e);
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const resetValues = () => {
    setFormValue(initialState);
  };

  return {
    formValue,
    handleInputChange,
    resetValues,
  };
};

export default useForm;
