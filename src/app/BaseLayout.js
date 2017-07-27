import React from 'react';
import BasicTable from '../components/BasicTable';
import SearchArea from '../components/SearchArea';

var PropTypes = require('prop-types');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var _ = require('lodash');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ReactGridLayout = require('react-grid-layout');
ReactGridLayout = WidthProvider(ReactGridLayout);
class ParentComponent extends React.Component {

    constructor () {
        super()
        console.log("constructor");
    }

    generateChild(p){
        var products = [{
              id: 1,
              name: "Product1",
              price: 120
          }, {
              id: 2,
              name: "Product2",
              price: 80
          }];
        return (
            <div key={p.i} data-grid={{x: p.x, y: p.y, w: p.w, h: p.h, minW: p.minW, minH: p.minH, static: p.static}}>
                <div className="child-grid-header" onClick={this.props.onWindowTitleClick}>
                    <div className="col-md-8 window-title">
                        <span>{p.i.split('-')[0]}</span>
                    </div>
                    <div className="col-md-4 window-action">
                        <ul className="btn-action">
                            <li className="btn-pin"><a href="javascript:void(0);" id={p.i}  onClick={this.props.onPinLayout}>!</a></li>
                            <li className="btn-close"><a href="javascript:void(0);" id={p.i}  onClick={this.props.onCloseLayout}>x</a></li>
                        </ul>
                    </div>
                        
                </div>
                <div className="child-grid-body" onClick={this.props.onWindowBodyClick}>
                        <div className="layout-body">
                            <div>
                                <SearchArea></SearchArea>
                            </div>
                            <BasicTable></BasicTable>
                        </div>
                </div>
            </div>

            /*<SignOrder param={p} onPinLayout={this.props.onPinLayout} onCloseLayout={this.props.onCloseLayout}
                    onWindowBodyClick={this.props.onWindowBodyClick} onWindowTitleClick={this.props.onWindowTitleClick}>
            </SignOrder>*/
        )
    }

    generateDOM(p){
        var child = [];
        for (var i = 0; i < p.length; i += 1) {
            
            //console.log(p[i].h);
            child.push( this.generateChild(p[i]) );
            
        };

        return child;
    }

    onLayoutChange(layout){
        //console.log('onLayoutChange', layout);
    }
    render () {
        //console.log(this.props.layout);
        return (

            <ReactGridLayout className="layout" cols={20} rowHeight={30} width={1320} 
                onResize={this.props.onResize}
                onResizeStop={this.props.onResizeStop}
                onResizeStart={this.props.onResizeStart}
                onDrag={this.props.onDrag}
                onDragStart={this.props.onDragStart}
                onDragStop={this.props.onDragStop}
                onLayoutChange={this.onLayoutChange}
                >
                {this.generateDOM(this.props.layout)}
            </ReactGridLayout>
        );
    }
}

export default ParentComponent;