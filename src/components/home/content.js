import React, {Component} from 'react';
import { Grid, Row, Col, Thumbnail, Panel } from 'react-bootstrap';
import Pic from '../../assets/brunch.JPG';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  renderContent(type, data) {
    const styles = {
      container: {
        marginLeft: 10,
        marginRight: 10,
      },
      thumbnail: {
        caption: {
          height: 210,
          width: 400,
        },
        h3: {
          height: 26,
        },
        p: {
          display: 'block',
          height: 100,
          maxWidth: 272,
          margin: '0 auto',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    };
    let blogs = [];
    if(type === 'list') {
      blogs = data.map((blog) => {
        return(
          <div key={blog._id}>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">{blog.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>{blog.content}</Panel.Body>
          </Panel>
          </div>
        )
      })
    }
    else if(type === 'card') {
      blogs = data.map((blog) => {
        return(
          <Col key={blog._id} xs={6} md={4}>
          <Thumbnail src={Pic} alt="242x200">
            <h3 style={styles.thumbnail.h3}>{blog.title}</h3>
            <p style={styles.thumbnail.p}>{blog.content}</p>
          </Thumbnail>
          </Col>
        )
      })
    }
    return <Grid><Row>{blogs}</Row></Grid>;
  }

  componentWillMount() {
    fetch('http://localhost:3000/api/events')
    .then(results => {
      return results.json();
    }).then(data => {
      // console.log(data);
      let blogs = this.renderContent('card', data);
      this.setState({blogs: blogs});
    })
  }

  render() {
    return(
      <div>{this.state.blogs}</div>
    )
  }
}

export default Content;
