import { APP_LOADED } from '../constants/action-types.js'

export function appLoaded(payload) {
  return { type: APP_LOADED, payload };
}