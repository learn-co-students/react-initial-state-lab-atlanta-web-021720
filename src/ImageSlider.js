// your ImageSlider code here!
import React from 'react';
// import ReactDOM from 'react-dom';
class ImageSlider extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor() {
      super()
      this.state = {
        currentSlideIndex: 0
      }
    }
  
    // our increment method makes use of the 'setState' method, which is what we use to alter state
    increment = () => {
      const newCount = this.state.currentSlideIndex + 1
      this.setState({
        currentSlideIndex: newCount
      })
    }
  
    render() {
      return (
        <div onClick={this.increment}>
          I am on slide {this.state.currentSlideIndex}
        </div>
      )
    }
  }


  export default ImageSlider;