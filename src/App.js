import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {isDark: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  saveVideo = video => {
    const {savedVideos} = this.state
    const isVideoAlreadyPresent = savedVideos.some(
      eachObj => eachObj.id === video.id,
    )
    if (isVideoAlreadyPresent) {
      const filteredSavedVideos = savedVideos.filter(
        eachObj => eachObj.id !== video.id,
      )
      this.setState({savedVideos: filteredSavedVideos})
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    }
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          savedVideos,
          changeTheme: this.changeTheme,
          saveVideo: this.saveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
