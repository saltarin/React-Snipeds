import * as React from 'react';

export interface ToggleState{

  isToggleOn:boolean;
}

export class Toggle extends React.Component<any,ToggleState>{
  constructor(props: any){
    super(props);
    this.state = {
      isToggleOn: true
    };
  }

  handleClick(e:MouseEvent) {
    this.setState(
      prevState => ({
        isToggleOn: !prevState.isToggleOn
      })
    );
  }

  render(){
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }

}