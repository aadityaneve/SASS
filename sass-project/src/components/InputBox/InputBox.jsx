import React from 'react';

import './styles.scss';

const InputBox = () => {
    return (
        <div className='form'>
            <p className='form__title'>Helloo</p>
            <div className='form__inputBlock'>
                <input className='form__inputBlock__input' type='text' />
                <button className='form__inputBlock__button'>Add Todo</button>
            </div>
        </div>
    )
}

export default InputBox