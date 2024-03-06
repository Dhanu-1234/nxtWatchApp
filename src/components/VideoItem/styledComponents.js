import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: ${props => (props.route === 'trending' ? '90%' : '30%')};
  height: ${props => (props.route === 'trending' ? '150px' : '300px')};
  margin: ${props => (props.route === 'trending' ? '16px' : '5px')};
  margin-bottom: ${props => (props.route === 'trending' ? '26px' : '5px')};
  @media screen and (max-width: 768px) {
    width: ${props => (props.route === 'trending' ? '90%' : '98%')};
    height: ${props => (props.route === 'trending' ? '250px' : '300px')};
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: ${props => (props.route === 'trending' ? '180px' : '165px')};
`

export const VideoDescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ProfileImage = styled(ThumbnailImage)`
  height: 35px;
  width: 35px;
  display: ${props => (props.route === 'trending' ? 'none' : 'block')};
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const VideoTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5px;
`

export const VideoTitle = styled.h3`
  color: ${props => (props.isDark === true ? '#ebebeb' : '#1e293b')};
  width: 100%;
  font-family: 'Roboto';
  font-size: 400;
  text-align: left;
  margin: 0px;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDark === true ? '#94a3b8' : '#94a3b8')};
  font-family: 'Roboto';
  margin-top: 5px;
  margin-bottom: 0px;
  display: ${props => (props.route === true ? 'block' : 'none')};
`

export const Views = styled(ChannelName)`
  margin-top: 5px;
  margin-right: 2px;
  font-weight: ${props => (props.weight === 'bold' ? 'bold' : 'normal')};
  font-size: ${props => (props.weight === 'bold' ? '25px' : 'normal')};
  display: ${props => (props.route === true ? 'block' : 'none')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const VideoButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-width: 0px;
  padding: 0px;
  margin: 0px;
  cursor: pointer;
  display: flex;
  flex-direction: ${props => (props.route === 'trending' ? 'row' : 'column')};
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const AdditionalView = styled(Views)`
  display: ${props => (props.largeDevice === true ? 'block' : 'none')};
`
