import { RECEIVE_CURRENT_USER } from '../actions/session_actions'

const _emptySession = {
  currentUser: null
}

const SessionReducer = (state = _emptySession, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user }
    default:
      return state
  }
}

export default SessionReducer
