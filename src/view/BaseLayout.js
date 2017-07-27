import React from 'react';

import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import '../App.css';
var PropTypes = require('prop-types');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var _ = require('lodash');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ReactGridLayout = require('react-grid-layout');
ReactGridLayout = WidthProvider(ReactGridLayout);

var BaseLayout = React.createClass({

  mixins: [PureRenderMixin],

  propTypes: {
    onLayoutChange: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      className: "layout",
      items: 20,
      rowHeight: 30,
      onLayoutChange: function() {},
      cols: 12
    };
  },

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
    
    return (
      <ReactGridLayout className="base-layout" cols={12} rowHeight={30} width={1336} 
        onResizeStart={this.onResizeStart}
        onResize={this.onResize}
        onResizeStop={this.onResizeStop}
        >
        {/*push frame at here*/}



      </ReactGridLayout>
    )
  }
});


export default BaseLayout;

