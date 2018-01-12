import React, { Component } from 'react';

import './popmenu.css';

class PopMenu extends Component{
  constructor(props) {
    super(props)
    this.state = {
      visible:false
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(){
    this.setState({
      visible:!this.state.visible
    })
  }
  render(){
    if(this.state.visible){
      return (
        <span className="float-right text-muted" onClick={this.handleClick}>
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
        <div className="popmenu-invisible-page-cover" onClick={this.handleClick}/>
        <div className="popmenu-parent">
          <div className="popmenu-container list-group">
            <button type="button" className="popmenu-item list-group-item list-group-item-action">Share</button>
            <button type="button" className="popmenu-item list-group-item list-group-item-action">Update</button>
            <button type="button" className="popmenu-item list-group-item list-group-item-action">Delete</button>
          </div>
        </div>

      </span>);
    }else{
      return(<span className="float-right text-muted" onClick={this.handleClick}>
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </span>);
    }

  }
}

export default PopMenu;
