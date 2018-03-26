import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './Hello';
import { ABC } from './Hello';

import {Clock} from './Clock';
import {Kappa} from './Clock';

import {Toggle} from './Toggle';

import {ComponentTodoList} from './TodoList';

import * as BaseInput from './BaseInput';
import {ComponentBaseForm} from './BaseForm';
import {ComponentModalTrigger} from './ModalTrigger';

ReactDOM.render(
  <ComponentBaseForm/>
  ,
  document.getElementById('root')
)