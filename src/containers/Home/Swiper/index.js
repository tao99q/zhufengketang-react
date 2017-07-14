import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less'
export default class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  render() {
    let swipeOptions = {
      continuous: true,
      callback:  (index) => {
        this.setState({index});
      }
    }
    return (
      <div className="sliders">
        {
          this.props.sliders.length > 0 ? <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
            {
              this.props.sliders.map((slider, index) => (
                <div key={index}><img src={slider}/></div>
              ))
            }
          </ReactSwipe> : null
        }
        <ul className="dots">
          {
            this.props.sliders.map((slider, index) => (
              <span className={this.state.index == index?'active':''} key={index}></span>
            ))
          }
        </ul>
      </div>
    )
  }
}