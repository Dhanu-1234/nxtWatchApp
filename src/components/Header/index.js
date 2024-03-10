import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline, IoMenu} from 'react-icons/io5'
import {IoMdClose} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
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
  StyledMobPopup,
  PopupContainer,
  PopupContentContainer,
  MobPopupContentContainer,
  PopupConfirmMsg,
  PopupButtonsContainer,
  PopupCloseButton,
  PopupConfirmButton,
  MobPopupCloseButton,
  MobNavigationLink,
  TabIcon,
  TabContent,
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

      const {history} = props
      const {location} = history
      const isHomeTabActive = location.pathname === '/' ? 'true' : 'false'
      const isTrendingTabActive =
        location.pathname === '/trending' ? 'true' : 'false'
      const isGamingTabActive =
        location.pathname === '/gaming' ? 'true' : 'false'
      const isSavedVideosTabActive =
        location.pathname === '/saved-videos' ? 'true' : 'false'
      const activeTabBgColor = isDark ? '#424242' : '#f1f5f9'
      const activeTextColor = isDark ? '#ebebeb' : '#1e293b'

      return (
        <Navbar theme={bgTheme}>
          <Link to="/">
            <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
          </Link>
          <OptionsListContainer>
            <OptionItem>
              <ChangeThemeButton
                theme={bgTheme}
                data-testid="theme"
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
                      Are you sure, you want to logout
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
              <PopupContainer className="popup-container">
                <StyledMobPopup
                  theme={bgTheme}
                  modal
                  trigger={
                    <MenuButton theme={bgTheme}>
                      <IoMenu />
                    </MenuButton>
                  }
                >
                  {close => (
                    <PopupContentContainer className="popup-content">
                      <MobPopupCloseButton
                        type="button"
                        onClick={() => close()}
                      >
                        <IoMdClose />
                      </MobPopupCloseButton>
                      <MobNavigationLink
                        to="/"
                        isActive={isHomeTabActive}
                        bgColor={activeTabBgColor}
                      >
                        <TabIcon isActive={isHomeTabActive}>
                          <AiFillHome />
                        </TabIcon>
                        <TabContent
                          isActive={isHomeTabActive}
                          activeColor={activeTextColor}
                        >
                          Home
                        </TabContent>
                      </MobNavigationLink>
                      <MobNavigationLink
                        to="/trending"
                        isActive={isTrendingTabActive}
                        bgColor={activeTabBgColor}
                      >
                        <TabIcon isActive={isTrendingTabActive}>
                          <HiFire />
                        </TabIcon>
                        <TabContent
                          isActive={isTrendingTabActive}
                          activeColor={activeTextColor}
                        >
                          Trending
                        </TabContent>
                      </MobNavigationLink>
                      <MobNavigationLink
                        to="/gaming"
                        isActive={isGamingTabActive}
                        bgColor={activeTabBgColor}
                      >
                        <TabIcon isActive={isGamingTabActive}>
                          <SiYoutubegaming />
                        </TabIcon>
                        <TabContent
                          isActive={isGamingTabActive}
                          activeColor={activeTextColor}
                        >
                          Gaming
                        </TabContent>
                      </MobNavigationLink>
                      <MobNavigationLink
                        to="/saved-videos"
                        isActive={isSavedVideosTabActive}
                        bgColor={activeTabBgColor}
                      >
                        <TabIcon isActive={isSavedVideosTabActive}>
                          <RiMenuAddFill />
                        </TabIcon>
                        <TabContent
                          isActive={isSavedVideosTabActive}
                          activeColor={activeTextColor}
                        >
                          Saved Videos
                        </TabContent>
                      </MobNavigationLink>
                    </PopupContentContainer>
                  )}
                </StyledMobPopup>
              </PopupContainer>
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
                    <MobPopupContentContainer className="popup-content">
                      <PopupConfirmMsg theme={bgTheme}>
                        Are you sure, you want to logout
                      </PopupConfirmMsg>
                      <PopupButtonsContainer>
                        <PopupCloseButton type="button" onClick={() => close()}>
                          Cancel
                        </PopupCloseButton>
                        <PopupConfirmButton type="button" onClick={onLogout}>
                          Confirm
                        </PopupConfirmButton>
                      </PopupButtonsContainer>
                    </MobPopupContentContainer>
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
