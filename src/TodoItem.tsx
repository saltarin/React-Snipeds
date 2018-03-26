import * as React from "react";

interface IPropsTodoItem {
  propFromParent: number;
  callbackFromParent: Function;
}

interface IStateTodoItem {
  fromParent: number;
}

export class ComponentTodoItem extends React.Component<
  IPropsTodoItem,
  IStateTodoItem
> {
  constructor(props: IPropsTodoItem) {
    super(props);
    this.state = {
      fromParent: this.props.propFromParent
    }
    this.onClick = this.onClick.bind(this);
  }

  someFunctionThanNotifyParent() {

    console.log('from children', this.state.fromParent);
    this.setState(
      {
        fromParent:this.state.fromParent + 1
      }
    );

    //something happen here :D
    let dataFromParent = {
      data: "<(-.-)>",
      counter: this.state.fromParent
    };
    this.props.callbackFromParent(dataFromParent);
  }

  onClick(e) {
    this.someFunctionThanNotifyParent();
  }

  render() {
    return (
      <React.Fragment>
        <p onClick={this.onClick}> "hola mundo" </p>
      </React.Fragment>
    );
  }
}
