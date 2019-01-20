import React, { Component } from 'react';
import Form from './Form'
import Resultado from './Resultado';
import './App.css'
//import  Images from './Images./1008259.jpg';

class App extends Component {
  constructor(state){
    super(state)
    this.state={
      peso: 0,
      planeta:'',
      result: 0,
    }
    this.handleOnchangeSelect = this.handleOnchangeSelect.bind(this)
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this)
    this.operation = this.operation.bind(this)
  }

  //functions to change the state input and value

  handleOnchangeSelect (event) {
    this.setState({
     planeta: event.target.value
    })
  }

  handleOnChangeInput(event){
    this.setState({
      peso: event.target.value
    })
  }

  // function to calculate the weight

  operation(){
    let resultado;

    if(this.state.planeta === 'Mercurio') resultado = this.state.peso * 0.0387
    else if(this.state.planeta === 'Venus') resultado = this.state.peso * 0.9051
    else if(this.state.planeta === 'Marte') resultado = this.state.peso * 0.3775
    else if(this.state.planeta === 'Jupiter') resultado = this.state.peso * 2.5306
    else if(this.state.planeta === 'Saturno') resultado = this.state.peso * 1.0653
    else if(this.state.planeta === 'Urano') resultado = this.state.peso *  0.8877
    else if(this.state.planeta === 'Neptuno') resultado = this.state.peso * 1.1377
    else if(this.state.planeta === 'Pluton') resultado = this.state.peso * 0.0632
    this.setState({
      result:resultado
    })
  }
  
  render() {
    return (
     // <div>
     // <img src={Images} alt=""></img>
      <div className="App">
       <p>Calcula tu peso en otro planeta!</p>
        <Form  
        handleChangeInput={this.handleOnChangeInput} 
        handleChangeSelect={this.handleOnchangeSelect}
        planetaElegido={this.state.planeta}
        calcular={this.operation}
        />
        <Resultado 
        valorPeso={this.state.peso} 
        valorPlaneta={this.state.planeta} 
        valorResultado={this.state.result}/>
      </div>
     // </div>
    );
  }
}

export default App;