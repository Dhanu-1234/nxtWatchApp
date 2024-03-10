import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftSlidebar from '../LeftSlidebar'
import {
  NotFoundBgContainer,
  NotFoundContent,
  NotFoundImg,
  NotFoundHeading,
  RightSlidebar,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      const imgSrc =
        isDark === true
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundBgContainer isDark={isDark}>
          <Header />
          <NotFoundContent>
            <LeftSlidebar />
            <RightSlidebar isDark={isDark}>
              <NotFoundImg src={imgSrc} alt="not found" />
              <NotFoundHeading isDark={isDark}>Page Not Found</NotFoundHeading>
              <NotFoundDescription>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </RightSlidebar>
          </NotFoundContent>
        </NotFoundBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
