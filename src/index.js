import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import './css/bootstrap.min.css';*/
import './css/react-bootstrap-table-all.min.css';
import App from './App';
import Frame from './view/Frame';
import BaseLayout from './view/BaseLayout';
import SlideNavigator from './view/SlideNavigator';
import registerServiceWorker from './registerServiceWorker';

import Popup from 'react-popup';
import AppLayout from './app/AppLayout';

import Dropdown from './components/Dropdown';
//ReactDOM.render(<SlideNavigator />, document.getElementById('slide-nav'));
ReactDOM.render(<AppLayout />, document.getElementById('root'));
ReactDOM.render(<Popup />, document.getElementById('popupContainer'));
var colours = [{
  name: "Porfolio",
  hex: "#F21B1B"
}, {
  name: "Sign Order",
  hex: "#1B66F2"
}, {
  name: "Green",
  hex: "#07BA16"
}, {
  name: "KK",
  hex: "#07BA16"
}];


//ReactDOM.render(<Dropdown list={colours} selected={colours[0]} />, document.getElementById("dropdown"));
//ReactDOM.render(<Dropdown list={colours} selected={colours[1]} />, document.getElementById("dropdown1"));

registerServiceWorker();

