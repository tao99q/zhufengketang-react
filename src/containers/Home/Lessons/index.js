import React, {Component} from 'react';
import './index.less'
export default class Lessons extends Component {
  render() {
    let {lessons: {list}} = this.props;
    return (
      <ul className="lessons">
        {
          list.length > 0 ? list.map((item, index) => (
            <li key={index} className="lesson">
              <img src={item.url} alt=""/>
              <p>{item.lesson}</p>
              <strong>{item.price}</strong>
            </li>
          )) : '正在加载'
        }
      </ul>
    )
  }
}