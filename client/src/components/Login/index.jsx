import React, { Component } from "react";
import dbAPI from "../../utils/dbAPI";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import "./style.css";

class Login extends Component {
  state = {
    loggedIn: false,
    username: "",
    password: ""
  };

  componentDidMount() {
    if (Cookies.get("username") === undefined) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: true });
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    dbAPI
      .loginUser({
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        //console.log(response);
        if (response.status === 200) {
          this.setState({ loggedIn: true });
        }
      })
      .catch(err => console.log(err));
  };

  renderRedirect = () => {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.renderRedirect()}
          <div className="col-3" />
          <div className="col-6">
            <form>
              <div className="form-group col-md-12">
                <label htmlFor="inputEmail4">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="johnnyappleseed"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="*****"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>
              {/* <label htmlFor="inputEmail4">Username</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="johnnyappleseed"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="*****"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            /> */}
              <br />
              <br />
              <button
                className="button"
                style={{ textAlign: "center" }}
                onClick={this.handleFormSubmit}
              >
                <span>Submit </span>
              </button>
            </form>
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}

export default Login;
