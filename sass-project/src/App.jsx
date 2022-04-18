import { useContext } from 'react'
import './scss/main.scss'

import { ThemeContext } from './contexts/ThemeContext'

import { Navbar, InputBox } from './components';

function App() {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div className={theme}>
            <div className='background flex'>
                <Navbar />
                <h1 className='text'>TODO APP</h1>
                <InputBox />
            </div>
        </div>
    )
}

export default App
