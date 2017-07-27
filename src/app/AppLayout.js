import React from 'react';
import BaseLayout from '../app/BaseLayout.js';
import ReactDOM from 'react-dom';
import Dropdown from '../components/Dropdown';
import Popup from 'react-popup';
class AppLayout extends React.Component {
    constructor () {
        super()
        this.colours = [{
              name: "Porfolio",
              hex: "#F21B1B",
              id: "porfolio"
            }, {
              name: "Sign Order",
              hex: "#1B66F2",
              id: "buysell"
            }, {
              name: "History",
              hex: "#07BA16",
              id: "orderhistory"
            }, {
              name: "Odd Lot",
              hex: "#07BA16",
              id: "oddlot"
            }];
        ReactDOM.render(<Dropdown onSelected={this.onSelectected.bind(this)} list={this.colours} selected={this.colours[0]} />, document.getElementById("dropdown"));

        this.state = {

            numChildren: 1,
            mvLayout : [],
        };
        
        this.onBodyClick = false;
        this.onTitleClick = false;

    }

    onSelectected(event){
        
        var temp = this.state.mvLayout.filter(el => el.i.split('-')[0] === event.target.id);
        console.log('selected', temp);
        if(temp.length == 0 ){
            this.onAddChild(event.target.id);
        }
        else{
            Popup.alert('Bạn chỉ được mở tối đa 1 cửa sổ như vậy');
        }
        
    }

    onWindowBodyClick(event){
        this.onBodyClick = true;
        this.onTitleClick = false;
    }

    onWindowTitleClick(event){
        this.onBodyClick = false;
        this.onTitleClick = true;
        console.log(this.onTitleClick);

    }


    onResizeStart(layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement){
        
    }

    onResize(layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement){
        //console.log('sd');
    }

    onResizeStop(layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement){

        //console.log('onResizeStop', newItem.i);
        /*let {mvLayout} = this.state;
        mvLayout.map(el => el.i === newItem.i ? Object.assign(el, newItem) : el);
        this.setState({mvLayout});*/

        this.setState({
            mvLayout: this.state.mvLayout.map(el => el.i === newItem.i ? Object.assign(el, newItem) : el)
        });

        //console.log('resize stop' , this.state.mvLayout);
    }

    onDragStart(layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement){
        if(this.onTitleClick){
            console.log('onDragStart', layout);
        }
    }

    onDrag(layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement){

    }

    onDragStop(layout: Layout, oldItem: LayoutItem, newItem: LayoutItem,
                     placeholder: LayoutItem, e: MouseEvent, element: HTMLElement){
        //console.log(newItem);

        this.setState({
            mvLayout: this.state.mvLayout.map(el => el.i === newItem.i ? Object.assign(el, newItem) : el)
        });

        //console.log('drag stop' , this.state.mvLayout);
    }

    onPinLayout(e){
        //console.log(e.target.id);
        var temp = this.state.mvLayout.filter(el => el.i === e.target.id)[0].static;
        //console.log(temp);

        this.setState({
            mvLayout: this.state.mvLayout.map(el => el.i === e.target.id ? Object.assign(el, {i: el.i + '-x', static: !temp }) : el)
        });

        console.log('pin' , this.state.mvLayout);
    }

    onCloseLayout(e){
        this.setState({
            mvLayout: this.state.mvLayout.filter(el => el.i !== e.target.id)
        });
    }

    onAddChild () {
        this.setState({
            numChildren: this.state.numChildren + 1,
        });

        let {mvLayout} = this.state;
        mvLayout.push({i: this.state.numChildren+'c', x: 0, y: this.state.numChildren+2,
             w: 6, h: 4, minW: 3, minH: 4, static: false});
        this.setState({mvLayout});
        

    }

    onAddChild (frameid) {
        this.setState({
            numChildren: this.state.numChildren + 1,
        });

        let {mvLayout} = this.state;
        mvLayout.push({i: frameid, x: 0, y: this.state.numChildren+2,
             w: 7, h: 13, minW: 6, minH: 13, static: false});
        this.setState({mvLayout});
        

    }

    

    render () {
        //this.layout.push({i: this.state.numChildren+'c', x: 0, y: this.state.numChildren+2, w: 6, h: 4, minW: 3, minH: 2, static: false});
        //console.log('render in applayout', this.state.mvLayout);
        return (
            <div>
                <BaseLayout layout={this.state.mvLayout} 
                    onWindowBodyClick={this.onWindowBodyClick.bind(this)}
                    onWindowTitleClick={this.onWindowTitleClick.bind(this)}
                    onResize={this.onResize.bind(this)} 
                    onResizeStart={this.onResizeStart.bind(this)}
                    onResizeStop={this.onResizeStop.bind(this)}
                    onDrag={this.onDrag.bind(this)} 
                    onDragStart={this.onDragStart.bind(this)}
                    onDragStop={this.onDragStop.bind(this)}
                    onPinLayout={this.onPinLayout.bind(this)}
                    onCloseLayout={this.onCloseLayout.bind(this)}
                    >
                </BaseLayout>
            </div>
        );
    }

    
}

export default AppLayout;