import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../core/store_modal';
import { ProfileData } from '../core/profile_session';

@Injectable()
export class ProfileActions {

  static PROFILE_FETCH = 'PROFILE_FETCH';
  static PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
  static PROFILE_FETCH_FAILED = 'PROFILE_FETCH_FAILED';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fetchProfile() {
    this.ngRedux.dispatch({
      type: ProfileActions.PROFILE_FETCH,
      payload: "null"
    });
  };

  ProfileFetchSuccess(payload:ProfileData) {
    //console.log("hello");
    //console.log(payload);
    
    this.ngRedux.dispatch({
      type: ProfileActions.PROFILE_FETCH_SUCCESS,
      payload: payload,
    });
  };

  ProfileFetchFailed(error) {
    //console.log(error);
    this.ngRedux.dispatch({
      type: ProfileActions.PROFILE_FETCH_FAILED,
      error:error
    });
  };

}