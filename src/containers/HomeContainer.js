import React, { Component } from "react";
import JumbotronComponent from "../components/JumbotronComponent";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from "../actions/userAction";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <div>
        <JumbotronComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
