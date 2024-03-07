import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline, IoMenu} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import 'reactjs-popup/dist/index.css'
import {
  Navbar,
  WebsiteLogo,
  OptionsListContainer,
  MobOptionsContainer,
  OptionItem,
  ChangeThemeButton,
  Profile,
  MenuButton,
  LogoutButton,
  StyledPopup,
  PopupContainer,
  PopupContentContainer,
  PopupConfirmMsg,
  PopupButtonsContainer,
  PopupCloseButton,
  PopupConfirmButton,
} from './styledComponents'

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
          <Link to="/">
            <WebsiteLogo src={websiteLogoUrl} alt="nxt watch logo" />
          </Link>
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
              <StyledPopup
                theme={bgTheme}
                modal
                trigger={
                  <LogoutButton theme={bgTheme} type="button">
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <PopupContentContainer>
                    <PopupConfirmMsg theme={bgTheme}>
                      Are you sure you want to logout?
                    </PopupConfirmMsg>
                    <PopupButtonsContainer>
                      <PopupCloseButton type="button" onClick={() => close()}>
                        Cancel
                      </PopupCloseButton>
                      <PopupConfirmButton type="button" onClick={onLogout}>
                        Confirm
                      </PopupConfirmButton>
                    </PopupButtonsContainer>
                  </PopupContentContainer>
                )}
              </StyledPopup>
            </OptionItem>
          </OptionsListContainer>
          <MobOptionsContainer>
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
              <MenuButton theme={bgTheme}>
                <IoMenu />
              </MenuButton>
            </OptionItem>
            <OptionItem>
              <PopupContainer className="popup-container">
                <StyledPopup
                  theme={bgTheme}
                  modal
                  trigger={
                    <LogoutButton theme={bgTheme} type="button">
                      <FiLogOut />
                    </LogoutButton>
                  }
                >
                  {close => (
                    <PopupContentContainer className="popup-content">
                      <PopupConfirmMsg theme={bgTheme}>
                        Are you sure you want to logout?
                      </PopupConfirmMsg>
                      <PopupButtonsContainer>
                        <PopupCloseButton type="button" onClick={() => close()}>
                          Cancel
                        </PopupCloseButton>
                        <PopupConfirmButton type="button" onClick={onLogout}>
                          Confirm
                        </PopupConfirmButton>
                      </PopupButtonsContainer>
                    </PopupContentContainer>
                  )}
                </StyledPopup>
              </PopupContainer>
            </OptionItem>
          </MobOptionsContainer>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
