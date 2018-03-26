import * as React from 'react';


export interface KappaProps{

  name: string;
  any: string;
}

export class Hello extends React.Component<KappaProps>{


  render(){
    return <h1>Hello, {this.props.name} {this.props.any}</h1>;
  }
}


export class ABC extends React.Component<any,any>{

  private kappa: number = 10;
  myClickEvent(event: Event){
    this.kappa = this.kappa + 1;
    alert('ocurrio? xD' + this.kappa);
  }

  render(){

    return(
      <div onClick={this.myClickEvent.bind(this)}>
        <Hello name="kappa" any="ross"></Hello>
        <Hello name="another " any="one"></Hello>
        <Hello name="and another" any="one"></Hello>
        <Hello name="and another" any="one xD"></Hello>
      </div>
    );
  }
}