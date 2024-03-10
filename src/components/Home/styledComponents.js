import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#231f20' : '#ffffff'};
  height: auto;
  width: 100%;
`

export const HomeContentContainer = styled.div`
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
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
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

export const NxtWatchBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  height: 250px;
  background-size: cover;
  padding: 25px 30px 10px;
`

export const NxtWatchImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const NxtWatchImg = styled.img`
  height: 30px;
  width: 120px;
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 25px;
  cursor: pointer;
`

export const BannerDescription = styled.p`
  color: #606060;
  width: 390px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`

export const GetPremiumButton = styled.button`
  background-color: transparent;
  color: #606060;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  padding: 10px 15px 10px;
  margin-top: 10px;
  border-width: 1px;
  border-radius: 1px;
  border-color: #606060;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`

export const VideosResultContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const SearchInputContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 350px;
  padding: 7px 10px 7px;
  background-color: ${props =>
    props.theme === 'dark' ? 'transparent' : '#ffffff'};
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#231f20')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border-width: 1px;
  border-color: ${props => (props.theme === 'dark' ? '#cccccc' : '#94a3b8')};
  border-radius: 2px;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const SearchButton = styled.button`
  background-color: ${props =>
    props.theme === 'dark' ? '#313131' : 'transparent'};
  color: #475569;
  padding: 6px 35px 4px;
  font-size: 18px;
  cursor: pointer;
  border-width: 1px;
  border-color: ${props => (props.theme === 'dark' ? '#cccccc' : '#231f20')};
`

export const VideosListContainer = styled.ul`
  list-style: none;
  width: 100%;
  height: 80vh;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
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
  color: ${props => (props.isDark === true ? '#f1f1f1' : '#231f20')};
  font-family: 'Roboto';
  font-weight: 500;
  margin: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 25px;
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
