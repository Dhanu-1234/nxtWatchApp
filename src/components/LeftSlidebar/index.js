import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import {
  LeftSlidebarContainer,
  TabItemsListContainer,
  TabItem,
  NavigationLink,
  TabIcon,
  TabContent,
  ContactUsSection,
  ContactUsDescription,
  SocialMediaContainer,
  SocialMediaImg,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const LeftSlidebar = props => {
  const {history} = props
  const {location} = history
  const isHomeTabActive = location.pathname === '/' ? 'true' : 'false'
  const isTrendingTabActive =
    location.pathname === '/trending' ? 'true' : 'false'
  const isGamingTabActive = location.pathname === '/gaming' ? 'true' : 'false'
  const isSaveVideosTabActive =
    location.pathname === '/save-videos' ? 'true' : 'false'
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const activeTabBgColor = isDark ? '#424242' : '#f1f5f9'
        const activeTextColor = isDark ? '#ebebeb' : '#1e293b'

        return (
          <LeftSlidebarContainer>
            <TabItemsListContainer>
              <TabItem>
                <NavigationLink
                  to="/"
                  activeColor={activeTabBgColor}
                  isActive={isHomeTabActive}
                >
                  <TabIcon isActive={isHomeTabActive}>
                    <AiFillHome />
                  </TabIcon>
                  <TabContent
                    activeColor={activeTextColor}
                    isActive={isHomeTabActive}
                  >
                    Home
                  </TabContent>
                </NavigationLink>
              </TabItem>
              <TabItem>
                <NavigationLink
                  to="/trending"
                  activeColor={activeTabBgColor}
                  isActive={isTrendingTabActive}
                >
                  <TabIcon isActive={isTrendingTabActive}>
                    <HiFire />
                  </TabIcon>
                  <TabContent
                    activeColor={activeTextColor}
                    isActive={isTrendingTabActive}
                  >
                    Trending
                  </TabContent>
                </NavigationLink>
              </TabItem>
              <TabItem>
                <NavigationLink
                  to="/gaming"
                  activeColor={activeTabBgColor}
                  isActive={isGamingTabActive}
                >
                  <TabIcon isActive={isGamingTabActive}>
                    <SiYoutubegaming />
                  </TabIcon>
                  <TabContent
                    activeColor={activeTextColor}
                    isActive={isGamingTabActive}
                  >
                    Gaming
                  </TabContent>
                </NavigationLink>
              </TabItem>
              <TabItem>
                <NavigationLink
                  to="/saved-videos"
                  activeColor={activeTabBgColor}
                  isActive={isSaveVideosTabActive}
                >
                  <TabIcon isActive={isSaveVideosTabActive}>
                    <RiMenuAddFill />
                  </TabIcon>
                  <TabContent
                    activeColor={activeTextColor}
                    isActive={isGamingTabActive}
                  >
                    Saved Videos
                  </TabContent>
                </NavigationLink>
              </TabItem>
            </TabItemsListContainer>
            <ContactUsSection>
              <ContactUsDescription isDark={isDark} bold="bold">
                CONTACT US
              </ContactUsDescription>
              <SocialMediaContainer>
                <SocialMediaImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialMediaImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialMediaImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                  alt="linked in logo"
                />
              </SocialMediaContainer>
              <ContactUsDescription isDark={isDark}>
                Enjoy! Now to see your channels and recommendations
              </ContactUsDescription>
            </ContactUsSection>
          </LeftSlidebarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(LeftSlidebar)
