import React from 'react'
import styles from './Input.module.css';
const Input = ({ label,value, onChange, error, onBlur, type, name, placeholder  }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
        <input  
        className={styles.input} 
        id={name}
        name={name}
        type={type}
        value={value} 
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
 