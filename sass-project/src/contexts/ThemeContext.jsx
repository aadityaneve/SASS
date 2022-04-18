import React, { createContext, useState } from 'react'

export const ThemeContext = createContext({ theme: 'light' })

export const ThemeProvider = function ({ children }) {
  const [theme, setTheme] = useState('light')

  const values = { theme, setTheme }

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}
