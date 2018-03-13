import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Homepage from './components/home/homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: ''
    }
  }

  componentWillMount() {
    this.setState({
      paras: 4,
      html: true,
      text: 'Orignal text...Bla bla bla...'
    })
    // this.getSampleText();
  }

  getSampleText() {
    axios.get(
      'http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html,
      {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(res => {
      this.setState({text: res.data.text}, function() {
        console.log(res);
      });
    })
    .catch(err => console.log(err));
  }

  showHtml(x) {
    this.setState({html: x}, function () {
      // should put getSampleText() to make the paragraph dynamic
      console.log(this.state.html);
    })
  }

  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
