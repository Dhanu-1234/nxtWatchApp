import styled from 'styled-components'

export const TrendingBgContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#231f20' : '#ffffff'};
  height: auto;
  width: 100%;
`

export const TrendingContentContainer = styled.div`
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
