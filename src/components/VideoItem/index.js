import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItemContainer,
  ThumbnailImage,
  VideoDescriptionContainer,
  ProfileImage,
  VideoTitleContainer,
  VideoTitle,
  ChannelName,
  Views,
  VideoButton,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {thumbnailUrl, channel, title, publishedAt, viewCount} = videoDetails
  const {name, profileImageUrl} = channel
  const publishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <VideoItemContainer>
            <VideoButton type="button">
              <ThumbnailImage src={thumbnailUrl} alt="thumbnail" />
              <VideoDescriptionContainer>
                <ProfileImage src={profileImageUrl} alt="profile" />
                <VideoTitleContainer>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <ChannelName isDark={isDark}>{name}</ChannelName>
                  <VideoDescriptionContainer>
                    <Views isDark={isDark}>{viewCount}</Views>
                    <Views isDark={isDark} weight="bold">
                      <BsDot />
                    </Views>
                    <Views isDark={isDark}>{publishedDate}</Views>
                  </VideoDescriptionContainer>
                </VideoTitleContainer>
              </VideoDescriptionContainer>
            </VideoButton>
          </VideoItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
