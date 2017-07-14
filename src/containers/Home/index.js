import React, {Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';
import *  as actions from '../../redux/actions/home';
import Swiper from './Swiper';
import Lessons from "./Lessons/index";
@connect(state => ({...state.home}), actions)
export default class Home extends Component {
  chooseLesson = (num) => {
    this.props.setCurrentLesson(+num);
  }

  componentWillMount() {
    this.props.getSlider();
    this.props.getLesson();
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <HomeHeader choose={this.chooseLesson}/>
        <div className="content-scroll">
          <Swiper {...this.props}/>
          <Lessons {...this.props}/>
        </div>
      </div>
    )
  }
}