import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftSlidebar from '../LeftSlidebar'
import {
  VideoItemDetailsBgContainer,
  VideoItemContentContainer,
  VideoPlayerContainer,
  VideoContainer,
  RightSlidebar,
  LoaderContainer,
  NoResultsFoundContainer,
  NotResultsImg,
  NoResultsHeading,
  NoResultsDescription,
  RetryButton,
  VideoTitle,
  ViewsAndReactionContainer,
  ViewsContainer,
  Paragraph,
  ProfileImage,
  HorizontalLine,
  ReactionButton,
  ChannelContainer,
  ChannelTitleContainer,
  ChannelTitle,
  ChannelParagraph,
  ChannelDescription,
} from './styledComponents'

const resultStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    resultStatus: resultStatusConstants.initial,
    isLikeButtonActive: false,
    isDislikeButtonActive: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({resultStatus: resultStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoDetails = data.video_details
      const updatedVideoDetails = {
        id: videoDetails.id,
        title: videoDetails.title,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: updatedVideoDetails,
        resultStatus: resultStatusConstants.success,
      })
    } else {
      this.setState({resultStatus: resultStatusConstants.failure})
    }
  }

  onReactedLike = () => {
    this.setState({isLikeButtonActive: true, isDislikeButtonActive: false})
  }

  onReactedDislike = () => {
    this.setState({isDislikeButtonActive: true, isLikeButtonActive: false})
  }

  onRetryButtonClicked = () => {
    this.getVideoDetails()
  }

  renderLoadingView = isDark => {
    const loaderColor = isDark === true ? '#ffffff' : '#1e293b'
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color={loaderColor} height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderSuccessView = (isDark, saveVideo, savedVideos) => {
    const {videoDetails, isLikeButtonActive, isDislikeButtonActive} = this.state
    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel

    const publishedDate = formatDistanceToNow(new Date(publishedAt))

    const isVideoSaved = savedVideos.some(eachObj => eachObj.id === id)

    const onClickedSaveVideo = () => {
      saveVideo(videoDetails)
    }

    return (
      <VideoContainer>
        <VideoPlayerContainer>
          <ReactPlayer
            url={videoUrl}
            height="100%"
            width="100%"
            controls="true"
          />
        </VideoPlayerContainer>
        <VideoTitle isDark={isDark}>{title}</VideoTitle>
        <ViewsAndReactionContainer>
          <ViewsContainer>
            <Paragraph>{viewCount}</Paragraph>
            <Paragraph weight="bold">
              <BsDot />
            </Paragraph>
            <Paragraph>{publishedDate}</Paragraph>
          </ViewsContainer>
          <ViewsContainer>
            <ReactionButton
              active={isLikeButtonActive}
              type="button"
              onClick={this.onReactedLike}
            >
              <BiLike /> Like
            </ReactionButton>
            <ReactionButton
              active={isDislikeButtonActive}
              type="button"
              onClick={this.onReactedDislike}
            >
              <BiDislike /> Dislike
            </ReactionButton>
            <ReactionButton
              active={isVideoSaved}
              type="button"
              onClick={onClickedSaveVideo}
            >
              <RiMenuAddFill /> {isVideoSaved === true ? 'Saved' : 'Save'}
            </ReactionButton>
          </ViewsContainer>
        </ViewsAndReactionContainer>
        <HorizontalLine isDark={isDark} />
        <ChannelContainer>
          <ProfileImage src={profileImageUrl} alt="channel logo" />
          <ChannelTitleContainer>
            <ChannelTitle isDark={isDark}>{name}</ChannelTitle>
            <ChannelParagraph>{subscriberCount} subscribers</ChannelParagraph>
            <ChannelDescription>{description}</ChannelDescription>
          </ChannelTitleContainer>
        </ChannelContainer>
      </VideoContainer>
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

  getResults = (isDark, saveVideo, savedVideos) => {
    const {resultStatus} = this.state
    let result
    switch (resultStatus) {
      case resultStatusConstants.loading:
        result = this.renderLoadingView(isDark)
        break
      case resultStatusConstants.success:
        result = this.renderSuccessView(isDark, saveVideo, savedVideos)
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
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, saveVideo, savedVideos} = value

          return (
            <VideoItemDetailsBgContainer>
              <Header />
              <VideoItemContentContainer isDark={isDark}>
                <LeftSlidebar />
                <RightSlidebar data-testid="videoItemDetails" isDark={isDark}>
                  {this.getResults(isDark, saveVideo, savedVideos)}
                </RightSlidebar>
              </VideoItemContentContainer>
            </VideoItemDetailsBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
