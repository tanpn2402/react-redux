import React, {Component} from 'react';

var SlideNavigator = React.createClass({

  onClick: function onClick(param1, param2, param3){
    console.log(param1);
    console.log(param2);
    console.log(param3);
    //console.log(e.target);
    document.getElementById("mySidenav").style.width = "250px";
  },

  openSlideTab: function openSlideTab(){
    document.getElementById("mySidenav").style.width = "250px";
  },

  closeSlideTab: function closeSlideTab(){
    document.getElementById("mySidenav").style.width = "0px";
  },

  

  generateMainMenu: function(){
    return (
      <div>
          <li className="nav-header">Đặt lệnh</li>
          <li><a href='#'>Mua/Bán</a></li>
          <li><a href='#'>Dashboard</a></li>
          <li><a href='#'>Dashboard</a></li>
          <li><a href='#'>Dashboard</a></li>
          <li className="nav-header">Next Section</li>
          <li><a href='#'>Sample Section</a></li>
          <li><a href='#'>Sample Section</a></li>
          <li><a href='#'>Sample Section</a></li>
          <li><a href='#'>Sample Section</a></li>
          <li className="nav-header">Third Section</li>
          <li><a href='#'>Third Sample Section</a></li>
          <li><a href='#'>Third Sample Section</a></li>
          <li><a href='#'>Third Sample Section</a></li>
          <li><a href='#'>Third Sample Section</a></li>
      </div>
      );
  },
  
  render() {
    return (
      <div>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={this.closeSlideTab.bind()} >&times;</a>
        <ul className="nav nav-tabs nav-stacked main-menu">
          {this.generateMainMenu()}
        </ul>
      </div>

      <span className="main-menu" onClick={this.openSlideTab.bind()} >&#9776; menu</span>
      </div>
    );
  }
});

export default SlideNavigator;
