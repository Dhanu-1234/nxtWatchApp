import styled from 'styled-components'

export const Navbar = styled.nav`
  background-color: ${props =>
    props.theme === 'dark' ? '#231f20' : '#ffffff'};
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const WebsiteLogo = styled.img`
  height: 40px;
  width: 150px;
`

export const OptionsListContainer = styled.ul`
  width: 20%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const OptionItem = styled.li`
  margin: 2px;
`
export const ChangeThemeButton = styled.button`
  background-color: transparent;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#231f20')};
  border-width: 0px;
  font-size: 25px;
  cursor: pointer;
`

export const Profile = styled.img`
  height: 30px;
  width: 30px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#3b82f6')};
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  padding: 9px 20px 9px;
  border-width: 1px;
  border-color: ${props => (props.theme === 'dark' ? '#ffffff' : '#3b82f6')};
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`
