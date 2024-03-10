import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftSliderbar from '../LeftSlidebar'
import GamingVideoItem from '../GamingVideoItem'
import {
  GamingBgContainer,
  GamingContentContainer,
  RightSlidebar,
  GamingHeadingContainer,
  GamingHeading,
  GamingIconContainer,
  GamingIcon,
  LoaderContainer,
  NoResultsFoundContainer,
  NotResultsImg,
  NoResultsHeading,
  NoResultsDescription,
  RetryButton,
  GamingVideosListContainer,
} from './styledComponents'

const resultStatusContstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideosList: [], resultStatus: resultStatusContstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({resultStatus: resultStatusContstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const {videos} = data
      const updatedVideos = videos.map(eachObj => ({
        id: eachObj.id,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }))

      this.setState({
        gamingVideosList: updatedVideos,
        resultStatus: resultStatusContstants.success,
      })
    } else {
      this.setState({resultStatus: resultStatusContstants.failure})
    }
  }

  onRetryButtonClicked = () => {
    this.getGamingVideos()
  }

  renderLoadingView = isDark => {
    const loaderColor = isDark === true ? '#ffffff' : '#1e293b'
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color={loaderColor} height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderSuccessView = isDark => {
    const {gamingVideosList} = this.state

    return (
      <GamingVideosListContainer isDark={isDark}>
        {gamingVideosList.map(eachObj => (
          <GamingVideoItem key={eachObj.id} videoDetails={eachObj} />
        ))}
      </GamingVideosListContainer>
    )
  }

  renderFailureView = isDark => {
    const imgUrl =
      isDark === true
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <NoResultsFoundContainer>
        <NotResultsImg src={imgUrl} alt="failure view" />
        <NoResultsHeading isDark={isDark}>
          Oops! Something Went Wrong
        </NoResultsHeading>
        <NoResultsDescription>
          We are having some trouble to complete your request. Please try again.
        </NoResultsDescription>
        <RetryButton type="button" onClick={this.onRetryButtonClicked}>
          Retry
        </RetryButton>
      </NoResultsFoundContainer>
    )
  }

  getResults = isDark => {
    const {resultStatus} = this.state
    let result
    switch (resultStatus) {
      case resultStatusContstants.loading:
        result = this.renderLoadingView(isDark)
        break
      case resultStatusContstants.success:
        result = this.renderSuccessView(isDark)
        break
      case resultStatusContstants.failure:
        result = this.renderFailureView(isDark)
        break
      default:
        result = null
        break
    }
    return result
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const bgTheme = isDark === true ? 'dark' : 'light'

          return (
            <GamingBgContainer isDark={isDark}>
              <Header />
              <GamingContentContainer>
                <LeftSliderbar />
                <RightSlidebar data-testid="gaming" isDark={isDark}>
                  <GamingHeadingContainer theme={bgTheme}>
                    <GamingIconContainer theme={bgTheme}>
                      <GamingIcon theme={bgTheme}>
                        <SiYoutubegaming />
                      </GamingIcon>
                    </GamingIconContainer>
                    <GamingHeading theme={bgTheme}>Gaming</GamingHeading>
                  </GamingHeadingContainer>
                  {this.getResults(isDark)}
                </RightSlidebar>
              </GamingContentContainer>
            </GamingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
