// your Bomb code here!
import React from 'react';
class Bomb extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
      super()
      this.state = {
        secondsLeft: props.initialCount
      }

      // React.useEffect(() => {
        this.state.secondsLeft > 0 && setTimeout(this.decrement, 1000);
      // }, [this.state.secondsLeft]);
    }
  
    decrement = () => {
      const newCount = this.state.secondsLeft - 1
      this.setState({
        secondsLeft: newCount
      })
      this.state.secondsLeft > 0 && setTimeout(this.decrement, 1000);
    }

    render() {
      return (
        <div onClick={this.increment}>
          {this.state.secondsLeft}
        </div>
      )
    }
  }

  export default Bomb;