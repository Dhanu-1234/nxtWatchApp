import ThemeContext from '../../context/ThemeContext'
import {
  VideoItemContainer,
  ThumbnailImage,
  VideoDescriptionContainer,
  VideoTitleContainer,
  VideoTitle,
  Views,
  NavigationLink,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <VideoItemContainer>
            <NavigationLink to={`videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="thumbnail" />
              <VideoDescriptionContainer>
                <VideoTitleContainer>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <Views isDark={isDark}>{viewCount} Watching Worldwide</Views>
                </VideoTitleContainer>
              </VideoDescriptionContainer>
            </NavigationLink>
          </VideoItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
