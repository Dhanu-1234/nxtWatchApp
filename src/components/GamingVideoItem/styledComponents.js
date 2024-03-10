import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: 30%;
  height: auto;
  margin: 5px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  @media screen and(max-width: 768px) {
    width: 100px;
    height: 100px;
  }
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

export const VideoTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5px;
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDark === true ? '#ebebeb' : '#1e293b')};
  width: 100%;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
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
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-left: 0px;
    text-align: left;
  }
`

export const NavigationLink = styled(Link)`
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
  text-decoration: none;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
