import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftSlidebar from '../LeftSlidebar'
import {TrendingBgContainer, TrendingContentContainer} from './styledComponents'

class Trending extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgTheme = isDark ? 'dark' : 'light'

          return (
            <TrendingBgContainer theme={bgTheme}>
              <Header />
              <TrendingContentContainer>
                <LeftSlidebar />
              </TrendingContentContainer>
            </TrendingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
