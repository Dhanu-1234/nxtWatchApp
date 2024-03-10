import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  background-color: ${props => (props.isDark === true ? '#231f20' : '#ffffff')};
  height: 115vh;
  width: 100%;
`

export const NotFoundContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const RightSlidebar = styled.div`
  background-color: ${props => (props.isDark === true ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const NotFoundImg = styled.img`
  height: 60%;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDark === true ? '#f1f1f1' : '#231f20')};
  font-family: 'Roboto';
`

export const NotFoundDescription = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 18px;
  margin: 10px;
  text-align: center;
`
