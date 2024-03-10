import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#231f20' : '#ffffff'};
  width: 100%;
  height: auto;
`

export const SavedVideosContentContainer = styled.div`
  background-color: transparent;
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

export const RightSlidebar = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  width: 80%;
  height: 100vh;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const SavedVideosHeadingContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#383838' : '#ebebeb'};
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const SavedVideosHeading = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#1e293b')};
  margin: 10px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`

export const SavedVideosIconContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  height: 60px;
  width: 60px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SavedVideosIcon = styled.p`
  color: #ff0b37;
  font-size: 35px;
  margin: 0px;
`

export const EmptyViewContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f1f1f1'};
  height: 100vh;
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const EmptyViewImg = styled.img`
  height: 60%;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const EmptyViewDescription = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-weight: 500;
`

export const SavedVideosListContainer = styled.ul`
  background-color: transparent;
  padding-left: 0px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
