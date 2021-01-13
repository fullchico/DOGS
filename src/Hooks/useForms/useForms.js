import React, { useState } from 'react'

// Hook criata para automizar formulario & validar 

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Prencha um email valido'
  },
  password:{
    regex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
    message: 'Senha precisa ter um caracter especial, letra maiuscula, numero e ate oito digitos.'
  }
};

const useForms = (type) => {

  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Prencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  const onChange = ({ target }) => {
    if (error) validate(target.value);

    setValue(target.value)

  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),

  }
}

export default useForms
