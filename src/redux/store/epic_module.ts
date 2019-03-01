
import { Injectable } from '@angular/core';
import { createEpicMiddleware } from 'redux-observable';
import { ProfileEpics } from '../epics/profile_epic';



@Injectable()
export class RootEpics {
  constructor(
      private profilepics: ProfileEpics,

  ) {}

  public createEpics() {
    return [
        createEpicMiddleware(this.profilepics.profile),
    ];
  }
}