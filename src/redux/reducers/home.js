import * as Types from '../action-types';
let initState = {
  currentLesson: 0,//0代表全部课程
  sliders: [],
  lessons: {
    hasMore: true,//是否有更多
    offset: 0,//默认偏移量
    limit: 10,//限定返回的最大条数
    isLoading: false,
    list: []
  }
};
//{type:Types.SET_CURRENT_LESSON,num:1}
export function home(state = initState, action) {
  switch (action.type) {
    case Types.SET_CURRENT_LESSON:
      return {...state, currentLesson: action.num};
    case Types.GET_SLIDERS:
      return {...state, sliders: action.sliders};
    case Types.GET_LESSONS:
      return {
        ...state,
        loading: false,
        lessons: {
          ...state.lessons,
          hasMore: action.hasMore,
          list: [...state.lessons.list, ...action.lessons],
          offset:state.lessons.list.length+action.lessons.length
        }
      };
    default:
      return state;
  }
}