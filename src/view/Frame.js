import React from 'react';

import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import '../App.css';
var ReactGridLayout = require('react-grid-layout');

var Frame = React.createClass({

  onLayoutChange: function(layout) {
    console.log('sds');
  },

  onResizeStart: function(layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement){
    console.log('resize start');
  },

  onResize: function(layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement){
    
  },

  onResizeStop: function(layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement){
    console.log(HTMLElement);
  },
  
  render: function() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 6, h: 6, minW: 4, minH: 6,static: false  },
      {i: 'b', x: 6, y: 0, w: 6, h: 6, minW: 4, minH: 6},
      {i: 'c', x: 0, y: 6, w: 12, h: 6, minW: 4, minH: 6}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1336} 
        onResizeStart={this.onResizeStart}
        onResize={this.onResize}
        onResizeStop={this.onResizeStop}
        >
        <div key={'a'}>
          <div className="child-grid-header"></div>
          <div className="child-grid-body">
            <div className="layout-body"></div>
          </div>
          
        </div>
        <div id="id1" key={'b'}>
          <div className="child-grid-header"></div>
          <div className="child-grid-body"></div>
          <div className="child-grid-footer"></div>
        </div>
        <div key={'c'}>
          <div className="child-grid-header"></div>
          <div className="child-grid-body"></div>
          <div className="child-grid-footer"></div>
        </div>
      </ReactGridLayout>
    )
  }
});


export default Frame;

