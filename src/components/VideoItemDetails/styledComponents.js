import styled from 'styled-components'

export const VideoItemDetailsBgContainer = styled.div`
  width: 100%;
`

export const VideoItemContentContainer = styled.div`
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const RightSlidebar = styled.div`
  background-color: ${props => (props.isDark === true ? '#181818' : '#f4f4f4')};
  width: 80%;
  height: auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const VideoContainer = styled.div`
  width: 95%;
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`

export const VideoPlayerContainer = styled.div`
  width: 95%;
  height: 400px;
  @media screen and (max-width: 768px) {
    height: 250px;
    width: 100%;
  }
`

export const LoaderContainer = styled.div`
  width: 100%;
  min-height: 500px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoResultsFoundContainer = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotResultsImg = styled.img`
  height: 250px;
  width: 350px;
  @media screen and (max-width: 768px) {
    height: 190px;
    width: 280px;
  }
`

export const NoResultsHeading = styled.h1`
  color: ${props => (props.isDark === true ? '#f1f1f1' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 500;
  margin: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const NoResultsDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 500;
  margin: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 12px 30px 12px;
  border-width: 0px;
  border-radius: 5px;

  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const VideoTitle = styled.h3`
  color: ${props => (props.isDark === true ? '#f1f1f1' : '#1e293b')};
  font-family: 'Roboto';
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`

export const ViewsAndReactionContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
  }
`
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Paragraph = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  margin-top: 10px;
  margin-right: 6px;
  margin-bottom: ${props => (props.weight === 'bold' ? '8px' : '15px')};
  font-size: ${props => (props.weight === 'bold' ? '18px' : '15px')};
  font-weight: ${props => (props.weight === 'bold' ? '500' : 'normal')};

  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`

export const ProfileImage = styled.img`
  height: 35px;
  width: 35px;
`

export const HorizontalLine = styled.hr`
  width: 95%;
  border-width: 1px;
  border-color: ${props => (props.isDark === true ? '#64748b' : '#e2e8f0')};
  align-self: center;
  margin-left: 0px;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`

export const ChannelContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ChannelTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ReactionButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ChannelTitle = styled.h5`
  color: ${props => (props.isDark === true ? '#f1f1f1' : '#1e293b')};
  font-family: 'Roboto';
  margin: 0px 10px 10px;
`

export const ChannelParagraph = styled(Paragraph)`
  margin-left: 10px;
  margin-top: 0px;
`

export const ChannelDescription = styled(ChannelParagraph)`
  font-weight: 400;
  display: ${props => (props.hide === 'true' ? 'none' : 'block')};
  @media screen and (max-width: 768px) {
    display: ${props => (props.hide === 'false' ? 'none' : 'block')};
  }
`
