import * as React from 'react';
import styled, { css } from 'styled-components';
import { 
  Section as NormalizedSection
} from 'normalized-styled-components';
import {ModalGeneric} from './modal-generic';
import {ContactButtonCloseModal} from './ContactButtonCloseModal';


interface IComponentModalExampleProps{
  ViewModalLogin?: any;
  prevModal?: any;
  image: string;
}

const TagModalContactContainer = styled(NormalizedSection)`
    word-wrap: break-word;
    overflow-x: hidden;
    max-height: 90%;
    width: 300px;
    background-color: #f4f2e6;
    color: #2f2f2f;
    font-family: gotham-book;
    font-size: 15px;
    box-sizing: border-box;
`;

export class ComponentModalExampleStep2 extends React.Component<IComponentModalExampleProps, {}>{

  render(){
    return (
      <ModalGeneric clickModal={this.props.ViewModalLogin}>
        <TagModalContactContainer>
          <ContactButtonCloseModal onClickCloseModal={this.props.ViewModalLogin}/>
          <img src={this.props.image} alt="kappa"/>
          <button onClick={this.props.prevModal}>Return!</button>
        </TagModalContactContainer>
      </ModalGeneric>
    );
    
  }
}