import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  background-color: ${props => (props.isDark === true ? '#231f20' : '#ffffff')};
  height: auto;
  width: 100%;
`

export const GamingContentContainer = styled.div`
  background-color: transparent;
  height: auto;
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

export const RightSlidebar = styled.div`
  background-color: ${props => (props.isDark === true ? '#0f0f0f' : '#f9f9f9')};
  width: 80%;
  height: auto;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const GamingHeadingContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#383838' : '#ebebeb'};
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const GamingHeading = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#1e293b')};
  margin: 10px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`

export const GamingIconContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f1f5f9'};
  height: 60px;
  width: 60px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GamingIcon = styled.p`
  color: #ff0b37;
  font-size: 35px;
  margin: 0px;
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
export const GamingVideosListContainer = styled.ul`
  background-color: transparent;
  height: 100vh;
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`
