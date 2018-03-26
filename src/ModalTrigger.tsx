import * as React from 'react';
import {ComponentModalExample} from './ModalExample';

interface ComponentModalTriggerProps{
  
};
interface ComponentModalTriggerState{
  showModalExample: boolean;
};

export class ComponentModalTrigger extends React.Component<ComponentModalTriggerProps, ComponentModalTriggerState>{

  constructor(props:ComponentModalTriggerProps){
    super(props);
    this.state = {
      showModalExample: false
    };

    this.onClickButton = this.onClickButton.bind(this);
    this.onClickCloseModal = this.onClickCloseModal.bind(this);
  }

  onClickButton(event:any){

    this.setState({
      showModalExample: true
    });
  }

  onClickCloseModal(event){
    this.setState({
      showModalExample: false
    });
  }

  render(){
    return (
      <div>
        <button onClick={this.onClickButton}>Trigger Modal</button>
        {/*this.state.showModalExample ? <ComponentModalExample ViewModalLogin={this.onClickCloseModal}/>: null*/}
      </div>

    );
  }
}