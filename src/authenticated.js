import React, { Component } from 'react';

import PopMenu from './components/popmenu/popmenu.js';

class Authenticated extends Component {
  /*
  constructor(props) {
    super(props)
    //this.setLoggedIn = this.setLoggedIn.bind(this);
    //this.isLoggedIn = this.isLoggedIn.bind(this);

  }*/
  render() {

    return (
      <div>
        <p>Account: {this.props.web3.eth.accounts[0]}</p>
        <IdeaInput/>
        <p>Saved ideas</p>
        <IdeaList/>
      </div>
    );
  }
}

export default Authenticated;


class IdeaInput extends Component{
  render(){
    return(
      <div className="card text-white bg-dark mb-3">
        <div className="card-body">
          <div className="form-row">
            <div className="col">
              <input type="text" className="form-control form-control-lg" placeholder="Your idea..."/>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-outline-light btn-lg btn-block">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class IdeaList extends Component{
  render(){
    return(
      <ul className="list-group">
        <li className="list-group-item">
          <small className="text-muted">3 days ago</small>
          <PopMenu/>
          <p className="idea-text mb-0">My first idea</p>
        </li>
        <li className="list-group-item">
          <small className="text-muted">3 days ago</small>
          <PopMenu/>
          <p className="idea-text mb-0">My second idea, this one is amazing.</p>
        </li>
        <li className="list-group-item">
          <small className="text-muted">3 days ago</small>
          <PopMenu/>
          <p className="idea-text mb-0">My third idea. Get ready to have your mind blown!</p>
        </li>

      </ul>
    );
  }
}
