import React, { Component } from 'react';

class Resultado extends Component {

  render() {
    return (
      <div>
        <p>Tu peso en {this.props.valorPlaneta} es:  {this.props.valorResultado} </p>
      </div>
    );
  }
}

export default Resultado;