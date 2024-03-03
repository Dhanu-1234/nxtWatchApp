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
  background-color: transparent;
  width: 80%;
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
  display: ${props => (props.showBanner === true ? 'block' : 'none')};
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
