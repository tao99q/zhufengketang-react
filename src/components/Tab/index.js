import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './index.less'
@connect(state => ({...state.router}))
export default class Tab extends Component {
  render() {
    let pathname = this.props;
    return (
      <nav className="footer">
        <Link to={'/home'} className={pathname='/home'?'active':''}>
          <i className="iconfont icon-xingqiu"></i>
          <span>首页</span>
        </Link>
        <Link to={'/lesson'}  className={pathname='/lesson'?'active':''}>
          <i className="iconfont icon-react"></i>
          <span>我的课程</span>
        </Link>
        <Link to={'/profile'}  className={pathname='/profile'?'active':''}>
          <i className="iconfont icon-xiaolian"></i>
          <span>个人中心</span>
        </Link>
      </nav>
    )
  }
}