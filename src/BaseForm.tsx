import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import {ComponentBaseInput, ComponentSelectInput, 
  ComponentCheckBoxInput,ComponentTextArea} from './BaseInput';

import {ComponentModalExample} from './ModalExample';
import {ComponentModalExampleStep2} from './ModalExample2';

interface IComponentBaseFormProps{

};

interface IComponentBaseFormState{
  inputValue: string;
  selectValue: string;
  checkboxValue: string[];
  textAreaValue: string;
  isTextAreaHidden: boolean;
  isCheckBoxAreaHidden: boolean;
  progressValue: number;
  progressTotal: number;
  showModalExample: boolean;
  showModalExampleStep2: boolean;
};

export class ComponentBaseForm extends React.Component<IComponentBaseFormProps, any>{

  constructor(props: IComponentBaseFormProps){
    super(props);
    this.state = {
      inputValue: 'xd',
      selectValue: 'a',
      checkboxValue: [],
      textAreaValue: '',
      isTextAreaHidden: false,
      progressValue: 0,
      showModalExample: false,
      showModalExampleStep2: false,
    }
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
    this.onChangeTextArea = this.onChangeTextArea.bind(this);
    this.onClickButtonTextArea = this.onClickButtonTextArea.bind(this);
    this.onClickCheckBoxArea = this.onClickCheckBoxArea.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.upload = this.upload.bind(this);
    this.onClickOpenModal = this.onClickOpenModal.bind(this);
    this.onClickCloseModal = this.onClickCloseModal.bind(this);
    this.onClickCloseModalStep2 = this.onClickCloseModalStep2.bind(this);
    this.onClickNextModal = this.onClickNextModal.bind(this);
    this.onClickPrevModal = this.onClickPrevModal.bind(this);
  }

  upload(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://zinoui.com/demo/progress-bar/upload.php", true);
    let component = this;
    console.log('its happening');
    if (xhr.upload) {
      xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
          console.log(e.loaded);
          console.log(e.total);
          component.setState({
            progressValue : e.loaded,
            progressTotal : e.total
          });
        }
      }
      xhr.upload.onloadstart = function(e) {
        component.setState({
          progressValue: 0
        });
      }
      xhr.upload.onloadend = function(e) {
        component.setState({
          progressValue : e.loaded
        });
      }
    }
    xhr.send(data);
  }

  buildFormData() {
    var fd = new FormData();
  
    for (var i = 0; i < 6000; i += 1) {
      fd.append('data[]', Math.floor(Math.random() * 999999).toString());
      console.log(i);
    }
    return fd;
  }

  onSubmit(event: any){

    event.preventDefault();
    this.upload(this.buildFormData);
  }

  onClickButtonTextArea(event: any){

    event.preventDefault();
    this.setState({
      isTextAreaHidden: !this.state.isTextAreaHidden
    })
  }

  onClickCheckBoxArea(event: any){

    event.preventDefault();
    this.setState({
      isCheckBoxAreaHidden: !this.state.isCheckBoxAreaHidden
    })
  }

  onChangeInput(event: Event){

    let element:HTMLInputElement = event.target as HTMLInputElement;

    this.setState({
      inputValue: element.value
    });
  }

  onChangeSelect(event: Event){

    let element:HTMLSelectElement = event.target as HTMLSelectElement;
    this.setState({
      selectValue: element.value
    });
  }

  onChangeTextArea(event: Event){

    let element:HTMLTextAreaElement = event.target as HTMLTextAreaElement;
    this.setState({
      textAreaValue: element.value
    });
  }

  onChangeCheckBox(event: Event){
    let element:HTMLInputElement = event.target as HTMLInputElement;
    let elementOption = element.value;
    let newSelection: string[] = [];

    if(this.state.checkboxValue.indexOf(elementOption) > -1){
      newSelection = this.state.checkboxValue.filter(option => option !== elementOption);
    }
    else{
      newSelection = [...this.state.checkboxValue, elementOption];
    }

    this.setState({
      checkboxValue: newSelection
    });
  }

  onClickOpenModal(event:any){
    event.preventDefault();
    this.setState({
      showModalExample: true
    });
  }

  onClickCloseModal(event:any){
    event.preventDefault();
    this.setState({
      showModalExample: false
    });
  }

  onClickCloseModalStep2(event:any){
    event.preventDefault();
    this.setState({
      showModalExampleStep2: false
    });
  }

  onClickNextModal(event: any){
    console.log('ocurrio next');
    event.preventDefault();
    this.setState({
      showModalExample: false,
      showModalExampleStep2: true
    });
  }

  onClickPrevModal(event:any){
    event.preventDefault();
    this.setState({
      showModalExample: true,
      showModalExampleStep2: false
    });
  }

  render(){

    let modalExample = 
    <ComponentModalExample 
      ViewModalLogin={this.onClickCloseModal}
      image={"https://img.pokemondb.net/artwork/bulbasaur.jpg"}
      nextModal={this.onClickNextModal}/>

    let modalExampleStep2 = 
    <ComponentModalExampleStep2
      ViewModalLogin={this.onClickCloseModalStep2}
      image={"https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"}/>

    return (
      <form action="" onSubmit={this.onSubmit}>
        <GridContainer>
          <Grid1x1>
            <ComponentBaseInput 
            title={"titulo"} 
            name={"ninput"} 
            value={this.state.inputValue} 
            onChange={this.onChangeInput}/>
          </Grid1x1>
          <Grid1x1>
            <ComponentSelectInput
              title={"select"} 
              name="nselect" 
              options={["a","b","c"]} 
              selectedOption={this.state.selectValue} 
              onChange={this.onChangeSelect}/>
          </Grid1x1>
          <Grid1x1 hidden={this.state.isCheckBoxAreaHidden}>
            <ComponentCheckBoxInput 
              title="title?" 
              setName="nchkbox" 
              options={["a","b","c"]}
              selectedOptions={this.state.checkboxValue}
              onChange={this.onChangeCheckBox}/>
          </Grid1x1>
          <Grid2x1>
            <ComponentTextArea
              title={"kappa?"}
              name={"ntxtarea"}
              rows={5}
              value={this.state.textAreaValue}
              onChange={this.onChangeTextArea}
              />
          </Grid2x1>
          <Grid1x1 hidden={this.state.isTextAreaHidden}>
            <ComponentTextArea
                title={"kappa?"}
                name={"ntxtarea"}
                rows={5}
                value={this.state.textAreaValue}
                onChange={this.onChangeTextArea}
                />
          </Grid1x1>
          <Grid2x1>
            <button onClick={this.onClickButtonTextArea}>Hide Text Area!</button>
            <button onClick={this.onClickCheckBoxArea}>Hide CheckBox Area!</button>
          </Grid2x1>
          <Grid2x1>
            <input type="submit" value="Enviar!!!"/>
            <progress value={this.state.progressValue} max={this.state.progressTotal}></progress> 
          </Grid2x1>
          <Grid2x1>
            <button onClick={this.onClickOpenModal}>ShowModal !!!</button>
            { this.state.showModalExample ? modalExample : null}
            { this.state.showModalExampleStep2 ? modalExampleStep2 : null}
          </Grid2x1>
        </GridContainer>
        
      </form>
    );
  }
}

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: [start] auto [middle] auto [end];
  grid-gap: 1px;
  padding: 1px;
  
`;

export const Grid1x1 = styled.div`
  box-shadow: 0 0 0 1px lightblue;
  padding: 0 12px;
  ${props => props.hidden && css`
    display: none;
  `}
`;

export const Grid2x1 = styled.div`
  padding: 0 12px;
  box-sizing: border-box;
  grid-column: start/end;
  box-shadow: 0 0 0 1px pink;
  ${props => props.hidden && css`
    display: none;
  `}
`;


