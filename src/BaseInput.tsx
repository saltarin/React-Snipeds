import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

const ValidationMessage = styled.div`
  display: none;  
`;

interface IInputProps{
  title: string;
  name: string;
  value: string;
  onChange: any;
  className?: string;
  validationMessage?: string;
}

export const InputTitle = styled.label`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: gotham-book;
  color: #8e8e8e;
`;

export const InputBody = styled.input`
  width: 100%;
  border: none;
  outline: none;
  transition: all .5s ease;
  background: #fff;
`;


export function ComponentBaseInput(props: IInputProps) {
  return (
    <div>
      <div className={props.className}>
        <InputTitle>{props.title}</InputTitle>
        <InputBody type="text" name={props.name} onChange={props.onChange} value={props.value}/>
      </div>
    </div>
  );
}



interface ISelectProps{
  title: string;
  name: string;
  options: string[];
  selectedOption: string;
  onChange: any;
}

export const SelectBody = styled.select`
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export function ComponentSelectInput(props: ISelectProps){
  return (
    <div>
      <InputTitle>{props.title}</InputTitle>
      <SelectBody name={props.name} onChange={props.onChange} value={props.selectedOption}>
      {props.options.map(option => {
        return <option key={option} value={option}>{option}</option>
      })}
      </SelectBody>
    </div>
  );
}

interface ICheckBoxProps{
  title: string;
  setName: string;
  options: string[];
  selectedOptions: string[];
  onChange: any
}


export const CheckBoxContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 15px;
  font-family: gotham-book;
  font-size: 15px;
  color: #292929;
`;

export const BodyCheckBox = styled.input`
  flex: 0 1 25%;
  margin-bottom: 12px;
`;

export function ComponentCheckBoxInput(props: ICheckBoxProps){
  return (
    <div>
      <InputTitle>{props.title}</InputTitle>
      <CheckBoxContainer>
        {props.options.map(option => {
          return (
            <div key={option}>
              <input type="checkbox" 
              name={props.setName} 
              onChange={props.onChange} 
              value={option} 
              checked={props.selectedOptions.indexOf(option) > -1}/>
              <label>{option}</label>
            </div>
          );
        })}
      </CheckBoxContainer>
    </div>
  );
}


interface ITextAreaProps{

  title: string;
  name: string;
  rows: number;
  value: string;
  onChange: any;
}

export const TexAreaBody = styled.textarea`
  border: none;
  outline: none;
  padding: 0;
  width: 100%;
  height: 154px;
  resize: none;
  padding: 10px;
  background: #fff;
  line-height: 1.4;
`;

export function ComponentTextArea(props: ITextAreaProps){

  return(
    <div>
      <InputTitle>{props.title}</InputTitle>
      <TexAreaBody 
        name={props.name} 
        rows={props.rows} 
        value={props.value} 
        onChange={props.onChange}></TexAreaBody>
    </div>
  );
}

export const Grid1x1 = styled.div`
  box-shadow: 0 0 0 1px lightblue;
  padding: 0 12px;
`;

export const Grid2x1 = styled.div`
  padding: 0 12px;
  box-sizing: border-box;
  grid-column: start/end;
  box-shadow: 0 0 0 1px pink;
`;


