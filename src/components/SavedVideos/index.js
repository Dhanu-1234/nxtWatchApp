import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftSlidebar from '../LeftSlidebar'
import VideoItem from '../VideoItem'
import {
  SavedVideosBgContainer,
  SavedVideosContentContainer,
  RightSlidebar,
  SavedVideosHeadingContainer,
  SavedVideosHeading,
  SavedVideosIconContainer,
  SavedVideosIcon,
  EmptyViewContainer,
  EmptyViewImg,
  EmptyViewDescription,
  SavedVideosListContainer,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, savedVideos} = value
      const bgTheme = isDark === true ? 'dark' : 'light'

      const renderEmptyView = () => (
        <EmptyViewContainer theme={bgTheme}>
          <EmptyViewImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <SavedVideosHeading theme={bgTheme}>
            No saved videos found
          </SavedVideosHeading>
          <EmptyViewDescription>
            You can save your videos while watching them
          </EmptyViewDescription>
        </EmptyViewContainer>
      )

      const renderSavedVideosView = () => (
        <SavedVideosListContainer>
          {savedVideos.map(eachObj => (
            <VideoItem
              key={eachObj.id}
              videoDetails={eachObj}
              route="trending"
            />
          ))}
        </SavedVideosListContainer>
      )

      return (
        <SavedVideosBgContainer theme={bgTheme}>
          <Header />
          <SavedVideosContentContainer>
            <LeftSlidebar />
            <RightSlidebar data-testid="savedVideos" theme={bgTheme}>
              {savedVideos.length === 0 ? (
                renderEmptyView()
              ) : (
                <>
                  <SavedVideosHeadingContainer theme={bgTheme}>
                    <SavedVideosIconContainer theme={bgTheme}>
                      <SavedVideosIcon>
                        <HiFire />
                      </SavedVideosIcon>
                    </SavedVideosIconContainer>
                    <SavedVideosHeading theme={bgTheme}>
                      Saved Videos
                    </SavedVideosHeading>
                  </SavedVideosHeadingContainer>
                  {renderSavedVideosView()}
                </>
              )}
            </RightSlidebar>
          </SavedVideosContentContainer>
        </SavedVideosBgContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
