import Popup from 'reactjs-popup'
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
  @media screen and (max-width: 768px) {
    height: 30px;
    width: 120px;
  }
`

export const OptionsListContainer = styled.ul`
  width: 20%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MobOptionsContainer = styled(OptionsListContainer)`
  width: 45%;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const OptionItem = styled.li`
  margin: 1px;
`
export const ChangeThemeButton = styled.button`
  background-color: transparent;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#231f20')};
  border-width: 0px;
  font-size: 25px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    padding: 0px;
    margin: 0px;
  }
`

export const Profile = styled.img`
  height: 30px;
  width: 30px;
`

export const MenuButton = styled.button`
  background-color: transparent;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#231f20')};
  font-size: 30px;
  font-weight: bold;
  border-width: 0px;
  padding: 0px;
  cursor: pointer;
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

  @media screen and (max-width: 768px) {
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#231f20')};
    border-width: 0px;
    font-size: 25px;
    font-weight: bold;
    padding: 0px;
  }
`

export const StyledPopup = styled(Popup)`
  &-content {
    width: 30%;
    border-radius: 10px;
    background-color: ${props =>
      props.theme === 'dark' ? '#231f20' : '#ffffff'};
    border-width: 0px;
    @media screen and (max-width: 768px) {
      width: 85%;
    }
  }
`

export const PopupContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PopupContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 10px 30px;
  background-color: transparent;
  border-width: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const PopupButtonsContainer = styled.div`
  width: 55%;
  margin-top: 10px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const PopupCloseButton = styled.button`
  background-color: transparent;
  color: #cbd5e1;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  padding: 10px 15px 10px;
  border-width: 1px;
  border-radius: 2px;
  border-color: #cbd5e1;
  cursor: pointer;
`

export const PopupConfirmButton = styled(PopupCloseButton)`
  background-color: #3b82f6;
  color: #ffffff;
  border-color: transparent;
`

export const PopupConfirmMsg = styled.p`
  color: ${props => (props.theme === 'dark' ? ' #f8fafc' : '#00306e')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
`
