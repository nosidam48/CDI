import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import MainContainer from "../components/Container";
import LoadingSpinner from "../components/LoadSpinner";
import auth0Client from '../Auth';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    return (
      <MainContainer>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <LoadingSpinner className="kidsSpin" />
          </Col>
        </Row>
      </MainContainer>
    );
  }
}

export default withRouter(Callback);