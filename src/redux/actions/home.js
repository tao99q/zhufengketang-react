import * as types from '../action-types';
import {getSliders, getLessons} from '../../api/home';
export function setCurrentLesson(num) {
  return {
    type: types.SET_CURRENT_LESSON,
    num
  }
}

export const getSlider = () => (dispatch, getState) => {
  getSliders().then(sliders => {
    dispatch({type: types.GET_SLIDERS, sliders})
  });
}

export const getLesson = () => (dispatch, getState) => {
  let {
    currentLesson,
    lessons: {
      hasMore, offset, limit
    }
  } = getState().home;
  if(hasMore){
    getLessons(currentLesson,offset,limit).then(data=>{
      dispatch({
        type:types.GET_LESSONS,
        ...data
      });
    })
  }

}