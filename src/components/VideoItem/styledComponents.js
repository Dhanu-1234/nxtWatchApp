import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: 30%;
  height: 300px;
  margin: 5px;
  @media screen and (max-width: 768px) {
    width: 98%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 165px;
`

export const VideoDescriptionContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ProfileImage = styled(ThumbnailImage)`
  height: 35px;
  width: 35px;
`

export const VideoTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5px;
`

export const VideoTitle = styled.h4`
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
`

export const Views = styled(ChannelName)`
  margin-top: 2px;
  margin-right: 2px;
  font-weight: ${props => (props.weight === 'bold' ? 'bold' : 'normal')};
  font-size: ${props => (props.weight === 'bold' ? '25px' : 'normal')};
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
