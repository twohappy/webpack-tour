import _ from 'lodash';
import './styles/style.css';
import Icon from './assets/icon.jpg';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import Data from './assets/data.xml';
import Stock from './assets/data.csv';
import toml from './assets/data.toml';
import yaml from './assets/data.yaml';
import json from './assets/data.json5';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

function component3() {
  const element = document.createElement('i');
  element.classList.add('fa');
  element.classList.add('fa-plus');

  return element;
}

document.body.appendChild(component());
document.body.appendChild(component3());
console.log('asdfggggg',Stock);
console.log(Data);
console.log(toml, yaml,json)

// console.log(toml.title); // output `TOML Example`
// console.log(toml.owner.name); // output `Tom Preston-Werner`

// console.log(yaml.title); // output `YAML Example`
// console.log(yaml.owner.name); // output `Tom Preston-Werner`

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`
