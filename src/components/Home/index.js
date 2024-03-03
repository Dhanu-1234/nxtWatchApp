import {Component} from 'react'
/* import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri' */
import {IoClose} from 'react-icons/io5'
import ThemeContext from '../../context/ThemeContext'
import LeftSlidebar from '../LeftSlidebar'
import Header from '../Header'
import {
  HomeBgContainer,
  HomeContentContainer,
  RightSlidebar,
  NxtWatchBanner,
  NxtWatchImgContainer,
  NxtWatchImg,
  BannerCloseButton,
  BannerDescription,
  GetPremiumButton,
} from './styledComponents'

class Home extends Component {
  state = {showBanner: true}

  onRemoveBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgTheme = isDark ? 'dark' : 'light'

          return (
            <HomeBgContainer theme={bgTheme}>
              <Header />
              <HomeContentContainer>
                <LeftSlidebar />
                <RightSlidebar>
                  <NxtWatchBanner showBanner={showBanner}>
                    <NxtWatchImgContainer>
                      <NxtWatchImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="website logo"
                      />
                      <BannerCloseButton
                        type="button"
                        onClick={this.onRemoveBanner}
                      >
                        <IoClose />
                      </BannerCloseButton>
                    </NxtWatchImgContainer>
                    <BannerDescription>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerDescription>
                    <GetPremiumButton>GET IT NOW</GetPremiumButton>
                  </NxtWatchBanner>
                </RightSlidebar>
              </HomeContentContainer>
            </HomeBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
