import {Link} from 'react-router-dom'
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
} from 'react-icons/ti'
import styled from 'styled-components'

export const LeftSlidebarContainer = styled.div`
  background-color: transparent;
  width: 20%;
  height: 90vh;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const TabItemsListContainer = styled.ul`
  width: 100%;
  height: auto;
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TabItem = styled.li`
  width: 100%;
  background-color: transparent;
`

export const NavigationLink = styled(Link)`
  background-color: ${props =>
    props.isActive === 'true' ? `${props.activeColor}` : 'transparent'};
  text-decoration: none;
  width: 100%;
  padding: 10px 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const TabIcon = styled.p`
  color: ${props => (props.isActive === 'true' ? '#ff0b37' : '#909090')};
  font-size: 30px;
  text-decoration: none;
  margin: 0px;
`
export const TabContent = styled.p`
  color: ${props =>
    props.isActive === 'true' ? `${props.activeColor}` : '#909090'};
  font-family: 'Roboto';
  font-size: 18px;
  margin: 7px 15px 0px;
  font-weight: 500;
  text-decoration: none;
`

export const ContactUsSection = styled.div`
  width: 100%;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const ContactUsDescription = styled.p`
  color: ${props => (props.isDark === true ? '#ebebeb' : '#00306e')};
  width: 200px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: ${props => (props.isDark === true ? '500' : 'bold')};
  margin-bottom: 10px;
`

export const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const LinkedinIcon = styled(TiSocialLinkedin)`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  font-size: 18px;
  border-width: 0px;
  background-color: ${props => `${props.iconColor}`};
  color: #ffffff;
`

export const FacebookIcon = styled(TiSocialFacebook)`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  font-size: 18px;
  border-width: 0px;
  background-color: ${props => `${props.iconColor}`};
  color: #ffffff;
`
export const TwitterIcon = styled(TiSocialTwitter)`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  font-size: 18px;
  border-width: 0px;
  margin: 10px;
  background-color: ${props => `${props.iconColor}`};
  color: #ffffff;
`
