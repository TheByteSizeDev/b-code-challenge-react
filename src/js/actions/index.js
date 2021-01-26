import { APP_LOADED } from '../constants/action-types.js'

// Do I need this to be a function? Can this be handled a different way, it feels dumb to do it this way.
export function appLoaded(payload) {
  return { type: APP_LOADED, payload };
}