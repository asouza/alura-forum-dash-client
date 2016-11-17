import React, { Component } from 'react';
import TopicVisualization from './TopicVisualization';
class App extends Component {

  constructor(){
    super();
    this.state = {topics : []};   
  }

  componentDidMount() {
    console.log("didmount");
    const json = [
          {
            creationDate: "05/11/2016 11:00:00",
            days: 10,
            category: "Programação",
            subcategory: "Lógica de Programação",
            course: "Arduino",
            title: "Não vai ter resposta!",
            link: "http://alura.com.br"        
            
          },
            {
            creationDate: "05/11/2016 11:00:00",
            days: 10,
            category: "Programação",
            subcategory: "Lógica de Programação",
            course: "Arduino",
            title: "Não vai ter resposta!",
            link: "http://alura.com.br"        
            
          },
            {
            creationDate: "05/11/2016 11:00:00",
            days: 10,
            category: "Programação",
            subcategory: "Lógica de Programação",
            course: "Arduino",
            title: "Não vai ter resposta!",
            link: "http://alura.com.br"        
            
          }
        ]; 
        this.setState({topics:json});

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
