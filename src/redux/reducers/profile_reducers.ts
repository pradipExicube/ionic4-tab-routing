import { Action } from 'redux';
import { ProfileActions } from '../actions/profile_actions';
import { ProfileData } from '../core/profile_session';
const INITIAL_STATE: ProfileData = {
  profiledata: null,
  loading: false,
  error: "",
};

type Payload=any;
type Error=any;

export interface ActionWithPayload<T,E> extends Action {
  payload?: T;
  error?:E;
} 

export function ProfileReducer(state: ProfileData = INITIAL_STATE, action: ActionWithPayload<Payload,Error>): ProfileData {
  switch (action.type) {
    case ProfileActions.PROFILE_FETCH:
      return {
        ...state,
        profiledata: null,
        loading: true,
        error: "",
      };
    case ProfileActions.PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        profiledata: action.payload,
        loading: false,
        error: "",
      };
    case ProfileActions.PROFILE_FETCH_FAILED:
      return {
        ...state,
        profiledata: null,
        loading: false,
        error: action.error,
      };
  }

  return state;
}
