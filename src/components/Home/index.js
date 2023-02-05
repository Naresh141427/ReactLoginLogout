import {Component} from 'react'
import './index.css'

import LogIn from '../Login'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="home-card-container">
          <LogIn />
        </div>
      </div>
    )
  }
}

export default Home
