import React, { Component } from "react";
import { Link} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
  }

  handleTogglePassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  };

  render() {
    return (
      <div>
        <div className="content-3">
          <form action="" className="form-10">
            <div className="form-8">
              <h1>登入</h1>
              <div className="form-7">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="請輸入帳號"
                  required
                />
              </div>
              <div className="form-7">
                <input
                  type={this.state.showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="請輸入密碼"
                  required
                />
                <button type="button" onClick={this.handleTogglePassword}>
                  <i className={this.state.showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                </button>
              </div>
              <button
                className="btn-5"
                onClick={() => (window.location.href = "/")}
              >
                登入
              </button>
              <div className="form-9">
                <p>power by</p>
                <Link to="/" style={{ textDecoration: "none" }}><h5>Scanique</h5></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
