import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Panel>
          <Panel.Heading>March 14th 2018</Panel.Heading>
          <Panel.Body>Born.</Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">March 13th 2018</Panel.Title>
          </Panel.Heading>
          <Panel.Body>Be brave and think deeply.</Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default Content;
