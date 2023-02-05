import {Component} from 'react'
import './index.css'

import LogOut from '../Logout'
import Message from '../Message'

class LogIn extends Component {
  state = {isLogIn: false}

  onLogIn = () => {
    this.setState(prevState => ({isLogIn: !prevState.isLogIn}))
  }

  render() {
    const {isLogIn} = this.state
    return (
      <div>
        {isLogIn ? (
          <div>
            <Message isLogIn={isLogIn} />
            <LogOut isLogIn={isLogIn} />
          </div>
        ) : (
          <div>
            <Message isLogIn={isLogIn} />
            <button type="button" className="button" onClick={this.onLogIn}>
              Login
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LogIn
