import React from 'react';
import { Spinner } from 'reactstrap';

export default class SpinnerRed extends React.Component {
  render() {
    return (
      <div>
        <Spinner color="danger" />
      </div>
    );
  }
}