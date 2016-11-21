import React, { Component } from 'react';
import TopicVisualization from './TopicVisualization';
class App extends Component {

  constructor(){
    super();
    this.state = {topics : []};   
  }

  componentDidMount() {
    console.log("didmount");
    fetch('http://localhost:8080/sem-respostas').then((response) => {
      return response.json();
    }).then((topics) => {
      this.setState({topics:topics.list});
    });

  }


  render() {
    console.log("renderizando");
    return (
      <div className="App">
        <TopicVisualization data={this.state.topics}/>
      </div>
    );
  }
}

export default App;
