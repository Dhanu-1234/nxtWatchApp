import styled from 'styled-components'

export const LoginFormBgContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#231f20' : '#ffffff'};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginFormContainer = styled.form`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#ffffff'};
  height: 65%;
  width: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  @media screen and (max-width: 768px) {
    height: 70%;
    width: 90%;
  }
`

export const WebsiteLogo = styled.img`
  height: 50px;
  width: 210px;
  margin-top: 10px;
  align-self: center;
  @media screen and (max-width: 768px) {
    height: 40px;
    width: 180px;
  }
`

export const InputLabel = styled.label`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#475569')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: ${props => (props.checkbox === 'true' ? 'normal' : 'bold')};
  margin-top: ${props => (props.checkbox === 'true' ? '10px' : '30px')};
  margin-left: ${props => (props.checkbox === 'true' ? '5px' : '25px')};
  @media screen and (max-width: 768px) {
    margin-left: 15px;
  }
`
export const Input = styled.input`
  background-color: transparent;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#475569')};
  height: 38px;
  width: 90%;
  padding: 10px;
  margin-top: 5px;
  margin-left: 25px;
  border-width: 1px;
  border-color: #e2e8f0;
  border-radius: 6px;
  outline: none;
  @media screen and (max-width: 768px) {
    margin-left: 15px;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Checkbox = styled(Input)`
  height: 15px;
  width: 15px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 0px;
`

export const LoginButton = styled.button`
  background-color: ${props =>
    props.theme === 'dark' ? ' #3b82f6' : '#4f46e5'};
  color: #ffffff;
  width: 90%;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  margin-top: 25px;
  border-width: 0px;
  border-radius: 7px;
  align-self: center;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-left: 25px;
  margin-top: 4px;
  @media screen {
    margin-left: 15px;
  }
`
