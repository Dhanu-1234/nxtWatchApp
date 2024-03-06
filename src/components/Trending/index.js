import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftSlidebar from '../LeftSlidebar'
import VideoItem from '../VideoItem'
import {
  TrendingBgContainer,
  TrendingContentContainer,
  RightSlidebar,
  TrendingHeadingContainer,
  TrendingHeading,
  TrendingIconContainer,
  TrendingIcon,
  LoaderContainer,
  TrendingVideosListContainer,
  NoResultsFoundContainer,
  NotResultsImg,
  NoResultsHeading,
  NoResultsDescription,
  RetryButton,
} from './styledComponents'

const resultStatusContstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideosList: [], resultStatus: resultStatusContstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({resultStatus: resultStatusContstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        title: eachObj.title,
        publishedAt: eachObj.published_at,
        thumbnailUrl: eachObj.thumbnail_url,
        viewCount: eachObj.view_count,
        channel: {
          name: eachObj.channel.name,
          profileImageUrl: eachObj.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideosList: updatedVideos,
        resultStatus: resultStatusContstants.success,
      })
    } else {
      this.setState({resultStatus: resultStatusContstants.failure})
    }
  }

  onRetryButtonClicked = () => {
    this.getTrendingVideos()
  }

  renderLoadingView = isDark => {
    const loaderColor = isDark === true ? '#ffffff' : '#1e293b'
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color={loaderColor} height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderSuccessView = () => {
    const {trendingVideosList} = this.state

    return (
      <TrendingVideosListContainer>
        {trendingVideosList.map(eachObj => (
          <VideoItem key={eachObj.id} videoDetails={eachObj} route="trending" />
        ))}
      </TrendingVideosListContainer>
    )
  }

  renderFailureView = isDark => {
    const imgUrl =
      isDark === true
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

    return (
      <NoResultsFoundContainer>
        <NotResultsImg src={imgUrl} alt="no videos" />
        <NoResultsHeading isDark={isDark}>
          Oops? Something Went Wrong
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
        result = this.renderSuccessView()
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
          const bgTheme = isDark ? 'dark' : 'light'

          return (
            <TrendingBgContainer theme={bgTheme}>
              <Header />
              <TrendingContentContainer>
                <LeftSlidebar />
                <RightSlidebar theme={bgTheme}>
                  <TrendingHeadingContainer theme={bgTheme}>
                    <TrendingIconContainer theme={bgTheme}>
                      <TrendingIcon theme={bgTheme}>
                        <HiFire />
                      </TrendingIcon>
                    </TrendingIconContainer>
                    <TrendingHeading theme={bgTheme}>Trending</TrendingHeading>
                  </TrendingHeadingContainer>
                  {this.getResults(isDark)}
                </RightSlidebar>
              </TrendingContentContainer>
            </TrendingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
