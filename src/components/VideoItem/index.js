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
  NavigationLink,
  AdditionalView,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails, route} = props
  const {
    id,
    thumbnailUrl,
    channel,
    title,
    publishedAt,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl} = channel
  const publishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <VideoItemContainer route={route}>
            <NavigationLink to={`videos/${id}`} route={route}>
              <ThumbnailImage
                src={thumbnailUrl}
                alt="thumbnail"
                route={route}
              />
              <VideoDescriptionContainer>
                <ProfileImage
                  src={profileImageUrl}
                  alt="profile"
                  route={route}
                />
                <VideoTitleContainer>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <ChannelName isDark={isDark} route={route === 'home'}>
                    {name}
                  </ChannelName>
                  <VideoDescriptionContainer>
                    <ChannelName isDark={isDark} route={route === 'trending'}>
                      {name}
                    </ChannelName>
                    <AdditionalView
                      isDark={isDark}
                      weight="bold"
                      route={route === 'trending'}
                      largeDevice={route === 'trending'}
                    >
                      <BsDot />
                    </AdditionalView>
                    <Views
                      isDark={isDark}
                      route={route === 'trending' || route === 'home'}
                    >
                      {viewCount}
                    </Views>
                    <Views
                      isDark={isDark}
                      weight="bold"
                      route={route === 'trending' || route === 'home'}
                    >
                      <BsDot />
                    </Views>
                    <Views
                      isDark={isDark}
                      route={route === 'trending' || route === 'home'}
                    >
                      {publishedDate}
                    </Views>
                  </VideoDescriptionContainer>
                </VideoTitleContainer>
              </VideoDescriptionContainer>
            </NavigationLink>
          </VideoItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
