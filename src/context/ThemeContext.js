import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  savedVideos: [],
  changeTheme: () => {},
  saveVideo: () => {},
})

export default ThemeContext
