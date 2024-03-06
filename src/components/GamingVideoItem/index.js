import ThemeContext from '../../context/ThemeContext'
import {
  VideoItemContainer,
  ThumbnailImage,
  VideoDescriptionContainer,
  VideoTitleContainer,
  VideoTitle,
  Views,
  VideoButton,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {thumbnailUrl, title, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <VideoItemContainer>
            <VideoButton type="button">
              <ThumbnailImage src={thumbnailUrl} alt="thumbnail" />
              <VideoDescriptionContainer>
                <VideoTitleContainer>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <Views isDark={isDark}>{viewCount} Watching Worldwide</Views>
                </VideoTitleContainer>
              </VideoDescriptionContainer>
            </VideoButton>
          </VideoItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
