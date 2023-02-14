import './style.css';
import logo from './images/logo.jpg';
import domdisplay from './modules/dom.js';

const image = document.querySelector('.logo');
image.src = logo;
domdisplay();
