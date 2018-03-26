import * as React from 'react';

export interface ClockState{

  date: Date;
  anime: boolean;
}


export class Clock extends React.Component<any,ClockState>{

  private timerID: any;


  constructor(props: any){
    super(props);
    this.state = {
      date : new Date(),
      anime: false
    }
  }

  tick(){
    let newState = {
      date : new Date()
    };
    this.setState(newState);
  }

  componentDidMount(){

    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){

    clearInterval(this.timerID);
  }

  onclick(e: Event){

    e.preventDefault();
    console.log('Presionado!');
  }

  render(){
    return (
      <div onClick= {this.onclick.bind(this)}>
        <h1>Clock!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <h3>{this.state.anime}</h3>
      </div>
    );
  }
}


export class Kappa extends React.Component<any,any>{

  render(){

    return (
      <div>
        <Clock/>
        <Clock/>
        <Clock/>
        <Clock/>
      </div>
    );
  }
}