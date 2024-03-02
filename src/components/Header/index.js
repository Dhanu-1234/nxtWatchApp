import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  Navbar,
  WebsiteLogo,
  OptionsListContainer,
  OptionItem,
  ChangeThemeButton,
  Profile,
  LogoutButton,
} from './styledComponets'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value
      const websiteLogoUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const bgTheme = isDark ? 'dark' : 'light'

      const onChangeTheme = () => {
        changeTheme()
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <Navbar theme={bgTheme}>
          <WebsiteLogo src={websiteLogoUrl} alt="nxt watch logo" />
          <OptionsListContainer>
            <OptionItem>
              <ChangeThemeButton
                theme={bgTheme}
                type="button"
                onClick={onChangeTheme}
              >
                {isDark ? <IoSunnyOutline /> : <FaMoon />}
              </ChangeThemeButton>
            </OptionItem>
            <OptionItem>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </OptionItem>
            <OptionItem>
              <LogoutButton theme={bgTheme} type="button" onClick={onLogout}>
                Logout
              </LogoutButton>
            </OptionItem>
          </OptionsListContainer>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
