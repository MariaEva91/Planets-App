import React, { Component } from 'react';

class Form extends Component {
 
  render() {
    return (
      <div className="form">
        <input type="number" onChange={this.props.handleChangeInput} />
        <select  defaultValue={this.props.planetaElegido} onChange={this.props.handleChangeSelect}>
          <option></option>
          <option value= "Mercurio">Mercurio</option>
          <option value= "Venus">Venus</option>
          <option value= "Marte">Marte</option>
          <option value= "Jupiter">Jupiter</option>
          <option value= "Saturno">Saturno</option>
          <option value= "Urano">Urano</option>
          <option value= "Neptuno">Neptuno</option>
          <option value= "Pluton">Pluton</option>
        </select>

        <button onClick={this.props.calcular}>Calcular peso</button>
      </div>
    );
  }
}


export default Form;