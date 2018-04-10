import { Grid, Row, Col } from 'react-bootstrap';
import React, {Component} from 'react';
import Navmenu from '../nav/navbar';
import Carousel from './carousel';
import Content from './content';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      grid: {
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0
      },
      row: {
        marginLeft: 0,
        marginRight: 0
      },
      col: {
        paddingLeft: 0,
        paddingRight: 0
      }
    };
    return(
      <div>
        <Grid fluid={true} style={styles.grid}>
          <Row><Col style={styles.col} xs={12}><Carousel /></Col></Row>
          <Row><Col xs={12}><Navmenu /></Col></Row>
        </Grid>
        <Content />
      </div>
    )
  }
}

export default Homepage;
