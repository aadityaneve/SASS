import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import styles from './inputbox.module.scss'

const InputBox = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.form}>
      <p className={`${styles.form__title} ${styles[`${theme}`]}`}>Insert Your Todo's</p>
      <div className={styles.form__inputBlock}>
        <input className={styles.form__inputBlock__input} type='text' />
        <button className={`${styles.form__inputBlock__button} ${styles[`${theme}`]}`}>Add Todo</button>
      </div>
    </div>
  )
}

export default InputBox
