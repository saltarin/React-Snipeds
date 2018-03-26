import * as React from 'react';
import {ComponentTodoItem} from './TodoItem';

interface IPropsTodoList {

  welcome: string;
  counter: number;
}

interface IStateTodoList {

}

export class ComponentTodoList extends React.Component<IPropsTodoList, IStateTodoList> {
  constructor(props: IPropsTodoList) {
    super(props);
    this.fromChildren = this.fromChildren.bind(this);
  }

  fromChildren(dataFromChildren: any): void{
    console.log('data from children', dataFromChildren.data);
    console.log('counter from children', dataFromChildren.counter);
  }

  render(){
    return (
      <React.Fragment>
        <ComponentTodoItem propFromParent={this.props.counter} callbackFromParent={this.fromChildren}/>
        <ComponentTodoItem propFromParent={this.props.counter} callbackFromParent={this.fromChildren}/>
      </React.Fragment>
    );
  }
}
