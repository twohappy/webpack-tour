import _ from 'lodash';
import printMe from './print.js';
import {hello} from '@webpack-tour/getting-started';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'click me and check console';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}
document.body.appendChild(component());
hello()