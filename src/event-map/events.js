import React, { Component } from 'react';
import { connect } from "react-redux";

class Events extends Component {

  fileSelectedHandler = () => {
    console.log('momo');
  }

  currentUserEvents = () => {
    // if(this.props.event){
    // return(
    //   <div id='event-card'>
    //
    //   <div id='img-container' className='image-upload'>
    //   <label for="file-input">
    //   <img id='upload-icon'src="http://cdn.onlinewebfonts.com/svg/img_234957.png"/>
    //   </label>
    //   <input type='file' onChange= {this.fileSelectedHandler} id="file-input"/>
    //   </div>
    //
    //   <div id='line'/>
    //
    //   <div id='event-descriptions'>
    //   <h1>{this.props.event.name}</h1>
    //   <h4>Description: {this.props.event.description}</h4>
    //   <p>Number of Guests:{this.props.event.number_of_guests}</p>
    //   </div>
    //
    //   <div id='button-section'>
    //   <button id='reserved-button'>Reserve</button>
    //   <button id='message-button'>Message</button>
    //   </div>
    //   </div>
    // )
    // }
      if(this.props.name){
      return(
        <div id='event-card'>

        <div id='img-container' className='image-upload'>
        <label for="file-input">
        <img id='upload-icon'src="http://cdn.onlinewebfonts.com/svg/img_234957.png"/>
        </label>
        <input type='file' onChange= {this.fileSelectedHandler} id="file-input"/>
        </div>

        <div id='line'/>

        <div id='event-descriptions'>
        <h1>{this.props.name}</h1>
        <h4>Description: {this.props.description}</h4>
        <p>Number of Guests:{this.props.number_of_guests}</p>
        </div>

        <div id='button-section'>
        <button id='reserved-button'>Reserve</button>
        <button id='message-button'>Message</button>
        </div>
        </div>
      )
    }
  }

  UserEvents = () => {

  }

  render() {
    console.log("events", this.props);
    return (
      <div>
      {this.currentUserEvents()}
      </div>
    );
  }

}

const mapStateToProps = state =>({
  currentUser: state.userReducer.currentUser,
  events: state.eventReducer.events
})


export default connect(mapStateToProps)(Events)
