import React, {Component} from 'react';

import logo from './logo.svg';

import './App.css';

class MyButton extends Component{

  render(){
    return (
      <button 
      onClick={()=>{this.props.handleclick(this.props.label); }}
      >
      {this.props.label}
      </button>
    );
  }
}

class MyLabbel extends Component{
  render(){
    return <p> Cliquei no: {this.props.text}</p>
  }
}


class App extends Component {

  constructor(props){
    super(props);

    this.state={
      labelText:'',
    };

    this.setLabelText = this.setLabelText.bind(this);
  }

  setLabelText (labelText) {
    this.setState({labelText});
  }


  render() {

    return (
    <div classname="App">
      <p>"Hello!"</p>
      <MyLabbel text={this.state.labelText} />
      <MyButton handleclick={this.setLabelText} label="Botão 1"/>
      <MyButton handleclick={this.setLabelText} label="Botão 2"/>
      <MyButton handleclick={this.setLabelText} label="Botão 3"/>
      <MyButton handleclick={this.setLabelText} label="Botão 4"/>
    </div>
    
  );

  }  
}

export default App;
