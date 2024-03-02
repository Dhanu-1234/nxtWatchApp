import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#231f20' : '#ffffff'};
  height: 100vh;
  width: 100%;
`
