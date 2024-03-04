import {Component} from 'react'
import {IoClose} from 'react-icons/io5'
import {IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import LeftSlidebar from '../LeftSlidebar'
import Header from '../Header'
import VideoItem from '../VideoItem'
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
  VideosResultContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  VideosListContainer,
  NoResultsFoundContainer,
  NotResultsImg,
  NoResultsHeading,
  NoResultsDescription,
  RetryButton,
} from './styledComponents'

const resultStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    showBanner: true,
    resultStatus: resultStatusConstants.initial,
    videosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({resultStatus: resultStatusConstants.loading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      const updatedVideosList = videos.map(eachObj => ({
        id: eachObj.id,
        publishedAt: eachObj.published_at,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
        channel: {
          name: eachObj.channel.name,
          profileImageUrl: eachObj.channel.profile_image_url,
        },
      }))

      this.setState({
        videosList: updatedVideosList,
        resultStatus: resultStatusConstants.success,
      })
    } else {
      this.setState({resultStatus: resultStatusConstants.failure})
    }
  }

  onRemoveBanner = () => {
    this.setState({showBanner: false})
  }

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchButtonClicked = () => {
    this.getVideos()
  }

  onRetryButtonClicked = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = isDark => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return (
        <NoResultsFoundContainer>
          <NotResultsImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoResultsHeading isDark={isDark}>
            No Search results found
          </NoResultsHeading>
          <NoResultsDescription>
            Try different key words or search remove filters
          </NoResultsDescription>
          <RetryButton type="button" onClick={this.onRetryButtonClicked}>
            Retry
          </RetryButton>
        </NoResultsFoundContainer>
      )
    }

    return (
      <VideosListContainer>
        {videosList.map(eachObj => (
          <VideoItem key={eachObj.id} videoDetails={eachObj} />
        ))}
      </VideosListContainer>
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
      case resultStatusConstants.loading:
        result = this.renderLoadingView()
        break
      case resultStatusConstants.success:
        result = this.renderSuccessView(isDark)
        break
      case resultStatusConstants.failure:
        result = this.renderFailureView(isDark)
        break
      default:
        result = null
        break
    }
    return result
  }

  render() {
    const {showBanner, searchInput} = this.state
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
                  <VideosResultContainer theme={bgTheme}>
                    <SearchInputContainer>
                      <SearchInput
                        type="search"
                        theme={bgTheme}
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onSearchInputChange}
                      />
                      <SearchButton
                        type="button"
                        theme={bgTheme}
                        onClick={this.onSearchButtonClicked}
                      >
                        <IoIosSearch />
                      </SearchButton>
                    </SearchInputContainer>
                    {this.getResults(isDark)}
                  </VideosResultContainer>
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
