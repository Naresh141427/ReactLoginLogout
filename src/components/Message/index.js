import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {isLogIn} = this.props
    return (
      <div>
        {isLogIn ? (
          <p className="message">Welcome User</p>
        ) : (
          <p className="message">Please Login</p>
        )}
      </div>
    )
  }
}

export default Message
