import _ from "lodash";
import myName from "./myName";
import {functionOne, functionTwo} from './myModule';
import './style.css';
import Icon from './icon.png';

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

function component2() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Cody');
  return element;
}

function component3() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = functionOne() + functionTwo();
  return element;
}

document.body.appendChild(component());
document.body.appendChild(component2());
document.body.appendChild(component3());
