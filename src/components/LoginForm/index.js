import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginFormBgContainer,
  LoginFormContainer,
  WebsiteLogo,
  InputLabel,
  Input,
  CheckboxContainer,
  Checkbox,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    displayError: false,
    errorMsg: '',
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSuccessSubmit = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    this.setState({displayError: false})
    history.replace('/')
  }

  onFailureSubmit = errorMsg => {
    this.setState({errorMsg, displayError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      this.onSuccessSubmit(jwtToken)
    } else {
      const errorMsg = data.error_msg
      this.onFailureSubmit(errorMsg)
    }
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    const {
      username,
      password,
      showPassword,
      errorMsg,
      displayError,
    } = this.state
    const passwordInputType = showPassword ? 'text' : 'password'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const websiteLogoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const bgTheme = isDark ? 'dark' : 'light'

          return (
            <LoginFormBgContainer theme={bgTheme}>
              <LoginFormContainer theme={bgTheme} onSubmit={this.onSubmitForm}>
                <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
                <InputLabel theme={bgTheme} htmlFor="username">
                  USERNAME
                </InputLabel>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={this.onUsernameChange}
                />
                <InputLabel theme={bgTheme} htmlFor="password">
                  PASSWORD
                </InputLabel>
                <Input
                  id="password"
                  type={passwordInputType}
                  value={password}
                  placeholder="Password"
                  onChange={this.onPasswordChange}
                />
                <CheckboxContainer>
                  <Checkbox
                    id="checkbox"
                    type="checkbox"
                    onChange={this.onToggleShowPassword}
                  />
                  <InputLabel
                    theme={bgTheme}
                    htmlFor="checkbox"
                    checkbox="true"
                  >
                    Show Password
                  </InputLabel>
                </CheckboxContainer>
                <LoginButton theme={bgTheme} type="submit">
                  Login
                </LoginButton>
                {displayError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginFormBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
