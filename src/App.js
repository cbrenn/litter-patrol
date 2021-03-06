import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log('here',this.state.bins);
  }

  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }

    return bins;
  }

  onTrashClicked = (index) => {
    // Fill this in!
    console.log('onTrashClicked',index)
    //add point
    this.setState({ points: this.state.points+1 });
    console.log(this.state.points)
    //remove imgs

  }




  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash key = {`trash-${index}`}
        onTrashClicked = { this.onTrashClicked} index={index}
      visible={bin.isTrashVisible} />
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
