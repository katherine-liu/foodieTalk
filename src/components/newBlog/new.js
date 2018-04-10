import React, {Component} from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  post() {
    fetch('http://localhost:3000/api/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.Stringify({
        'title': 'The 6th post',
        'author': 'Katheirne L',
        'content': 'Posted from Insomnia.'
      })
    })
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
    })
  }

  getValidationState() {
      const length = this.state.title.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    const styles = {
      row: {
        marginTop: 25
      }
    };
    return(
      <form>
      <Grid fluid={true}>
        <Row style={styles.row}>
          <Col xs={8} xsOffset={2}>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="Enter Title"
                onChange={this.handleChange.bind(this)}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={8} xsOffset={2}>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Blog content</ControlLabel>
              <FormControl componentClass="textarea" rows="8" placeholder="type here..." />
            </FormGroup>
          </Col>
        </Row>
      </Grid>
     </form>
    )
  }
}

export default New;
