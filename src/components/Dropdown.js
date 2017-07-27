import React from 'react';

class Dropdown extends React.Component {

  constructor () {
      super()
      this.state = {

          listVisible: false,
      };
  }
  
  select(item) {
    this.props.onSeleted;
    //console.log(item);
    //this.props.selected = item;
  }
        
  show() {
    this.setState(
      { 
        listVisible: true ,
      }
    );


    //document.addEventListener("click", this.hide.bind(this));
  }
        
  hide() {
    this.setState({ listVisible: false, });
    //document.removeEventListener("click", this.hide.bind(this));
  }

  toggleDropdown(){
    this.setState( {listVisible: !this.state.listVisible });
  }

  onMouseOver(){
    this.setState({ listVisible: true, });
  }

  onMouseOut(){
    this.setState({ listVisible: false, });
  }
      
  render() {
    return (
      <div className={"dropdown-container"}>
        <div className={"dropdown-display"} 
          onMouseOver={this.toggleDropdown.bind(this)}
          onMouseOut={this.toggleDropdown.bind(this)}>
          <span style={{ color: this.props.selected.hex }}>{this.props.selected.name}</span>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className={"dropdown-list " + (this.state.listVisible ? "show": "hide")}
          onMouseOver={this.onMouseOver.bind(this)}
          onMouseOut={this.onMouseOut.bind(this)}>
          
            {this.renderListItems()}
         
        </div>
      </div>
    );
  }
        
  renderListItems() {
    var items = [];
    for (var i = 0; i < this.props.list.length; i++) {
      var item = this.props.list[i];
      items.push(
        <div className="dropdown-item">
          <span onClick={this.props.onSelected} id={item.id}>{item.name}</span>
       </div>);
    }
    return items;
  }
}


export default Dropdown;


