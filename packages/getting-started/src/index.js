import _ from 'lodash';

function component() {
  console.log('???')
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
document.body.appendChild(component());

export function hello(){
  console.log('helo from getting start')
}