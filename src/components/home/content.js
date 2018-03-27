import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/events')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      let blogs = data.map((blog) => {
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
