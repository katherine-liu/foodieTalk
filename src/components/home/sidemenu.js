import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Sidemenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <ListGroup>
        <ListGroupItem header="March 14th 2018" href="#">Born.</ListGroupItem>
        <ListGroupItem header="March 13th 2018" href="#">Be brave and think deeply.</ListGroupItem>
      </ListGroup>
      </div>
    )
  }
}

export default Sidemenu;
