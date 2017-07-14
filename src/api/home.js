import {get} from './index';
let host = 'http://localhost:3000';
export function getSliders() {
  return get(`${host}/api/sliders`);
}

export function getLessons(type, offset, limit) {
  return get(`${host}/api/lessons/${type}/${offset}/${limit}`);
}