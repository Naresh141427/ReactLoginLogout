import {Component} from 'react'
import './index.css'

class LogOut extends Component {
  render() {
    const {isLogIn} = this.props
    return (
      <div>
        {isLogIn ? (
          <button type="button" className="button" onClick={this.onLogOut}>
            Logout
          </button>
        ) : null}
      </div>
    )
  }
}

export default LogOut
