import React from 'react';
import SearchArea from '../components/SearchArea';
import BasicTable from '../components/BasicTable';
class SignOrder extends React.Component {

    constructor () {
        super()

        this.layout = {i: 'signorder', w: 8, h: 12, x:0, y:0, minW: 8, minH: 10};
       
        this.layout.w = this.props.param.w > this.layout.w ? this.props.param.w : this.layout.w;
        this.layout.h = this.props.param.h > this.layout.h ? this.props.param.h : this.layout.h;

        
    }


    render() {
    		return(

    			<div key={this.props.param.i} data-grid={{x: this.layout.x, y: this.layout.y, w: this.props.param.w, 
	    			h: this.props.param.h, minW: this.props.param.minW, minH: this.props.param.minH, static: this.props.param.static}}>
	                <div className="child-grid-header" onClick={this.props.onWindowTitleClick}>
	                    <div className="col-md-8 window-title">
	                        <span>{this.props.param.i.split('-')[0]}</span>
	                    </div>
	                    <div className="col-md-4 window-action">
	                        <ul className="btn-action">
	                            <li className="btn-pin"><a href="javascript:void(0);" id={this.props.param.i}  onClick={this.props.onPinLayout}>!</a></li>
	                            <li className="btn-close"><a href="javascript:void(0);" id={this.props.param.i}  onClick={this.props.onCloseLayout}>x</a></li>
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
    		)
    }
}

export default SignOrder;