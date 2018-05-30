import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

import Captain_Planet from
'../Captain_Planet.png';

class Trash extends Component {
  onPresentButtonClick = () => {
    console.log(this);
    this.props.onTrashClicked(this.props.index);
  }

  visible = () => {
    if (this.props.visible === true){
    return TrashIcon
  }else{
    return Captain_Planet
  }
  }

  noClick = () => {
    if (this.props.visible ===true){
this.onPresentButtonClick()

    }
  }

  render() {


    return (
      <div className="bin">
      <img onClick= {this.noClick} src= {this.visible()} alt="Trash" className="trash"></img>

      </div>
    );
  }
}

export default Trash;
