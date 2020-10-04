import { useState } from 'react';

const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const setForm = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  return [state, setForm];
};

export default useForm;
