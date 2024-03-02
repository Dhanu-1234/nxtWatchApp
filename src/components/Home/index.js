import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import {HomeBgContainer} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgTheme = isDark ? 'dark' : 'light'

          return (
            <HomeBgContainer theme={bgTheme}>
              <Header />
            </HomeBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
